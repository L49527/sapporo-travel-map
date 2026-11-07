const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const f=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
function data(prefix){const start=f.indexOf(prefix); assert.ok(start!==-1);const end=f.indexOf(';',start+prefix.length);return JSON.parse(f.slice(start+prefix.length,end));}
const photos=data('const USER_RESTAURANT_PHOTOS=');
const realFiles=new Set(Object.values(photos));
test('user photograph mapping retains known same-shop duplicates',()=>{
 // donburi b2/どんぶり茶屋 原檔截斷（docs/archive/corrupted-photos-20261107），已移除映射，不再是同店別名
 const aliases=[['l7','d7'],['l1','d6'],['x-yoi','gx-yoi'],['x-nobo','gx-nobo'],['x-joz','gx-joz']];
 for(const [a,b] of aliases)assert.equal(photos[a],photos[b]);
 assert.equal(Object.keys(photos).length-realFiles.size,aliases.length,'unexpected cross-shop image reuse');

 assert.equal(photos.l7,photos.d7);
 assert.equal(photos.l1,photos.d6);
 for(const [id,file] of Object.entries(photos)){
  assert.match(file,/^[\p{L}\p{N}-]+\.(?:webp|png)$/u,'Invalid photo name for '+id);
 }
});
test('new restaurant photo mappings cover each supplied venue',()=>{
 for(const [id,file] of Object.entries({otaruIse:'isezushiOtaruEkinaka.webp',l5:'narutoHonten.webp',otaruSankaku:'takinamiShokudo.webp',l6:'kumagera.webp','x-tomita':'tomitaMelonHouse.webp',furanoKodamaya:'kodamaya.webp',furanoNatural:'naturalDiningFurano.webp',furanoFukuzushi:'fukuzushi.webp'})){
  assert.equal(photos[id],file);
  assert.ok(require('node:fs').statSync(path.join(root,'assets/photos/restaurants',file)).size>0,file+' missing or empty');
 }
});
test('Misaki Tabelog link and opening hours are correct',()=>{
 const direct=data('const TABELOG_DIRECT=');
 assert.equal(direct['x-shako'],'https://tabelog.com/hokkaido/A0106/A010602/1003109/');
 const extra=data('const EXTRA_MEALS=');
 const misaki=extra.find(x=>x.id==='x-shako');
 assert.ok(misaki);
 assert.match(misaki.hours,/09:00–15:00/);
 assert.equal(misaki.source,'https://osyokujidokoromisaki.com/about');
});
test('Restaurant photo display uses user asset before other sources',()=>{
 assert.match(f,/function suppliedPhotoMarkup\(p\)/);
 assert.match(f,/const supplied=suppliedPhotoMarkup\(p\)/);
 assert.match(f,/if\(supplied\)return supplied/);
 assert.match(f,/photoErrorFallback/);
});
