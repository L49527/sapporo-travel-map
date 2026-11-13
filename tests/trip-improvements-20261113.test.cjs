// Run: node --test tests/trip-improvements-20261113.test.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const {closedStatus,tripWeekday}=require('../js/closed-day.js');

test('trip weekdays start on Saturday 2027-06-12',()=>{
 assert.equal(tripWeekday(0),6);
 assert.equal(tripWeekday(3),2);
 assert.equal(tripWeekday(5),4);
});

test('closedStatus reads single days, lists, ranges and nth-week closures',()=>{
 assert.equal(closedStatus('09:00–15:00；週四休',4),'closed');
 assert.equal(closedStatus('09:00–15:00；週四休',3),null);
 assert.equal(closedStatus('11:30–15:00；週二・三休',3),'closed');
 assert.equal(closedStatus('週六 10:30–16:00；週一–五休',4),'closed');
 assert.equal(closedStatus('週六 10:30–16:00；週一–五休',6),null);
 assert.equal(closedStatus('第 1・3・5 週二休',2),'maybe');
 assert.equal(closedStatus('週三休，另第 1–3 週二休',3),'closed');
 assert.equal(closedStatus('不定休（週三常休）',3),null);
 assert.equal(closedStatus('',3),null);
});

test('Plan B lunch on Thursday 6/17 flags the three closed Shakotan shops',()=>{
 const sandbox={window:{}};
 vm.runInNewContext(read('js/dining-catalog.js'),sandbox);
 const {catalog,roster}=sandbox.window.HOKKAIDO_DINING;
 const closed=Array.from(roster['5B'].lunch).filter(id=>closedStatus(catalog[id]?.hours,tripWeekday(5))==='closed');
 assert.deepEqual(closed.sort(),['shakotanFuji','shakotanNakamuraya','shakotanSugino']);
});

// Evaluate the itinerary data and getDay() from app.js without a DOM.
function loadItinerary(){
 const app=read('js/app.js');
 const data=app.slice(0,app.indexOf('const railEstimate='));
 const start=app.indexOf('function getDay(i){');
 const end=app.indexOf('\n}\n',start)+2;
 const ctx={};
 vm.runInNewContext(data+'\nvar state={plan:"A",car:0,day:0,flight:"late"};\n'+app.slice(start,end)+'\nthis.getDay=getDay;this.state=state;',ctx);
 return ctx;
}

test('6/18 has early, midday and late departure versions',()=>{
 const ctx=loadItinerary();
 const titles={};
 for(const f of ['early','noon','late']){ctx.state.flight=f;titles[f]=ctx.getDay(6);}
 assert.equal(titles.early.flight,'early');
 assert.equal(titles.noon.flight,'noon');
 assert.equal(titles.late.flight,'late');
 assert.ok(!titles.early.stops.some(s=>/購物/.test(s[1])),'early flight should not schedule shopping');
 assert.ok(titles.late.stops.some(s=>/購物/.test(s[1])));
});

test('Plan C keeps 6/15 in Sapporo in every transport mode; A and B still go to Biei',()=>{
 const ctx=loadItinerary();
 for(const car of [0,1,2]){
  ctx.state.car=car;
  ctx.state.plan='C';
  const day=ctx.getDay(3);
  assert.doesNotMatch(JSON.stringify([day.title,day.stops]),/美瑛|富良野|青池/);
  for(const plan of ['A','B']){
   ctx.state.plan=plan;
   assert.match(JSON.stringify(ctx.getDay(3)),/美瑛|青池/);
  }
 }
});

test('Plan B with one rental day uses the same Shakotan bus route as no-car',()=>{
 const ctx=loadItinerary();
 ctx.state.plan='B';
 ctx.state.car=0;const noCar=ctx.getDay(5);
 ctx.state.car=1;const rental1=ctx.getDay(5);
 assert.equal(rental1,noCar);
 assert.doesNotMatch(JSON.stringify(rental1),/尚未確認 2027 年 6\/17/);
});

test('Day 3 lunch window and Day 4 distance are realistic',()=>{
 const app=read('js/app.js');
 assert.match(app,/'12:00–13:30','前往小樽、海鮮午餐'/);
 assert.doesNotMatch(app,/400–450 公里/);
});

test('page wires the flight switch, today button and closed-day helper',()=>{
 const html=read('index.html');
 assert.match(html,/id="flightSwitch"/);
 assert.match(html,/id="todayBtn"/);
 assert.ok(html.indexOf('./js/closed-day.js')<html.indexOf('./js/food-guide.js'),'closed-day.js must load before food-guide.js');
 assert.doesNotMatch(html,/點選左側日期/);
 assert.match(read('sw.js'),/"\.\/js\/closed-day\.js"/);
});
