// Run: node --test tests/restaurant-photos-20261104.test.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const f=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const c=fs.readFileSync(path.join(root,'js/dining-catalog.js'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
function parse(src,key){const at=src.indexOf(key);assert.ok(at>=0,key);const end=src.indexOf(';',at+key.length);return JSON.parse(src.slice(at+key.length,end));}
const photos=parse(f,'const USER_RESTAURANT_PHOTOS=');
const t=parse(f,'const TABELOG_DIRECT=');
const catalog=parse(c,'window.HOKKAIDO_DINING=').catalog;
test('Four supplied user photos exist and map to the correct venues',()=>{
 const expected={citySuage:'suagePlus.webp',cityIchigen:'ichigenSohonten.webp',cityOkushiba:'okushibaSoseiji.webp',l4:'otaruMasazushiHonten.webp'};
 for(const [id,file] of Object.entries(expected)){
  assert.equal(photos[id],file);
  assert.ok(fs.existsSync(path.join(root,'assets/photos/restaurants',file)));
  assert.ok(sw.includes('./assets/photos/restaurants/'+file));
 }
 assert.notEqual(photos.airportIchigen,photos.cityIchigen,'Main and airport Ichigen must use different images');
});
test('Poseidon Tabelog branch, official website and opening hours are correct',()=>{
 assert.equal(t.otaruPoseidon,'https://tabelog.com/hokkaido/A0106/A010601/1042928/');
 const p=catalog.otaruPoseidon;
 assert.equal(p.source,'https://www.otaru-poseidon.jp/');
 assert.equal(p.address,'北海道小樽市堺町4-9');
 assert.match(p.hours,/11:00–18:30/);
 assert.match(p.hours,/L\.O\. 18:00/);
});
test('Rendering still prefers user-supplied images over placeholders',()=>{
 assert.ok(f.indexOf('const supplied=suppliedPhotoMarkup(p);')<f.indexOf('const photo=VERIFIED_RESTAURANT_PHOTOS[p.id]'));
});
test('Six newly supplied restaurant photos map to exact IDs and are precached',()=>{
 const expected={otaruIse:'isezushiOtaruEkinaka.webp',l5:'narutoHonten.webp',otaruSankaku:'takinamiShokudo.webp',l6:'kumagera.webp','x-tomita':'tomitaMelonHouse.webp',furanoKodamaya:'kodamaya.webp',furanoNatural:'naturalDiningFurano.webp',furanoFukuzushi:'fukuzushi.webp'};
 for(const [id,file] of Object.entries(expected)){
  assert.equal(photos[id],file);
  assert.ok(fs.statSync(path.join(root,'assets/photos/restaurants',file)).size>0,file+' missing or empty');
  assert.ok(sw.includes('./assets/photos/restaurants/'+file),file+' not precached');
 }
 assert.match(f,/USER_RESTAURANT_PHOTO_CREDITS=\{l5:'圖片由使用者提供 · booji\.com／小布少爺'\}/);
});
