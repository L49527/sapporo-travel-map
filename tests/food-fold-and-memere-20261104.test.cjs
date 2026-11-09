const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const food=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
function parse(prefix){const at=food.indexOf(prefix);assert.ok(at>=0,prefix);return JSON.parse(food.slice(at+prefix.length,food.indexOf(';',at+prefix.length)));}
test('Memere lakeside sweets uses a user photo and no Tabelog dependency',()=>{
 const photos=parse('const USER_RESTAURANT_PHOTOS=');
 const gifts=parse('const EXTRA_GIFTS=');
 assert.ok(gifts.some(g=>g.id==='gx-shik'&&g.name.includes('メメール')));
 assert.equal(photos['gx-shik'],'メメール・支笏湖義式冰淇淋.webp');
 assert.ok(fs.statSync(path.join(root,'assets/photos/restaurants/メメール・支笏湖義式冰淇淋.webp')).size>10000);
 assert.ok(sw.includes('./assets/photos/restaurants/メメール・支笏湖義式冰淇淋.webp'));
 const direct=parse('const TABELOG_DIRECT=');
 assert.equal(direct['gx-shik'],undefined,'gift has no Tabelog page');
});
test('Meal groups fold only after three cards',()=>{
 assert.ok(food.includes('const FEATURED={breakfast:3,lunch:3,dinner:3,gifts:3};'));
 assert.match(food,/mealGrids\[meal\]\.innerHTML=\(expanded\[meal\]\?options:options\.slice\(0,limit\)\)/);
 assert.match(food,/btn\.hidden=!remainder/);
});
