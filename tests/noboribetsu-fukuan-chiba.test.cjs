const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const food=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const dining=fs.readFileSync(path.join(root,'js/dining-catalog.js'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
function data(content,prefix){const pos=content.indexOf(prefix);assert.ok(pos>=0,prefix);return JSON.parse(content.slice(pos+prefix.length,content.indexOf(';',pos)));}
const catalog=data(dining,'window.HOKKAIDO_DINING=');
const photo=data(food,'const USER_RESTAURANT_PHOTOS=');
const direct=data(food,'const TABELOG_DIRECT=');
test('closed Fukuan removed; same-neighborhood udon shop replaces it',()=>{
 assert.equal(catalog.catalog.noboFukuan,undefined);
 assert.ok(!catalog.roster['5A'].lunch.includes('noboFukuan'));
 assert.ok(catalog.roster['5A'].lunch.includes('noboKitaUdon'));
 assert.equal(catalog.catalog.noboKitaUdon.address,'北海道登別市登別温泉町30');
 assert.equal(direct.noboKitaUdon,'https://tabelog.com/hokkaido/A0108/A010803/1081478/');
});
test('Day 6 A retains five practical lunch candidates without uncertain Chiba',()=>{
 const keys=catalog.roster['5A'].lunch;
 assert.ok(keys.length>=6);
 assert.equal(new Set(keys).size,keys.length);
 assert.equal(keys.filter(k=>k!=='noboChiba').length,5);
 assert.ok(keys.includes('noboEnmaken'));
 assert.match(catalog.catalog.noboChiba.hours,/待確認/);
});
test('Chiba Tabelog and user photo uploaded, correctly linked',()=>{
 assert.equal(direct.noboChiba,'https://tabelog.com/hokkaido/A0108/A010803/1023670/');
 assert.equal(photo.noboChiba,'noboChiba.webp');
 assert.ok(fs.statSync(path.join(root,'assets/photos/restaurants/noboChiba.webp')).size>10000);
 assert.ok(sw.includes('sapporo-travel-shell-v27'));
});
