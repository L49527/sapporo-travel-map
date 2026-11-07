const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');

test('local photos are webp-only under assets',()=>{
 const walk=dir=>{
  const out=[];
  for(const e of fs.readdirSync(path.join(root,dir),{withFileTypes:true})){
   const rel=path.join(dir,e.name);
   if(e.isDirectory())out.push(...walk(rel));
   else if(e.isFile())out.push(rel);
  }
  return out;
 };
 const files=walk('assets');
 assert.ok(files.length>0);
 for(const f of files){
  assert.doesNotMatch(f,/\.png$/i,f+' must be webp (icons excluded is under icons/, check separately)');
 }
 // icons may still be png for PWA compatibility
 assert.ok(fs.existsSync(path.join(root,'icons/icon-192.png')));
 assert.ok(fs.existsSync(path.join(root,'icons/icon-512.png')));
});

test('food-guide contains no user png mappings',()=>{
 const food=read('js/food-guide.js');
 assert.doesNotMatch(food,/(USER_.*PHOTOS[^;]*\.png)/,'user photos must be webp');
 assert.doesNotMatch(food,/donburiChayaNijo|yuigaDoxon|asperges\.png|jagaPokkuru|furanoWineCheddarCheese|horiYubariMelonPureJelly/,'corrupted photos must not be mapped');
});

test('sw splits shell and photo caches and bumps version',()=>{
 const sw=read('sw.js');
 assert.match(sw,/const CACHE_NAME='sapporo-travel-shell-v(\d+)'/);
 assert.ok(Number(sw.match(/sapporo-travel-shell-v(\d+)/)[1])>=44);
 assert.match(sw,/PHOTO_CACHE_NAME='sapporo-travel-photos-v44'/);
 assert.match(sw,/SHELL_PRECACHE/);
 assert.match(sw,/PHOTO_PRECACHE/);
 const photoSection=sw.slice(sw.indexOf('PHOTO_PRECACHE='));
 assert.ok(!photoSection.includes('.png,'), 'photo precache must not contain png');
 assert.ok(!photoSection.includes('.png"'), 'photo precache must not contain png');
 assert.ok(!sw.includes('japan-tax-refund-2026-v1.png'), 'tax refund png must not be precached');
 assert.ok(sw.includes('japan-tax-refund-2026-v1.webp'));
 assert.doesNotMatch(sw,/asperges\.png|donburiChayaNijo\.png|yuigaDoxon\.png|jagaPokkuru\.png|furanoWineCheddarCheese\.png|horiYubariMelonPureJelly\.png/);
 assert.match(sw,/isImageRequest/);
 assert.match(sw,/cache-first|ignoreSearch/);
 const shellCount=(sw.match(/SHELL_PRECACHE=\[/)?1:0);
 assert.ok(shellCount);
});

test('index head has single description/theme and OG tags',()=>{
 const html=read('index.html');
 assert.equal((html.match(/name="description"/g)||[]).length,1);
 assert.equal((html.match(/name="theme-color"/g)||[]).length,1);
 assert.match(html,/og:title/);
 assert.match(html,/og:description/);
 assert.match(html,/twitter:card/);
 assert.ok(!html.includes('japan-tax-refund-2026-v1.png'));
 assert.ok(html.includes('japan-tax-refund-2026-v1.webp'));
 assert.ok(!html.includes('960px-'), 'gallery must use 800px thumbs');
});

test('manifest theme matches index',()=>{
 const manifest=JSON.parse(read('manifest.webmanifest'));
 assert.equal(manifest.theme_color,'#253f35');
 assert.equal(manifest.background_color,'#fcfaf6');
 assert.ok(Array.isArray(manifest.screenshots) && manifest.screenshots.length>0);
});

test('diagnostics page is noindex',()=>{
 assert.match(read('map-diagnostics.html'),/noindex/);
});

test('app keeps budget + hotel perf guards',()=>{
 const app=read('js/app.js');
 assert.match(app,/BUDGET_STORE/);
 assert.match(app,/saveBudget\(\)/);
 assert.match(app,/restoreBudget\(\)/);
 assert.match(app,/prefers-reduced-motion/);
 assert.match(app,/IntersectionObserver/);
 assert.match(app,/document\.hidden/);
 assert.ok(!app.includes('aria-current="false"'));
});

test('day local map is lazy via IntersectionObserver',()=>{
 const food=read('js/food-guide.js');
 assert.match(food,/lazyLocalMap/);
 assert.match(food,/400px/);
 assert.match(food,/rootMargin/);
});

test('corrupted archive documents six files',()=>{
 const readme=read('docs/archive/corrupted-photos-20261107/README.md');
 for(const f of ['asperges.png','donburiChayaNijo.png','yuigaDoxon.png','furanoWineCheddarCheese.png','horiYubariMelonPureJelly.png','jagaPokkuru.png'])assert.ok(readme.includes(f));
 assert.ok(fs.existsSync(path.join(root,'docs/archive/corrupted-photos-20261107/asperges.png')));
});
