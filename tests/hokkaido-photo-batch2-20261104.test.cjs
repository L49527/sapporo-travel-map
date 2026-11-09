const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const food=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
function parse(prefix){const at=food.indexOf(prefix);assert.ok(at>=0,prefix);return JSON.parse(food.slice(at+prefix.length,food.indexOf(';',at+prefix.length)));}
const photos=parse('const USER_RESTAURANT_PHOTOS=');
const expected={
 noboNobojin:'hokkaidoBbqNobojin.webp',
 shakotanNakamuraya:'nakamurayaShakotan.webp',
 shakotanFuji:'fujizushiShakotan.webp',
 shakotanRinkou:'rinkouShokudo.webp',
 shakotanSugino:'suginoUnizenShakotan.webp',
 jozanIchi:'shokudoIchiJozan.webp',
 jozanKonno:'食堂こんの.webp',
 jozanShiumai:'shiumaiHayama.webp',
 jozanFranse:'franseJozan.webp',
 jozanHakken:'hakkenzanKitchenMarche.webp',
 noboKitaUdon:'kitaNoboruUdon.webp',
 noboEnmaken:'enmakenNoboribetsu.webp'
};
test('Second 2026-11-04 photo batch maps each shop to its own store-named file',()=>{
 for(const [id,file] of Object.entries(expected)){
  assert.equal(photos[id],file,id+' mapping');
  const target=path.join(root,'assets/photos/restaurants',file);
  assert.ok(fs.statSync(target).size>10000,file+' missing or too small');
  assert.ok(sw.includes('./assets/photos/restaurants/'+file),file+' not precached');
 }
});
test('Second photo batch files are all distinct',()=>{
 const files=Object.values(expected);
 assert.equal(new Set(files).size,files.length);
 for(const file of files){
  assert.match(file,/^[\p{L}\p{N} ・-]+\.webp$/u,file+' should be a readable store name');
 }
});
test('Photo cache version bumped again for the second batch',()=>{
 const cache=sw.match(/const CACHE_NAME='sapporo-travel-shell-v(\d+)'/);
 assert.ok(cache);
 assert.ok(Number(cache[1])>=32);
});
