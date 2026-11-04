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

test('every hotel recommendation has exterior and 3+ person room data',()=>{
  const hotels=parseHotels();
  assert.equal(hotels.length,9);
  for(const hotel of hotels){
    assert.match(hotel.photo,/^https:\/\//,hotel.name+' photo URL');
    assert.match(hotel.photoSource,/^https:\/\//,hotel.name+' source URL');
    assert.match(hotel.photoAlt,/^https:\/\//,hotel.name+' room image URL');
    assert.match(hotel.photoAltSource,/^https:\/\//,hotel.name+' room source URL');
    assert.match(hotel.roomType,/3|Triple|Family|Park-side/i,hotel.name+' room type');
    assert.match(hotel.facilities,/洗衣/,hotel.name+' laundry information');
    assert.notEqual(hotel.photo,hotel.photoSource,hotel.name+' uses an image URL');
  }
  assert.match(hotels.find(h=>h.name==='三井花園飯店札幌西').photoFallback,/^https:\/\//);
  assert.match(hotels.find(h=>h.name==='札幌 Cross Hotel').photoFallback,/^https:\/\//);
  const forza=hotels.find(h=>h.name==='札幌站前 HOTEL FORZA');
  assert.match(forza.photo,/hotelforza\.jp\/sapporo\/ekimae\/assets\/perf-20261025/);
  assert.match(forza.photoAlt,/hotelforza\.jp\/sapporo\/ekimae\/images\/rooms\/family-triple_gallery_01\.webp/);
  assert.doesNotMatch(forza.photoAlt,/img_slide_family_triple_01-sp\.jpg/);
  assert.ok(hotels.every(h=>h.photoAlt),'every hotel has an interior photo for the second slide');
});

test('hotel cards render the photo and visible source link',()=>{
  assert.match(app,/class="hotel-photo/);
  assert.match(app,/loading="lazy"/);
  assert.match(app,/外觀來源/);
  assert.match(app,/3人房來源/);
  assert.match(app,/class="facilities"/);
  assert.match(app,/photoSource/);
  assert.match(app,/data-fallback/);
  assert.match(app,/photo-missing/);
  assert.match(app,/data-slides/);
  assert.match(app,/setInterval/);
  assert.doesNotMatch(app,/照片輪換/);
});
