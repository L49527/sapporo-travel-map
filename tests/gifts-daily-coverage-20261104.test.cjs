const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const food=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
function val(prefix){
 const at=food.indexOf(prefix);
 assert.ok(at>=0,'Missing '+prefix);
 return eval('('+food.slice(at+prefix.length,food.indexOf(';',at+prefix.length))+')');
}
const GIFTS=val('const GIFTS=');
const EXTRA=val('const EXTRA_GIFTS=');
const DAYS=val('const GIFT_DAYS=');
const ZONE=val('const GIFT_ZONE=');
const HOURS=val('const SHOP_HOURS=');

const dayZones={
 0:['station','susukino','odori'],
 1:['station','odori','nijo','susukino'],
 2:['yoichi','otaru','sakaimachi'],
 3:['furano','tomita','biei','station'],
 4:['odori','nijo','station','susukino'],
 6:['station','airport']
};
const day5Zones={
 A:['noboribetsu','station'],
 B:['shakotan','otaru','sakaimachi','station'],
 C:['jozankei','station']
};

function giftsFor(day,zones){
 return [
  ...GIFTS.filter(g=>(DAYS[day]||[]).includes(g.id)).map(g=>({id:g.id,zone:ZONE[g.id]})),
  ...EXTRA.filter(g=>g.index===day).map(g=>({id:g.id,zone:g.zone}))
 ].filter(g=>g.zone&&zones.includes(g.zone));
}

test('Every day offers at least three gift candidates',()=>{
 for(const day of [0,1,2,3,4,6]){
  const list=giftsFor(day,dayZones[day]);
  assert.ok(list.length>=3,'Day '+day+' only has '+list.length+' gifts');
  assert.equal(new Set(list.map(g=>g.id)).size,list.length,'Day '+day+' repeats a gift');
 }
 for(const plan of ['A','B','C']){
  const list=giftsFor(5,day5Zones[plan]);
  assert.ok(list.length>=3,'Day 5 plan '+plan+' only has '+list.length+' gifts');
  assert.equal(new Set(list.map(g=>g.id)).size,list.length,'Day 5 plan '+plan+' repeats a gift');
 }
});

test('Every gift candidate has concrete opening hours and a source',()=>{
 const all=[...GIFTS,...EXTRA];
 for(const g of all){
  const h=HOURS[g.id];
  assert.ok(h,'missing hours for '+g.id);
  assert.match(h.display,/\d{2}:\d{2}/,'hours for '+g.id+' must contain a time');
  assert.doesNotMatch(h.display,/待確認|請查|待核實/,'hours for '+g.id+' are still a placeholder');
  assert.ok(/^https?:\/\//.test(h.source),'hours source for '+g.id);
  assert.ok(/^https?:\/\//.test(g.source),'shop source for '+g.id);
 }
});

test('Gift shop photos referenced by users are precached',()=>{
 const mappings=val('const USER_RESTAURANT_PHOTOS=');
 const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
 for(const id of ['s7','gx-furano','x-joz','gx-joz','gx-shik']){
  assert.ok(mappings[id],'photo mapping for '+id);
  assert.ok(sw.includes('./assets/photos/restaurants/'+mappings[id]),mappings[id]+' not precached');
 }
});
