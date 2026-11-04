const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const src=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const cat=fs.readFileSync(path.join(root,'js/dining-catalog.js'),'utf8');
const readJSON=(str,prefix)=>{let i=str.indexOf(prefix);assert.ok(i>=0);return JSON.parse(str.slice(i+prefix.length,str.indexOf(';',i+prefix.length)));};
const pics=readJSON(src,'const USER_RESTAURANT_PHOTOS=');
const links=readJSON(src,'const TABELOG_DIRECT=');
const restaurants=readJSON(cat,'window.HOKKAIDO_DINING=').catalog;
test('Donburi Chaya photograph uses the exact existing filename',()=>{
 assert.equal(pics.b2,'どんぶり茶屋.png');
 assert.ok(fs.existsSync(path.join(root,'assets/photos/restaurants',pics.b2)));
 assert.match(src,/if\(p\.meal\)return verifiedRestaurantPhoto\(p\)/);
});
test('Otaru Isezushi station and Takinami Tabelog links are correct',()=>{
 assert.equal(links.otaruIse,'https://tabelog.com/hokkaido/A0106/A010601/1045303/');
 assert.equal(links.otaruSankaku,'https://tabelog.com/hokkaido/A0106/A010601/1027887/');
 assert.match(restaurants.otaruIse.hours,/11:00–15:00/);
 assert.match(restaurants.otaruSankaku.hours,/07:00–17:00/);
 assert.ok(!pics.otaruIse,'Unverified Isezushi image must not be silently assigned');
});
