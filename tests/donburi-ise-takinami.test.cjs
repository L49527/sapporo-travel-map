const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const src=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const cat=fs.readFileSync(path.join(root,'js/dining-catalog.js'),'utf8');
const readJSON=(str,prefix)=>{let i=str.indexOf(prefix);assert.ok(i>=0);return JSON.parse(str.slice(i+prefix.length,str.indexOf(';',i+prefix.length)));};
const pics=readJSON(src,'const USER_RESTAURANT_PHOTOS=');
const links=readJSON(src,'const TABELOG_DIRECT=');
const restaurants=readJSON(cat,'window.HOKKAIDO_DINING=').catalog;
test('Donburi Chaya uses the supplied image named for its branch',()=>{
 const file='どんぶり茶屋 二條市場店.webp';
 assert.equal(pics.b2,file);
 assert.ok(fs.existsSync(path.join(root,'assets/photos/restaurants',file)));
 assert.ok(fs.readFileSync(path.join(root,'sw.js'),'utf8').includes('./assets/photos/restaurants/'+file));
 assert.ok(fs.existsSync(path.join(root,'docs/archive/corrupted-photos-20261107/donburiChayaNijo.png')));
 assert.match(src,/if\(p\.meal\)return verifiedRestaurantPhoto\(p\)/);
});
test('Otaru Isezushi station and Takinami Tabelog links are correct',()=>{
 assert.equal(links.otaruIse,'https://tabelog.com/hokkaido/A0106/A010601/1045303/');
 assert.equal(links.otaruSankaku,'https://tabelog.com/hokkaido/A0106/A010601/1027887/');
 assert.match(restaurants.otaruIse.hours,/11:00–15:00/);
 assert.match(restaurants.otaruSankaku.hours,/07:00–17:00/);
 const expected={otaruIse:'isezushiOtaruEkinaka.webp',otaruSankaku:'takinamiShokudo.webp',l5:'narutoHonten.webp',l6:'kumagera.webp','x-tomita':'tomitaMelonHouse.webp',furanoKodamaya:'kodamaya.webp',furanoNatural:'naturalDiningFurano.webp',furanoFukuzushi:'fukuzushi.webp'};
 const files=Object.entries(expected).map(([id,file])=>{
  assert.equal(pics[id],file);
  const target=path.join(root,'assets/photos/restaurants',file);
  assert.ok(fs.existsSync(target),file+' missing');
  assert.ok(fs.statSync(target).size>0,file+' empty');
  return file;
 });
 assert.equal(new Set(files).size,files.length,'new restaurant photos must be unique');
 assert.match(src,/booji\.com／小布少爺/);
 assert.equal(links.l6,'https://tabelog.com/hokkaido/A0104/A010403/1000298/');
 assert.equal(links['x-biei'],'https://tabelog.com/hokkaido/A0104/A010403/1005336/');
 assert.equal(links['x-tomita'],'https://tabelog.com/hokkaido/A0104/A010403/1024348/');
});


test('RESTAURANT ASPERGES uses its supplied branch-named photograph',()=>{
 const file='RESTAURANT ASPERGES.webp';
 assert.equal(pics['x-biei'],file);
 assert.ok(fs.existsSync(path.join(root,'assets/photos/restaurants',file)));
 assert.ok(fs.readFileSync(path.join(root,'sw.js'),'utf8').includes('./assets/photos/restaurants/'+file));
});


test('new user photos use corresponding card names',()=>{
 const expected={
  furanoYuiga:'唯我獨尊 Yuiga Doxon.webp',
  'gx-shik':'メメール・支笏湖義式冰淇淋.webp',
  jozanKonno:'食堂こんの.webp',
  'gx-joz':'定山溪手工蘋果派.webp',
  'x-joz':'定山溪手工蘋果派.webp'
 };
 const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
 for(const [id,file] of Object.entries(expected)){
  assert.equal(pics[id],file);
  assert.ok(fs.existsSync(path.join(root,'assets/photos/restaurants',file)));
  assert.ok(sw.includes('./assets/photos/restaurants/'+file));
 }
});
