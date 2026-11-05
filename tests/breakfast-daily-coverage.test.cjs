// Run: node --test tests/breakfast-daily-coverage.test.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const guide=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');

const readLiteral=(source,prefix)=>{
 const start=source.indexOf(prefix);
 assert.ok(start>=0,'missing '+prefix);
 const literal=source.slice(start+prefix.length,source.indexOf(';',start));
 return vm.runInNewContext('('+literal+')');
};
const meals=readLiteral(guide,'const MEALS=');
const extra=readLiteral(guide,'const BREAKFAST_EXTRA=');
const roster=readLiteral(guide,'const BREAKFAST_ROSTER=');
const zones=readLiteral(guide,'const MEAL_ZONE=');
const breakfasts=[...meals,...extra].filter(p=>p.meal==='breakfast');
const byId=new Map(breakfasts.map(p=>[p.id,p]));

for(const key of ['0','1','2','3','4','5','5A','5B','5C','6']){
 test('Day '+key+' offers at least three distinct breakfast candidates',()=>{
  const ids=roster[key];
  assert.ok(Array.isArray(ids),'missing breakfast roster for '+key);
  assert.ok(ids.length>=3,'breakfast under three on day '+key);
  const names=ids.map(id=>{
   const p=byId.get(id);
   assert.ok(p,'unknown breakfast venue '+id);
   assert.ok(zones[id],'missing map zone for '+id);
   return p.name.normalize('NFKC').toLowerCase().trim();
  });
  assert.ok(new Set(names).size>=3,'breakfast names duplicate on day '+key);
 });
}

test('breakfast rotation avoids back-to-back repeats',()=>{
 const days=['1','2','3','4','5','6'];
 for(let i=1;i<days.length;i++){
  const previous=new Set(roster[days[i-1]]);
  const current=roster[days[i]];
  assert.ok(current.every(id=>!previous.has(id)),'breakfast repeats on consecutive days '+days[i-1]+' and '+days[i]);
 }
});

test('each breakfast venue appears at most twice across the six mornings',()=>{
 const appearances=new Map();
 for(const day of ['1','2','3','4','5','6']){
  for(const id of roster[day])appearances.set(id,(appearances.get(id)||0)+1);
 }
 for(const [id,count] of appearances){
  assert.ok(count<=2,id+' appears '+count+' times');
 }
});

test('breakfast no longer disappears on day-trip dates',()=>{
 assert.doesNotMatch(guide,/p\.day\.includes\(date\)/);
 assert.match(guide,/const breakfasts=\(BREAKFAST_ROSTER\[key\]/);
 assert.match(html,/早餐每天至少三個/);
 assert.match(html,/避免連日重複/);
});
