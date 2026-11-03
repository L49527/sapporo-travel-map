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
 assert.equal(new Set(restaurants.map(x=>x.id)).size,55);
 assert.match(js,/function tabelogPhotoLink\(p\)/);
 assert.match(js,/tabelog\.com\/rstLst\/\?sk=/);
 assert.match(js,/restaurantPhotoSourceLinks\(p\)/);
 assert.match(js,/if\(p\.meal\)return verifiedRestaurantPhoto\(p\)/);
});
test('Direct restaurant links are known, valid and only used for known places',()=>{
 const ids=new Set(restaurants.map(x=>x.id));
 assert.equal(Object.keys(direct).length,15);
 for(const [id,url] of Object.entries(direct)){
  assert.ok(ids.has(id),'Tabelog direct link for unknown shop '+id);
  assert.match(url,/^https:\/\/tabelog\.com\/hokkaido\/A\d+\/A\d+\/\d+\/$/);
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
