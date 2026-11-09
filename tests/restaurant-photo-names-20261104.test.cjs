const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const food=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
function parse(prefix){const at=food.indexOf(prefix);assert.ok(at>=0,prefix);return JSON.parse(food.slice(at+prefix.length,food.indexOf(';',at+prefix.length)));}
const photos=parse('const USER_RESTAURANT_PHOTOS=');
test('New restaurant photos use readable store-name filenames',()=>{
 const expected={b4:'northernTerraceDiner.webp','x-shik':'lakesideKitchenTonton.webp',noboDaio:'ajinoDaioNoboribetsu.webp'};
 for(const [id,file] of Object.entries(expected)){
  assert.equal(photos[id],file);
  const target=path.join(root,'assets/photos/restaurants',file);
  assert.ok(fs.statSync(target).size>10000,file+' missing or empty');
  assert.ok(sw.includes('./assets/photos/restaurants/'+file),file+' not precached');
 }
});
test('All restaurant photo filenames are store names, not schedule IDs',()=>{
 for(const [id,file] of Object.entries(photos)){
  assert.doesNotMatch(file,/^(?:[bdl]\d+|x-[a-z0-9-]+)\.(?:webp|png)$/i,'ID-like filename for '+id+': '+file);
  assert.match(file,/^[\p{L}\p{N} ・-]+\.(?:webp|png)$/u,'Photo filename for '+id+' should be a readable store name');
  assert.ok(fs.existsSync(path.join(root,'assets/photos/restaurants',file)),file+' missing');
  assert.ok(sw.includes('./assets/photos/restaurants/'+file),file+' not precached');
 }
});
test('Photo cache version is bumped for renamed and new assets',()=>{
 const cache=sw.match(/const CACHE_NAME='sapporo-travel-shell-v(\d+)'/);
 assert.ok(cache);
 assert.ok(Number(cache[1])>=31);
});
