const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const food=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const dining=fs.readFileSync(path.join(root,'js/dining-catalog.js'),'utf8');
const parse=(src,key)=>{const i=src.indexOf(key);assert.ok(i>=0,key);return JSON.parse(src.slice(i+key.length,src.indexOf(';',i+key.length)));};
test('All three Noboribetsu shops have their own correct Tabelog links',()=>{
 const urls=parse(food,'const TABELOG_DIRECT=');
 assert.equal(urls['x-nobo'],'https://tabelog.com/hokkaido/A0108/A010803/1002147/');
 assert.equal(urls.noboDaio,'https://tabelog.com/hokkaido/A0108/A010803/1006770/');
 assert.equal(urls.noboNobojin,'https://tabelog.com/hokkaido/A0108/A010803/1059982/');
});
test('Noboribetsu onsen marketplace real photo is used on both same-store cards',()=>{
 const photos=parse(food,'const USER_RESTAURANT_PHOTOS=');
 assert.equal(photos['x-nobo'],'noboribetsuOnsenIchiba.webp');
 assert.equal(photos['gx-nobo'],'noboribetsuOnsenIchiba.webp');
 assert.ok(fs.existsSync(path.join(root,'assets/photos/restaurants/noboribetsuOnsenIchiba.webp')));
 assert.equal(photos.noboDaio,'ajinoDaioNoboribetsu.webp');
 assert.ok(fs.statSync(path.join(root,'assets/photos/restaurants/ajinoDaioNoboribetsu.webp')).size>10000);
});
test('Addresses and hours are tied to correct shops',()=>{
 const restaurant=parse(dining,'window.HOKKAIDO_DINING=').catalog;
 assert.match(restaurant.noboDaio.address,/29-9/);
 assert.match(restaurant.noboDaio.hours,/L\.O\. ?14:50/);
 assert.match(restaurant.noboNobojin.address,/石川ビル2F/);
 assert.match(restaurant.noboNobojin.hours,/L\.O\. ?20:30/);
});
