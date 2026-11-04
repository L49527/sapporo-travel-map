const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const script=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
function get(name){const prefix='const '+name+'=';const i=script.indexOf(prefix);assert.ok(i>=0);const j=script.indexOf(';',i);return JSON.parse(script.slice(i+prefix.length,j));}
test('Store photos are unique except same Kakizaki physical shop',()=>{
 const photos=get('USER_RESTAURANT_PHOTOS');
 assert.equal(photos.b1,'b1.webp');
 assert.equal(photos['x-yoi'],'x-yoi.webp');
 assert.equal(photos['gx-yoi'],'x-yoi.webp');
 assert.equal(photos.otaruPoseidon,'otaruPoseidon.webp');
 for(const file of new Set(['b1.webp','x-yoi.webp','otaruPoseidon.webp'])){
   assert.ok(fs.existsSync(path.join(root,'assets/photos/restaurants',file)),file+' missing');
   assert.ok(sw.includes('./assets/photos/restaurants/'+file));
 }
});
test('Tabelog links and business hours are branch-specific',()=>{
 const direct=get('TABELOG_DIRECT');
 assert.equal(direct.b1,'https://tabelog.com/hokkaido/A0101/A010104/1001503/');
 assert.equal(direct.b2,'https://tabelog.com/hokkaido/A0101/A010103/1000272/');
 assert.equal(direct['x-yoi'],'https://tabelog.com/hokkaido/A0106/A010602/1000224/');
 assert.equal(direct.otaruPoseidon,'https://tabelog.com/hokkaido/A0106/A010601/1042928/');
 const entries=get('MEALS');
 assert.match(entries.find(x=>x.id==='b1').hours,/24 小時/);
 assert.match(entries.find(x=>x.id==='b2').hours,/07:30–16:30/);
});
test('Souvenir photo reuses same-store image rather than generic photo',()=>{
 assert.match(script,/const userPhoto=suppliedPhotoMarkup\(p\)/);
 assert.match(script,/if\(userPhoto\)return userPhoto/);
});
