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
function loadItinerary(url='/',saved={}){
 const ctx={
  document:{addEventListener(){}},
  location:new URL(url,'https://l49527.github.io/sapporo-travel-map/'),
  localStorage:{getItem:key=>saved[key]??null},
  URL,URLSearchParams
 };
 vm.runInNewContext(read('js/app.js')+'\nObject.assign(this,{getDay,state,readTripUrl,tripShareUrl});',ctx);
 return ctx;
}

test('6/18 has four departure periods and keeps city shopping for late flights',()=>{
 const ctx=loadItinerary();
 const titles={};
 for(const f of ['early','noon','afternoon','late']){ctx.state.flight=f;titles[f]=ctx.getDay(6);}
 assert.equal(titles.early.flight,'early');
 assert.equal(titles.noon.flight,'noon');
 assert.equal(titles.afternoon.flight,'afternoon');
 assert.equal(titles.late.flight,'late');
 assert.ok(!titles.early.stops.some(s=>/購物/.test(s[1])),'early flight should not schedule shopping');
 assert.ok(!titles.afternoon.stops.some(s=>/購物/.test(s[1])));
 assert.ok(titles.late.stops.some(s=>/購物/.test(s[1])));
});

test('departure time determines local airport targets, including previous-day travel',()=>{
 const ctx=loadItinerary();
 const cases=[
  ['10:00','early','07:00 前','06:00 前'],
  ['11:00','noon','08:00 前','07:00 前'],
  ['14:00','afternoon','11:00 前','10:00 前'],
  ['16:00','late','13:00 前','12:00 前'],
  ['01:10','early','6/17 22:10 前','6/17 21:10 前']
 ];
 for(const [time,preset,arrival,transfer] of cases){
  ctx.state.flightTime=time;
  const day=ctx.getDay(6);
  assert.equal(day.flight,preset);
  assert.equal(day.stops.find(s=>s[1]==='抵達國際線航廈')[0],arrival);
  assert.equal(day.stops.find(s=>s[1]==='離開札幌、前往新千歲機場')[0],transfer);
 }
 ctx.state.flightTime='';
 assert.equal(ctx.getDay(6).stops.find(s=>s[1]==='抵達國際線航廈')[0],'起飛前至少 3 小時');
});

test('shared flight choices override the recipient’s previously saved time',()=>{
 const sender=loadItinerary();
 Object.assign(sender.state,{day:6,flight:'late'});
 const saved={sapporo2027_flight_v1:'early',sapporo2027_flight_time:'10:00'};
 const late=loadItinerary(sender.tripShareUrl(),saved);
 late.readTripUrl();
 assert.equal(late.state.flight,'late');
 assert.equal(late.state.flightTime,'');

 Object.assign(sender.state,{flight:'afternoon',flightTime:'15:20'});
 const exact=loadItinerary(sender.tripShareUrl(),saved);
 exact.readTripUrl();
 assert.equal(exact.state.flight,'afternoon');
 assert.equal(exact.state.flightTime,'15:20');
 assert.equal(exact.state.day,6);

 const legacy=loadItinerary('?plan=C&car=0&day=7',saved);
 legacy.readTripUrl();
 assert.equal(legacy.state.flight,'late');
 const unshared=loadItinerary('?day=7',saved);
 unshared.readTripUrl();
 assert.equal(unshared.state.flightTime,'10:00');
});

test('Plan C keeps 6/15 in Sapporo in every transport mode; A and B still go to Biei',()=>{
 const ctx=loadItinerary();
 for(const car of [0,1,2]){
  ctx.state.car=car;
  ctx.state.plan='C';
  const day=ctx.getDay(3);
  assert.doesNotMatch(JSON.stringify([day.title,day.stops]),/美瑛|富良野|青池/);
  assert.deepEqual(Array.from(day.landmarks,([name])=>name),['白色戀人公園','大通公園','藻岩山纜車山麓站']);
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
