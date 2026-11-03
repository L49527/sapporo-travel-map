const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const f=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
function data(prefix){const start=f.indexOf(prefix); assert.ok(start!==-1);const end=f.indexOf(';',start+prefix.length);return JSON.parse(f.slice(start+prefix.length,end));}
const photos=data('const USER_RESTAURANT_PHOTOS=');
const realFiles=new Set(Object.values(photos));
test('user photograph mapping has 17 distinct assets and known same-shop duplicates',()=>{
 assert.equal(realFiles.size,17);
 assert.equal(Object.keys(photos).length,19);
 assert.equal(photos.l7,photos.d7);
 assert.equal(photos.l1,photos.d6);
 for(const [id,file] of Object.entries(photos)){
  assert.match(file,/^[A-Za-z0-9-]+\.webp$/,'Invalid photo name for '+id);
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
