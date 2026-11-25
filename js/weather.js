(function(root){
 'use strict';
 const HOUR=3600000, FRESH=HOUR/2, MAX_AGE=24*HOUR;
 const LOCATIONS={
  sapporo:{name:'札幌市區',lat:43.0618,lon:141.3545},
  chitose:{name:'新千歲機場',lat:42.7752,lon:141.6923},
  otaru:{name:'小樽',lat:43.1907,lon:140.9947,exposed:true},
  yoichi:{name:'余市',lat:43.1953,lon:140.7835,exposed:true},
  furano:{name:'富良野・富田農場',lat:43.4186,lon:142.4272,exposed:true},
  biei:{name:'美瑛・青池',lat:43.4935,lon:142.614,exposed:true},
  noboribetsu:{name:'登別溫泉・地獄谷',lat:42.4975,lon:141.1455,exposed:true,onsen:true},
  shikotsu:{name:'支笏湖',lat:42.772,lon:141.403,exposed:true},
  shakotan:{name:'積丹・神威岬',lat:43.333,lon:140.351,exposed:true},
  jozankei:{name:'定山溪',lat:42.968,lon:141.163,exposed:true,onsen:true}
 };
 function locationsFor({day=0,plan='A',car=0}){
  if(day===0)return ['sapporo','chitose'];
  if(day===2)return ['otaru','yoichi'];
  if(day===3)return plan==='C'?['sapporo']:['furano','biei'];
  if(day===5){
   if(plan==='B')return ['shakotan','otaru'];
   if(plan==='C')return car===0?['jozankei']:['jozankei','shikotsu'];
   return car===2?['shikotsu','noboribetsu']:['noboribetsu'];
  }
  return day===6?['chitose','sapporo']:['sapporo'];
 }
 function tripDate(day){return '2027-06-'+String(12+day).padStart(2,'0');}
 function japanDate(now=Date.now()){return new Date(now+9*HOUR).toISOString().slice(0,10);}
 function validDate(value){
  return typeof value==='string' && /^\d{4}-\d{2}-\d{2}$/.test(value) &&
   Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0,10)===value;
 }
 function number(value,min=-100,max=100){return typeof value==='number'&&Number.isFinite(value)&&value>=min&&value<=max?value:null;}
 function wmo(code){
  if(code===0)return ['☀️','晴天'];
  if([1,2].includes(code))return ['🌤️','晴時多雲'];
  if(code===3)return ['☁️','陰天'];
  if([45,48].includes(code))return ['🌫️','霧'];
  if([51,53,55].includes(code))return ['🌦️','毛毛雨'];
  if([56,57,66,67].includes(code))return ['🌧️','凍雨'];
  if([61,63,65].includes(code))return ['🌧️','雨'];
  if([71,73,75,77,85,86].includes(code))return ['🌨️','雪'];
  if([80,81,82].includes(code))return ['🌦️','陣雨'];
  if([95,96,99].includes(code))return ['⛈️','雷雨'];
  return ['—','天氣資料不足'];
 }
 function normalize(data){
  const d=data?.daily;
  if(!Array.isArray(d?.time)||!d.time.length||!Array.isArray(d.temperature_2m_max)||!Array.isArray(d.temperature_2m_min))throw new Error('missing daily data');
  const units=data.daily_units;
  if(units && (units.temperature_2m_max!=='°C'||units.temperature_2m_min!=='°C'||units.wind_speed_10m_max!=='m/s'))throw new Error('unexpected units');
  const seen=new Set();
  const rows=d.time.slice(0,16).map((date,i)=>{
   if(!validDate(date)||seen.has(date))throw new Error('invalid forecast date');
   seen.add(date);
   const at=(key,min,max)=>number(d[key]?.[i],min,max);
   let high=at('temperature_2m_max'),low=at('temperature_2m_min');
   if(high!==null&&low!==null&&low>high)high=low=null;
   return {date,high,low,code:at('weather_code',0,99),rain:at('precipitation_probability_max',0,100),
    wind:at('wind_speed_10m_max',0,150),uv:at('uv_index_max',0,30)};
  });
  if(!rows.some(row=>[row.high,row.low,row.code,row.rain,row.wind,row.uv].some(v=>v!==null)))throw new Error('empty forecast');
  return rows.sort((a,b)=>a.date.localeCompare(b.date));
 }
 function advice(row,location,seasonal=false){
  const clothes=[],gear=['好走的包覆式步行鞋','水壺'],alerts=[];
  if(seasonal){
   clothes.push('六月以短袖或薄長袖搭長褲，隨身帶薄外套；早晚用分層穿法調整。');
   gear.push('折疊傘或輕便雨衣','遮陽帽、防曬用品');
  }else{
   const {high,low,rain,wind,uv,code}=row;
   if(high===null||low===null)clothes.push('溫度資料不足，先準備可增減的分層衣物，出門前再確認。');
   if(high!==null){
    if(high<=10)clothes.push('保暖內層、刷毛中層與厚外套，搭保暖長褲。');
    else if(high<=18)clothes.push('長袖、長褲與保暖外套，活動時可脫下中層。');
    else if(high<26)clothes.push('薄長袖或短袖搭長褲，備一件薄外套。');
    else clothes.push('透氣短袖、輕薄快乾下身，另帶薄外套供室內使用。');
    if(high>=30)alerts.push('預報偏熱，安排陰涼處休息並隨時補水。');
   }
   if(low!==null&&low<10){clothes.push('早晚偏冷，加帶保暖中層與防風外套。');gear.push('圍巾或脖圍');}
   else if(low!==null&&low<15)clothes.push('早晚外出記得加上外套。');
   if(high!==null&&low!==null&&high-low>=10)alerts.push('日夜溫差較大，衣物以方便增減為主。');
   const snow=[71,73,75,77,85,86].includes(code),ice=[56,57,66,67].includes(code);
   const rainCode=[51,53,55,56,57,61,63,65,66,67,80,81,82,95,96,99].includes(code);
   if(snow||ice){gear.push('防水防滑鞋、手套與保暖帽');alerts.push('可能有雪或凍雨，出門前確認路面與交通狀況。');}
   if(rainCode||(rain!==null&&rain>=40))gear.push(wind!==null&&wind>=8?'有帽防水外套或雨衣（風大時避免撐傘）':'折疊傘或雨衣、防潑水鞋');
   else if(rain===null)gear.push('雨具備用（降雨機率資料不足）');
   if(wind!==null&&wind>=8){gear.push('防風外套、固定帽子的帽繩');alerts.push('風較大，海岬、湖邊與山上行程先確認開放狀態。');}
   if(uv!==null&&uv>=3)gear.push('防曬用品、遮陽帽與太陽眼鏡');
   if([95,96,99].includes(code))alerts.push('有雷雨預報，改排室內備案並查看氣象廳警報。');
   if([45,48].includes(code))alerts.push('有霧的可能，展望景點視線可能受影響。');
  }
  if(location.exposed&&!(row?.wind>=8))gear.push('海邊、湖畔或郊外使用的防風外層');
  if(location.onsen)gear.push('泡湯用小毛巾與替換衣物');
  return {clothes,gear:[...new Set(gear)],alerts};
 }
 function forecastURL(id){
  const p=LOCATIONS[id];
  const query=new URLSearchParams({latitude:p.lat,longitude:p.lon,timezone:'Asia/Tokyo',forecast_days:'16',
   temperature_unit:'celsius',wind_speed_unit:'ms',
   daily:'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max'});
  return 'https://api.open-meteo.com/v1/forecast?'+query;
 }
 function usable(entry,now=Date.now()){
  return entry&&Number.isFinite(entry.fetchedAt)&&now>=entry.fetchedAt&&now-entry.fetchedAt<=MAX_AGE;
 }
 function selectForecast(entry,date,now=Date.now()){
  if(date<japanDate(now))return {kind:'past',row:null};
  const row=usable(entry,now)?entry.days.find(x=>x.date===date):null;
  if(row&&[row.high,row.low,row.code,row.rain,row.wind,row.uv].some(v=>v!==null))return {kind:now-entry.fetchedAt<FRESH?'forecast':'cached',row};
  const delta=(Date.parse(date)-Date.parse(japanDate(now)))/86400000;
  return {kind:delta>=16?'future':'unavailable',row:null};
 }
 const api={LOCATIONS,locationsFor,tripDate,japanDate,wmo,normalize,advice,forecastURL,selectForecast,usable};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
 if(!root.document)return;

 const memory=new Map(),pending=new Map(),attempts=new Map();
 let selection=null,place='sapporo',generation=0,notice='',busy=false;
 const $=id=>document.getElementById(id);
 const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
 const storageKey=id=>'sapporo_weather_v1_'+id;
 function cached(id){
  if(memory.has(id))return memory.get(id);
  try{
   const raw=JSON.parse(localStorage.getItem(storageKey(id)));
   if(usable(raw)){const entry={...raw,days:normalize(raw.data)};memory.set(id,entry);return entry;}
  }catch(_){/* Unavailable storage or invalid cache must not block the page. */}
  return null;
 }
 async function load(id,force=false){
  const old=cached(id),now=Date.now();
  if(!force&&usable(old,now)&&now-old.fetchedAt<FRESH&&old.days.some(x=>x.date===japanDate(now)))return {entry:old};
  if(pending.has(id))return pending.get(id);
  if(root.navigator.onLine===false)return {entry:old,error:'目前離線；保留的預報會標明擷取時間。'};
  if(now-(attempts.get(id)??-Infinity)<60000)return {entry:old,error:'請稍後再更新；兩次請求至少間隔一分鐘。'};
  const job=(async()=>{
   const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),8000);
   attempts.set(id,now);
   try{
    const response=await fetch(forecastURL(id),{signal:controller.signal,credentials:'omit'});
    if(!response.ok)throw new Error('HTTP '+response.status);
    const data=await response.json(),days=normalize(data);
    if(!days.some(x=>x.date>=japanDate()))throw new Error('expired forecast');
    const entry={data,days,fetchedAt:Date.now()};memory.set(id,entry);
    try{localStorage.setItem(storageKey(id),JSON.stringify({data,fetchedAt:entry.fetchedAt}));}catch(_){}
    return {entry};
   }catch(_){return {entry:old,error:'天氣暫時無法更新。可稍後重試，或查看氣象廳預報。'};}
   finally{clearTimeout(timer);}
  })();
  pending.set(id,job);
  try{return await job;}finally{pending.delete(id);}
 }
 function stamp(epoch){return new Intl.DateTimeFormat('zh-TW',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(epoch);}
 const metric=(value,suffix)=>value===null?'未提供':Math.round(value*10)/10+suffix;
 function summary(row){
  const [icon,label]=wmo(row.code);
  return `<div class="weather-summary"><strong>${icon} ${label}</strong><span>最低 ${metric(row.low,'°C')} ／ 最高 ${metric(row.high,'°C')}</span><span>降雨機率 ${metric(row.rain,'%')}</span><span>最大風速 ${metric(row.wind,' m/s')}</span><span>最高 UV ${metric(row.uv,'')}</span></div>`;
 }
 function packing(row,seasonal=false){
  const a=advice(row,LOCATIONS[place],seasonal);
  // Night views use a city forecast; mountain conditions can differ.
  if(selection.day===3&&selection.plan==='C')a.gear.push('藻岩山夜景用防風外套；山頂天氣另查現場公告');
  return `<div class="weather-packing"><div><h5>👕 穿什麼</h5>${a.clothes.map(x=>`<p>${escape(x)}</p>`).join('')}</div><div><h5>🎒 帶什麼</h5><ul>${a.gear.map(x=>`<li>${escape(x)}</li>`).join('')}</ul></div></div>${a.alerts.map(x=>`<p class="weather-alert">${escape(x)}</p>`).join('')}`;
 }
 function render(entry){
  if(!selection)return;
  const date=tripDate(selection.day),result=selectForecast(entry,date),hasCache=usable(entry);
  const old=hasCache&&(Date.now()-entry.fetchedAt>=FRESH||notice!==''||root.navigator.onLine===false);
  $('weatherTripHeading').textContent=`旅行當天 · ${date} · ${LOCATIONS[place].name}`;
  $('weatherTripBadge').textContent=result.row?(old?'已儲存預報':'當日預報'):'六月行前參考';
  const messages={future:'此旅行日期尚未進入最長 16 天的預報範圍。以下為六月穿搭準備，沒有當日溫度或降雨預測。',
   past:'此旅行日期已過，不以近期預報代替當日天氣。以下保留六月穿搭參考。',
   unavailable:'尚未取得這一天的完整預報日期資料，以下先提供六月穿搭參考。'};
  $('weatherTrip').innerHTML=result.row?summary(result.row)+packing(result.row):`<p>${messages[result.kind]}</p>`+packing(null,true);
  $('weatherStatus').textContent=[notice,hasCache?`${old?'已儲存資料':'資料擷取'}：${stamp(entry.fetchedAt)}（日本時間）`:'尚無可用的天氣資料。',busy?'正在更新…':''].filter(Boolean).join(' ');
  $('weatherRefresh').disabled=busy;
  $('weatherRefresh').textContent=busy?'更新中…':'更新天氣';
  $('weatherPanel').setAttribute('aria-busy',String(busy));
  const recent=hasCache?entry.days.filter(x=>x.date>=japanDate()).slice(0,7):[];
  $('weatherRecentSummary').textContent=`${LOCATIONS[place].name}近期七天天氣（與旅行日期分開顯示）`;
  $('weatherRecent').innerHTML=recent.length
   ?`<p class="weather-note">${old?'已儲存的':'近期'}預報 · ${recent[0].date} 至 ${recent.at(-1).date} · 日本時間。可左右滑動查看。</p><div class="weather-days" tabindex="0" role="region" aria-label="近期七天預報，可左右捲動">${recent.map(row=>{
    const [icon,label]=wmo(row.code);
    return `<div class="weather-day"><time datetime="${row.date}">${row.date.slice(5).replace('-','/')}</time><span aria-hidden="true">${icon}</span><b>${label}</b><span>${metric(row.low,'°')} ～ ${metric(row.high,'°')}</span><small>降雨 ${metric(row.rain,'%')}</small></div>`;
   }).join('')}</div><details><summary>查看 ${recent[0].date} 的近期穿搭建議（與旅行日分開）</summary>${packing(recent[0])}</details>`
   :'<p>近期預報暫時無法顯示；六月行前穿搭參考仍可使用。</p>';
 }
 async function update(force=false){
  if(!selection)return;
  const id=++generation,location=place;
  busy=true;notice='';render(cached(location));
  const result=await load(location,force);
  if(id!==generation)return;
  busy=false;notice=result.error||'';render(result.entry);
 }
 function change(detail){
  if(!$('weatherPanel'))return;
  selection={day:detail.day,plan:detail.plan,car:detail.car};
  const ids=locationsFor(selection);place=ids[0];
  $('weatherPlace').innerHTML=ids.map(id=>`<option value="${id}">${LOCATIONS[id].name}</option>`).join('');
  update();
 }
 root.addEventListener('hokkaido:daychange',event=>change(event.detail));
 document.addEventListener('DOMContentLoaded',()=>{
  if(!$('weatherPanel'))return;
  $('weatherPlace').addEventListener('change',event=>{place=event.target.value;update();});
  $('weatherRefresh').addEventListener('click',()=>update(true));
  if(!selection)change({day:0,plan:'A',car:0});
 });
 root.addEventListener('online',()=>update());
 root.addEventListener('offline',()=>{if(selection){notice='目前離線；以下為已儲存資料。';render(cached(place));}});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)update();});
 setInterval(()=>{if(!document.hidden)update();},FRESH);
})(typeof window!=='undefined'?window:globalThis);
