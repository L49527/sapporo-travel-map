const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=(file)=>fs.readFileSync(path.join(root,file),'utf8');
const html=read('index.html');
const motionCss=read('css/interaction-effects.css');
const motionJs=read('js/interaction-effects.js');
const sw=read('sw.js');
const app=read('js/app.js');

test('Motion CSS never hides content without the JS gate',()=>{
 assert.match(motionCss,/html\.motion-on \.reveal-pending/);
 assert.match(motionCss,/html\.motion-on \.reveal-visible/);
 assert.doesNotMatch(motionCss,/@media \(prefers-reduced-motion: no-preference\)/,
  'Reveal rules must not depend on the no-preference media query');
 // A bare .reveal-pending rule outside the html.motion-on gate would hide cards
 // for every visitor if the script never runs.
 assert.doesNotMatch(motionCss,/(^|\n)\.reveal-pending\s*\{/, 'Ungated .reveal-pending rule found');
 assert.doesNotMatch(motionCss,/(^|\n)\.reveal-visible\s*\{/, 'Ungated .reveal-visible rule found');
});

test('Reduced motion keeps revealed content visible',()=>{
 assert.match(motionCss,/@media \(prefers-reduced-motion: reduce\)/);
 const block=motionCss.slice(motionCss.indexOf('@media (prefers-reduced-motion: reduce)'));
 assert.match(block,/opacity: 1 !important/);
 assert.match(block,/transform: none !important/);
 assert.match(block,/animation: none !important/);
 assert.match(motionJs,/reducedMotion/);
 assert.match(motionJs,/setMotionEnabled/);
});

test('Entrance directions mirror Tour.tsx, Tours.tsx and About.tsx',()=>{
 assert.match(motionJs,/\[\s*'left',\s*'right',\s*'bottom'\s*\]/);
 assert.match(motionJs,/x:\s*direction === 'left' \? -100/);
 assert.match(motionJs,/y:\s*direction === 'bottom' \? 80/);
 assert.match(motionJs,/duration:\s*550/);
 assert.match(motionJs,/delay:\s*100 \+ \(index % 3\) \* 150/);
 assert.match(motionJs,/story-photo'\)[\s\S]{0,200}direction: 'left'/);
 assert.match(motionJs,/story-copy'\)[\s\S]{0,200}direction: 'right'/);
});

test('Reveal covers section headings, timeline and preparation blocks',()=>{
 for(const selector of ['.section-head','.gallery-shot','.budget-field','.prep-article',
   '.checklist-timeline-row','.time-step','.refund-step','.brief-item','.fact']){
  assert.ok(motionJs.includes(`'${selector}'`),`${selector} missing from the reveal selector list`);
 }
 assert.match(app,/class="time-step"/);
 assert.match(html,/class="section-head"/);
 assert.match(html,/class="budget-field"/);
 assert.match(html,/class="prep-article"/);
});

test('Page and service worker load the current motion build',()=>{
 assert.match(html,/interaction-effects\.css\?v=20261104-motion3/);
 assert.match(html,/interaction-effects\.js\?v=20261104-motion3/);
 assert.match(sw,/interaction-effects\.css\?v=20261104-motion3/);
 assert.match(sw,/interaction-effects\.js\?v=20261104-motion3/);
 const version=sw.match(/sapporo-travel-shell-v(\d+)/);
 assert.ok(version,'Cache name missing');
 assert.ok(Number(version[1])>=36,'Cache version must be at least v36');
});

test('Service worker never serves a cached HTML document',()=>{
 // A stale index.html in the HTTP cache was the cause of an old css/js pair
 // being loaded, so documents bypass it and are not re-cached at runtime.
 assert.match(sw,/req\.mode==='navigate'/);
 assert.match(sw,/fetch\(req\.url,\{cache:'reload',credentials:'same-origin'\}\)/);
 assert.match(sw,/res\.ok&&!isDocument/);
});

test('Diagnostic hook reports whether motion actually runs',()=>{
 assert.match(motionJs,/window\.hokkaidoMotion/);
 assert.match(motionJs,/version:\s*'2026-11-04-motion3'/);
 assert.match(motionJs,/get enabled\(\)/);
 assert.match(motionJs,/get pending\(\)/);
 assert.match(motionJs,/get revealed\(\)/);
 assert.match(motionJs,/document\.documentElement\.classList\.toggle\('motion-on'/);
});

test('Horizontal entrances are clipped, vertical scrolling is not',()=>{
 assert.match(motionCss,/main#top \{ overflow-x: clip; \}/);
});
