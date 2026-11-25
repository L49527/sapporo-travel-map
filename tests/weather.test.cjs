const test=require('node:test');
const assert=require('node:assert/strict');
const w=require('../js/weather.js');
const now=Date.parse('2027-06-01T03:00:00Z');
function payload(date='2027-06-12',overrides={}){
 return {daily_units:{temperature_2m_max:'°C',temperature_2m_min:'°C',wind_speed_10m_max:'m/s'},daily:{time:[date],temperature_2m_max:[22],temperature_2m_min:[13],weather_code:[2],precipitation_probability_max:[40],wind_speed_10m_max:[4],uv_index_max:[5],...overrides}};
}
const entry=(date='2027-06-12',age=0)=>({fetchedAt:now-age,days:w.normalize(payload(date))});
test('forecast uses each actual destination, Celsius, metres per second, and Japan dates',()=>{
 const a=new URL(w.forecastURL('biei')),b=new URL(w.forecastURL('jozankei'));
 assert.notEqual(a.searchParams.get('latitude'),b.searchParams.get('latitude'));
 assert.equal(a.searchParams.get('timezone'),'Asia/Tokyo');
 assert.equal(a.searchParams.get('wind_speed_unit'),'ms');
 assert.equal(a.searchParams.get('forecast_days'),'16');
 assert.equal(a.searchParams.has('apikey'),false);
 assert.equal(w.japanDate(Date.parse('2027-06-11T16:00:00Z')),'2027-06-12');
});
test('destinations follow slow C and one/two-day car variants',()=>{
 assert.deepEqual(w.locationsFor({day:3,plan:'C',car:0}),['sapporo']);
 assert.deepEqual(w.locationsFor({day:3,plan:'A',car:0}),['furano','biei']);
 assert.deepEqual(w.locationsFor({day:5,plan:'A',car:1}),['noboribetsu']);
 assert.deepEqual(w.locationsFor({day:5,plan:'A',car:2}),['shikotsu','noboribetsu']);
 assert.deepEqual(w.locationsFor({day:5,plan:'C',car:0}),['jozankei']);
 assert.deepEqual(w.locationsFor({day:5,plan:'C',car:1}),['jozankei','shikotsu']);
 assert.deepEqual(w.locationsFor({day:5,plan:'B',car:0}),['shakotan','otaru']);
 assert.equal(w.tripDate(6),'2027-06-18');
});
test('matches exact date, never reuses recent weather for a distant trip',()=>{
 assert.equal(w.selectForecast(entry(),'2027-06-12',now).kind,'forecast');
 assert.equal(w.selectForecast(entry(),'2027-06-18',now).kind,'future');
 assert.equal(w.selectForecast(entry(),'2027-06-13',now).kind,'unavailable');
 assert.equal(w.selectForecast(entry(),'2027-05-31',now).kind,'past');
});
test('forecast boundary includes today plus 15 days, not day 16',()=>{
 assert.equal(w.selectForecast(null,'2027-06-16',now).kind,'unavailable');
 assert.equal(w.selectForecast(null,'2027-06-17',now).kind,'future');
});
test('old, future-dated and expired cached data are not labeled fresh',()=>{
 assert.equal(w.selectForecast(entry('2027-06-12',3600000),'2027-06-12',now).kind,'cached');
 assert.equal(w.selectForecast(entry('2027-06-12',25*3600000),'2027-06-12',now).kind,'unavailable');
 assert.equal(w.selectForecast(entry('2027-06-12',-1000),'2027-06-12',now).kind,'unavailable');
});
test('null and invalid weather values stay unknown, zero is valid',()=>{
 const row=w.normalize(payload(undefined,{temperature_2m_min:[null],precipitation_probability_max:[null],wind_speed_10m_max:[0],weather_code:[null],uv_index_max:[0]}))[0];
 assert.equal(row.low,null);assert.equal(row.rain,null);assert.equal(row.wind,0);assert.equal(row.uv,0);
 assert.match(w.wmo(row.code)[1],/不足/);
 assert.equal(w.normalize(payload(undefined,{temperature_2m_max:['22'],precipitation_probability_max:[120]}))[0].rain,null);
});
test('rejects invalid dates, units, duplicate dates and empty API responses',()=>{
 assert.throws(()=>w.normalize({}));
 assert.throws(()=>w.normalize(payload('2027-02-30')));
 const wrong=payload();wrong.daily_units.wind_speed_10m_max='km/h';assert.throws(()=>w.normalize(wrong));
 assert.throws(()=>w.normalize(payload(undefined,{time:['2027-06-12','2027-06-12']})));
 assert.throws(()=>w.normalize(payload(undefined,{temperature_2m_max:[null],temperature_2m_min:[null],weather_code:[null],precipitation_probability_max:[null],wind_speed_10m_max:[null],uv_index_max:[null]})));
});
test('showers and snow showers are not classified as thunderstorms',()=>{
 for(const code of [80,81,82,85,86]){
  const a=w.advice({...w.normalize(payload())[0],code},w.LOCATIONS.sapporo);
  assert(!a.alerts.some(x=>x.includes('雷雨')));
 }
 assert(w.advice({...w.normalize(payload())[0],code:95},w.LOCATIONS.sapporo).alerts.some(x=>x.includes('雷雨')));
});
test('high rain probability does not assert heavy rain; wind changes rain equipment',()=>{
 const row={...w.normalize(payload())[0],rain:90,wind:9};
 const a=w.advice(row,w.LOCATIONS.shakotan);
 assert(a.gear.some(x=>x.includes('避免撐傘')));
 assert(!JSON.stringify(a).includes('強降雨'));
});
test('packing accounts for cold mornings, UV, snow and missing values',()=>{
 const row={...w.normalize(payload())[0],high:20,low:4,code:85};
 const a=w.advice(row,w.LOCATIONS.noboribetsu);
 assert(a.clothes.some(x=>x.includes('早晚偏冷')));
 assert(a.gear.some(x=>x.includes('防滑')));
 assert(a.gear.some(x=>x.includes('防曬')));
 assert(a.gear.some(x=>x.includes('小毛巾')));
 const unknown=w.advice({high:null,low:null,rain:null,wind:null,uv:null,code:null},w.LOCATIONS.sapporo);
 assert(unknown.clothes.some(x=>x.includes('資料不足')));
 assert(unknown.gear.some(x=>x.includes('雨具備用')));
});
test('seasonal fallback contains no fabricated daily measurements',()=>{
 const a=w.advice(null,w.LOCATIONS.shikotsu,true);
 assert(a.clothes.some(x=>x.includes('六月')));
 assert(!/[0-9]/.test(JSON.stringify(a)));
 assert(a.gear.some(x=>x.includes('防風')));
});
test('one-line summary tips stay short and follow rain, wind, cold and snow',()=>{
 const row=w.normalize(payload())[0];
 assert.deepEqual(w.quickTips(row),['薄長袖＋薄外套','雨具']);
 assert.deepEqual(w.quickTips({...row,rain:10,code:0}),['薄長袖＋薄外套']);
 assert.deepEqual(w.quickTips({...row,high:14,low:6,rain:70,wind:10,code:61}),['長袖＋保暖外套','早晚加一層','雨衣']);
 assert.ok(w.quickTips({...row,code:71}).includes('防滑鞋'));
 assert.deepEqual(w.quickTips({...row,high:null,low:null,rain:null,code:null}),['可增減的分層衣物']);
 assert.ok(w.quickTips({...row,high:12,low:3,rain:90,wind:12,code:95}).length<=3);
 assert.match(w.SEASONAL_LINE,/六月/);
});
test('weather icons are inline SVG for every code, including fog',()=>{
 for(const code of [0,2,3,45,51,56,63,73,81,95,null]){
  const kind=w.wmo(code)[2];
  const svg=w.iconSVG(kind);
  assert.match(svg,/^<svg class="weather-icon weather-icon--\w+"/);
  assert.match(svg,/aria-hidden="true"/);
 }
 assert.equal(w.wmo(45)[2],'fog');
 assert.match(w.iconSVG('<script>'),/weather-icon--none/);
});
