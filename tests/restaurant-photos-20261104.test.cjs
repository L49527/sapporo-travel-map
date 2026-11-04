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
 for(const id of ['citySuage','cityIchigen','cityOkushiba','l4']){
  assert.equal(photos[id],id+'.webp');
  assert.ok(fs.existsSync(path.join(root,'assets/photos/restaurants',id+'.webp')));
  assert.ok(sw.includes('./assets/photos/restaurants/'+id+'.webp'));
 }
 assert.notEqual(photos.airportIchigen,photos.cityIchigen,'Main and airport Ichigen must use different images');
});
test('Poseidon Tabelog branch, official website and opening hours are correct',()=>{
 assert.equal(t.otaruPoseidon,'https://tabelog.com/hokkaido/A0106/A010601/1042928/');
 const p=catalog.otaruPoseidon;
 assert.equal(p.source,'https://www.otaru-poseidon.jp/');
 assert.equal(p.address,'北海道小樽市堺町4-9');
 assert.match(p.hours,/11:00–18:00/);
});
test('Rendering still prefers user-supplied images over placeholders',()=>{
 assert.ok(f.indexOf('const supplied=suppliedPhotoMarkup(p);')<f.indexOf('const photo=VERIFIED_RESTAURANT_PHOTOS[p.id]'));
});
