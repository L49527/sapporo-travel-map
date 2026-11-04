const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const food=fs.readFileSync(path.join(root,'js/food-guide.js'),'utf8');
const dining=fs.readFileSync(path.join(root,'js/dining-catalog.js'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
function parse(source,prefix){const at=source.indexOf(prefix);assert.ok(at>=0,'Missing '+prefix);const end=source.indexOf(';',at+prefix.length);return JSON.parse(source.slice(at+prefix.length,end));}
test('Waraku Otaru Tabelog link and distinct user-supplied photo',()=>{
 const links=parse(food,'const TABELOG_DIRECT=');
 const photos=parse(food,'const USER_RESTAURANT_PHOTOS=');
 assert.equal(links.otaruWaraku,'https://tabelog.com/hokkaido/A0106/A010601/1001257/');
 assert.equal(photos.otaruWaraku,'warakuOtaru.webp');
 assert.equal(Object.entries(photos).filter(([,filename])=>filename===photos.otaruWaraku).length,1);
 assert.ok(fs.statSync(path.join(root,'assets/photos/restaurants/warakuOtaru.webp')).size>10000);
});
test('Waraku branch details and PWA asset list',()=>{
 const p=parse(dining,'window.HOKKAIDO_DINING=').catalog.otaruWaraku;
 assert.equal(p.address,'北海道小樽市堺町3-1');
 assert.equal(p.source,'https://www.waraku1.jp/shop/05/');
 assert.match(p.hours,/11:00–15:30/);
 assert.match(p.hours,/17:00–22:00/);
 const cache=sw.match(/const CACHE_NAME='sapporo-travel-shell-v(\d+)'/);
 assert.ok(cache);
 assert.ok(Number(cache[1])>=29,'PWA cache must be bumped for current assets');
 assert.ok(sw.includes('./assets/photos/restaurants/warakuOtaru.webp'));
});
