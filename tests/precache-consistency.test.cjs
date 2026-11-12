const test=require('node:test');
const assert=require('node:assert');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const sw=read('sw.js');
const list=name=>JSON.parse(sw.match(new RegExp('const '+name+'=(\\[.*?\\]);'))[1]);
const shell=list('SHELL_PRECACHE');
const photos=list('PHOTO_PRECACHE');
const strip=u=>u.split('?')[0];

test('every precache entry exists on disk',()=>{
 for(const u of shell.concat(photos)){
  if(u==='./')continue;
  assert.ok(fs.existsSync(path.join(root,decodeURI(strip(u)))),'missing file for precache entry '+u);
 }
});

test('precache entries have no duplicates',()=>{
 const all=shell.concat(photos);
 assert.strictEqual(new Set(all).size,all.length);
});

test('shell ?v= strings match index.html',()=>{
 const html=read('index.html');
 for(const u of shell.filter(x=>x.includes('?v='))){
  assert.ok(html.includes(u),'index.html does not reference '+u+' with the same version');
 }
});

test('local assets referenced by pages or scripts are precached',()=>{
 const sources=['index.html'].concat(fs.readdirSync(path.join(root,'js')).filter(f=>f.endsWith('.js')).map(f=>'js/'+f));
 const found=new Set();
 for(const f of sources){
  for(const m of read(f).matchAll(/\.\/assets\/[^"'`)<>]+?\.(?:webp|png|jpg|svg)/g))found.add(m[0]);
 }
 const cached=new Set(shell.concat(photos).map(strip));
 const missing=[...found].filter(u=>!cached.has(u));
 assert.deepStrictEqual(missing,[],'referenced but not precached: '+missing.join(', '));
});
