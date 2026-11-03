const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const f=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const d=fs.readFileSync(path.join(root,'js/dining-catalog.js'),'utf8');
function load(source,prefix){const start=source.indexOf(prefix);assert.ok(start>=0,prefix);const end=source.indexOf(';',start+prefix.length);return JSON.parse(source.slice(start+prefix.length,end));}
test('Tabelog links identify the correct branches',()=>{
 const direct=load(f,'const TABELOG_DIRECT=');
 assert.equal(direct.b3,'https://tabelog.com/hokkaido/A0101/A010102/1046356/');
 assert.equal(direct.airportKeyaki,'https://tabelog.com/hokkaido/A0107/A010701/1042872/');
});
test('Official opening-hours sources match the specified branches',()=>{
 const meals=load(f,'const MEALS=');
 const cafe=meals.find(x=>x.id==='b3');
 assert.ok(cafe);assert.match(cafe.hours,/08:00–22:30/);
 assert.equal(cafe.source,'https://mitsui-shopping-park.com/urban/akatera/store/600372.html');
 const catalog=load(d,'window.HOKKAIDO_DINING=').catalog;
 assert.match(catalog.airportKeyaki.hours,/09:00–21:00/);
 assert.equal(catalog.airportKeyaki.source,'https://www.sapporo-keyaki.jp/chitose/');
});
