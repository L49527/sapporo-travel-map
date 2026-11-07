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
test('Donburi Chaya corrupted photo is archived and not rendered as stock',()=>{
 // donburiChayaNijo.png 是 786KB 截斷 PNG（缺 IEND），已移至 archive 待重新匯出。
 assert.equal(pics.b2,undefined,'truncated photo must not be mapped');
 assert.equal(pics['どんぶり茶屋'],undefined);
 assert.ok(fs.existsSync(path.join(root,'docs/archive/corrupted-photos-20261107/donburiChayaNijo.png')));
 assert.ok(!fs.existsSync(path.join(root,'assets/photos/restaurants/donburiChayaNijo.png')));
 assert.match(src,/if\(p\.meal\)return verifiedRestaurantPhoto\(p\)/);
});
test('Otaru Isezushi station and Takinami Tabelog links are correct',()=>{
 assert.equal(links.otaruIse,'https://tabelog.com/hokkaido/A0106/A010601/1045303/');
 assert.equal(links.otaruSankaku,'https://tabelog.com/hokkaido/A0106/A010601/1027887/');
 assert.match(restaurants.otaruIse.hours,/11:00–15:00/);
 assert.match(restaurants.otaruSankaku.hours,/07:00–17:00/);
 const expected={otaruIse:'isezushiOtaruEkinaka.webp',otaruSankaku:'takinamiShokudo.webp',l5:'narutoHonten.webp',l6:'kumagera.webp','x-tomita':'tomitaMelonHouse.webp',furanoKodamaya:'kodamaya.webp',furanoNatural:'naturalDiningFurano.webp',furanoFukuzushi:'fukuzushi.webp'};
 const files=Object.entries(expected).map(([id,file])=>{
  assert.equal(pics[id],file);
  const target=path.join(root,'assets/photos/restaurants',file);
  assert.ok(fs.existsSync(target),file+' missing');
  assert.ok(fs.statSync(target).size>0,file+' empty');
  return file;
 });
 assert.equal(new Set(files).size,files.length,'new restaurant photos must be unique');
 assert.match(src,/booji\.com／小布少爺/);
 assert.equal(links.l6,'https://tabelog.com/hokkaido/A0104/A010403/1000298/');
 assert.equal(links['x-biei'],'https://tabelog.com/hokkaido/A0104/A010403/1005336/');
 assert.equal(links['x-tomita'],'https://tabelog.com/hokkaido/A0104/A010403/1024348/');
});
