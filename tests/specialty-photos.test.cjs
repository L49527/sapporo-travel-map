const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const food=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');

function parse(prefix){
 const at=food.indexOf(prefix);
 assert.ok(at>=0,'missing '+prefix);
 return JSON.parse(food.slice(at+prefix.length,food.indexOf(';',at+prefix.length)));
}

test('five supplied specialty photos map to the intended products and are precached',()=>{
 const photos=parse('const USER_SPECIALTY_PHOTOS=');
 const expected={
  s8:'bieiCornBread.png',
  s9:'jagaPokkuru.png',
  s11:'furanoLavenderCandle.png',
  s12:'furanoWineCheddarCheese.png',
  s13:'horiYubariMelonPureJelly.png'
 };
 assert.deepEqual(photos,expected);
 for(const file of Object.values(expected)){
  const target=path.join(root,'assets/photos/specialties',file);
  assert.ok(fs.statSync(target).size>10000,file+' missing or too small');
  assert.ok(sw.includes('./assets/photos/specialties/'+file),file+' not precached');
 }
 assert.match(food,/suppliedSpecialtyPhotoMarkup\(p\)/);
 assert.match(food,/data-specialty-photo/);
});
