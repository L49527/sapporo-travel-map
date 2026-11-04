const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const js=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const dining=fs.readFileSync(path.join(root,'js/dining-catalog.js'),'utf8');
const json=(text,prefix)=>{
 const start=text.indexOf(prefix);assert.notEqual(start,-1,'Missing '+prefix);
 const end=text.indexOf(';',start+prefix.length);
 return JSON.parse(text.slice(start+prefix.length,end));
};
const direct=json(js,'const TABELOG_DIRECT=');
const original=json(js,'const MEALS=');
const extras=json(js,'const EXTRA_MEALS=');
const catalog=json(dining,'window.HOKKAIDO_DINING=').catalog;
const restaurants=[...original,...extras,...Object.values(catalog)];
test('All restaurant cards provide a Tabelog photo lookup',()=>{
 for(const id of ['l5','l6','x-biei','x-tomita','otaruIse','otaruSankaku'])
  assert.ok(restaurants.some(x=>x.id===id),'Missing expected restaurant '+id);
 assert.ok(restaurants.length>0);
 assert.match(js,/function tabelogPhotoLink\(p\)/);
 assert.match(js,/tabelog\.com\/rstLst\/\?sk=/);
 assert.match(js,/restaurantPhotoSourceLinks\(p\)/);
 assert.match(js,/if\(p\.meal\)return verifiedRestaurantPhoto\(p\)/);
});
test('Every restaurant record has a verified direct Tabelog page',()=>{
 for(const restaurant of restaurants){
  assert.ok(direct[restaurant.id],'Missing direct Tabelog link for '+restaurant.id+' '+restaurant.name);
 }
 assert.equal(direct.cityOkushiba,'https://tabelog.com/hokkaido/A0101/A010101/1041930/');
});
test('Direct restaurant links are known, valid and only used for known places',()=>{
 const ids=new Set(restaurants.map(x=>x.id));
 assert.ok(Object.keys(direct).length>0);
 for(const [id,url] of Object.entries(direct)){
  assert.ok(ids.has(id),'Tabelog direct link for unknown shop '+id);
  assert.match(url,/^https:\/\/tabelog\.com\/hokkaido\/A\d+\/A\d+\/\d+\/$/);
 }
 for(const [id,url] of Object.entries({
  l6:'https://tabelog.com/hokkaido/A0104/A010403/1000298/',
  'x-biei':'https://tabelog.com/hokkaido/A0104/A010403/1005336/',
  'x-tomita':'https://tabelog.com/hokkaido/A0104/A010403/1024348/',furanoYuiga:'https://tabelog.com/hokkaido/A0104/A010403/1000063/',furanoKodamaya:'https://tabelog.com/hokkaido/A0104/A010403/1010159/',furanoNatural:'https://tabelog.com/hokkaido/A0104/A010403/1061688/',furanoFukuzushi:'https://tabelog.com/hokkaido/A0104/A010403/1007198/'
 })){
  assert.ok(ids.has(id));
  assert.equal(direct[id],url);
 }
});
test('Photo links and internal map clicks remain different actions',()=>{
 assert.match(js,/在食べログ查看實拍/);
 assert.match(js,/食べログ搜尋照片/);
 assert.match(js,/function focusPlace\(place,scroll\)/);
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 assert.ok(html.includes('id="dd-meals-lunch"'));
 assert.ok(html.includes('id="dd-meals-dinner"'));
});
