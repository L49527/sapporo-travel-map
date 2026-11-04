// Run: node --test tests/dining-coverage.test.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const window={};
vm.runInNewContext(fs.readFileSync(path.join(root,'js/dining-catalog.js'),'utf8'),{window});
const {catalog,roster}=window.HOKKAIDO_DINING;
const guide=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const parseArray=name=>{const prefix='const '+name+'=';const start=guide.indexOf(prefix);assert.ok(start>=0,'missing '+name);const end=guide.indexOf(';',start);return JSON.parse(guide.slice(start+prefix.length,end));};
const existing=[...parseArray('MEALS'),...parseArray('EXTRA_MEALS')];
function mealPlace(id){return catalog[id]||existing.find(p=>p.id===id);}
for(const day of ['0','1','2','3','4','5A','5B','5C','6']){
 test('Day '+day+' has at least five distinct lunch and dinner choices',()=>{
  for(const kind of ['lunch','dinner']){
   const ids=roster[day][kind];
   assert.ok(ids.length>=5,kind+' under five');
   const names=ids.map(id=>{const p=mealPlace(id);assert.ok(p,'unknown venue '+id);return p.name.toLowerCase().normalize('NFKC')});
   assert.ok(new Set(names).size>=5,kind+' has duplicates');
  }
 });
}
test('default view limits and map wiring',()=>{
 assert.ok(guide.includes('const FEATURED={breakfast:3,lunch:3,dinner:3,gifts:3};'));
 assert.match(guide,/hokkaido:daychange/);
 assert.match(guide,/function refreshMap/);
 for(const kind of ['lunch','dinner'])assert.ok(html.includes('id="dd-meals-'+kind+'"'));
 assert.ok(html.indexOf('dining-catalog.js')<html.indexOf('food-guide.js'));
});
