const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');

const candidateRoots=[path.resolve(__dirname,'..'),path.resolve(__dirname,'../..')];
const root=candidateRoots.find(r=>fs.existsSync(path.join(r,'js/app.js'))) || candidateRoots[0];
const appPath=fs.existsSync(path.join(__dirname,'app.js'))
  ? path.join(__dirname,'app.js')
  : path.join(root,'js/app.js');
const app=fs.readFileSync(appPath,'utf8');

function parseHotels(){
  const start=app.indexOf('const hotels=');
  assert.ok(start>=0,'hotel data is present');
  const arrayStart=app.indexOf('[',start);
  const arrayEnd=app.indexOf('];',arrayStart)+1;
  assert.ok(arrayEnd>arrayStart,'hotel data closes cleanly');
  return Function('return '+app.slice(arrayStart,arrayEnd))();
}

test('every hotel recommendation has photos and room data for 3 adults at 27 m² or larger',()=>{
  const hotels=parseHotels();
  assert.equal(hotels.length,12);
  for(const hotel of hotels){
    assert.match(hotel.photo,/^(https:\/\/|\.\/assets\/)/,hotel.name+' photo URL');
    assert.match(hotel.photoSource,/^https:\/\//,hotel.name+' source URL');
    assert.match(hotel.photoAlt,/^(https:\/\/|\.\/assets\/)/,hotel.name+' room image URL');
    assert.match(hotel.photoAltSource,/^https:\/\//,hotel.name+' room source URL');
    assert.ok(hotel.roomType,hotel.name+' room type');
    assert.match(hotel.roomSizeSource,/^https:\/\//,hotel.name+' room size source');
    assert.ok(hotel.roomSizes.length,hotel.name+' has room sizes');
    assert.ok(hotel.roomSizes.every(({area})=>Number.isFinite(area)&&area>=27),hotel.name+' meets the 27 m² minimum');
    assert.match(hotel.facilities,/洗衣/,hotel.name+' laundry information');
    assert.notEqual(hotel.photo,hotel.photoSource,hotel.name+' uses an image URL');
  }
  assert.match(hotels.find(h=>h.name==='三井花園飯店札幌西').photoFallback,/^https:\/\//);
  assert.match(hotels.find(h=>h.name==='札幌 Cross Hotel').photoFallback,/^https:\/\//);
  assert.ok(hotels.every(h=>h.photoAlt),'every hotel has an interior photo for the second slide');
});

test('hotel cards render the photo and visible source link',()=>{
  assert.match(app,/class="hotel-photo/);
  assert.match(app,/loading="lazy"/);
  assert.match(app,/外觀來源/);
  assert.match(app,/客房照片來源/);
  assert.match(app,/class="facilities"/);
  assert.match(app,/class="room-size"/);
  assert.match(app,/photoSource/);
  assert.match(app,/data-fallback/);
  assert.match(app,/photo-missing/);
  assert.match(app,/data-slides/);
  assert.match(app,/setInterval/);
  assert.doesNotMatch(app,/照片輪換/);
});

test('hotel filters render only qualifying rooms and keep the active filter in sync',()=>{
  const vm=require('node:vm');
  const grid={innerHTML:''};
  const filters=['all','A','B','C'];
  const buttons=filters.map(filter=>({
    dataset:{filter},
    classList:{toggle(){}},
    setAttribute(name,value){this[name]=value;}
  }));
  const context=vm.createContext({
    hotels:parseHotels(),
    state:{filter:'all'},
    hotelPhotoTimers:[],
    $:selector=>selector==='#hotelGrid'?grid:buttons[0],
    $$:selector=>selector==='[data-filter]'?buttons:[],
    clean:String,
    clearInterval(){}
  });
  const start=app.indexOf('function renderRoomSizes(');
  const end=app.indexOf('function value(',start);
  vm.runInContext(app.slice(start,end),context);

  for(const [filter,expectedCount] of Object.entries({all:12,A:7,B:9,C:6})){
    context.state.filter=filter;
    vm.runInContext('renderHotels()',context);
    const areas=[...grid.innerHTML.matchAll(/<strong>([\d.]+) m²<\/strong>/g)];
    assert.equal((grid.innerHTML.match(/class="room-size"/g)||[]).length,expectedCount);
    assert.ok(areas.length>=expectedCount && areas.every(match=>Number(match[1])>=27));
    assert.deepEqual(buttons.filter(button=>button['aria-pressed']==='true').map(button=>button.dataset.filter),[filter]);
  }
  assert.equal(buttons[0].textContent,'全部 12 間');
});
