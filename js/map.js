
// Maps work as a progressive enhancement: when CDN, WebGL or tiles fail, the original SVG remains.
// No API token. The tile server requires a network connection and is supplied as-is.
(async()=>{
const host=document.querySelector('.map-card');
if(location.protocol==='file:'){return;}
const notice=document.getElementById('sapporoMapNotice');
const status=(kind, message)=>{if(!notice)return;notice.dataset.state=kind;notice.querySelector('strong').textContent=kind==='ready'?'':'互動地圖未載入';notice.querySelector('span').textContent=message||'';};
const retry=document.getElementById('sapporoMapRetry');if(retry)retry.addEventListener('click',()=>location.reload());
let ready=false;
const toolbar=document.getElementById('liveMapToolbar');
const mapElement=document.getElementById('liveHokkaidoMap');
if(!host||!mapElement||!toolbar)return;
const timeout=setTimeout(()=>{if(!ready){host.classList.remove('is-live-loading','has-live-map');toolbar.hidden=true;status('error','互動地圖 15 秒內未完成渲染，已切回行程示意圖。請在開發者工具查看 [SapporoMap] 訊息。')}},15000);

host.classList.add('is-live-loading');
const $=q=>document.querySelector(q);
const PLACES={
  sapporo:{name:'札幌',point:[141.3508,43.0618],tag:'旅程主要住宿基地'},
  otaru:{name:'小樽',point:[140.9954,43.1907],tag:'運河・堺町通'},
  yoichi:{name:'余市',point:[140.7705,43.1955],tag:'威士忌蒸餾所與海鮮'},
  tomita:{name:'富田農場',point:[142.4400,43.4144],tag:'6 月中旬薰衣草尚未盛開'},
  biei:{name:'四季彩之丘',point:[142.4668,43.5479],tag:'丘陵與季節花卉'},
  blue:{name:'白金青池',point:[142.6141,43.4939],tag:'美瑛白金青池'},
  noboribetsu:{name:'登別地獄谷',point:[141.1649,42.4911],tag:'火山與溫泉'},
  shikotsu:{name:'支笏湖',point:[141.3141,42.7586],tag:'清澈湖水與森林'},
  shakotan:{name:'積丹神威岬',point:[140.3440,43.3281],tag:'海岸景觀，步道遇強風可能關閉'},
  jozankei:{name:'定山溪溫泉',point:[141.1556,42.9625],tag:'溪谷散步與日歸溫泉'}
};
const params={plan:'A',car:0};
let map=null,markers=[],focus='all';
const routeFeatures=(plan,car)=>{
  // Straight connections indicate visit order only, NOT navigable street or public-transit routes.
  const key=(arr)=>arr.map(k=>PLACES[k].point);
  const paths=[
    {names:['sapporo','yoichi','otaru','sapporo'],id:'otaru',color:'#718f96',type:'JR/步行'},
    ...(plan==='C'?[]:[{names:['sapporo','tomita','biei','blue','sapporo'],id:'biei',color:'#be8054',type:car===0?'預約觀光巴士':'自駕'}])
  ];
  const extra=plan==='A'? (car===2?['sapporo','shikotsu','noboribetsu','sapporo']:['sapporo','noboribetsu','sapporo'])
    :plan==='B'? (car===2?['sapporo','yoichi','shakotan','sapporo']:['sapporo','yoichi','shakotan','otaru','sapporo'])
    :car>=1? ['sapporo','jozankei','shikotsu','sapporo']:['sapporo','jozankei','sapporo'];
  paths.push({names:extra,id:'excursion',color:'#357d72',type:car===0?'JR／巴士／觀光巴士':'自駕／大眾運輸'});
  return paths.map(x=>({type:'Feature',properties:{id:x.id,color:x.color,transport:x.type},geometry:{type:'LineString',coordinates:key(x.names)}}));
};
const routeData=(p,c)=>({type:'FeatureCollection',features:routeFeatures(p,c)});
function placesFor(p,c){const ids=p==='C'?['sapporo','otaru','yoichi']:['sapporo','otaru','yoichi','tomita','biei','blue'];if(p==='A')ids.push('noboribetsu',...(c===2?['shikotsu']:[]));if(p==='B')ids.push('yoichi','shakotan');if(p==='C')ids.push('jozankei',...(c>=1?['shikotsu']:[]));return [...new Set(ids)];}
function redrawMarkers(){
 markers.forEach(m=>m.remove());markers=[];
 for(const id of placesFor(params.plan,params.car)){
  const p=PLACES[id];const el=document.createElement('button');el.type='button';el.className='hokkaido-pin '+(id==='sapporo'?'main ':['shakotan','noboribetsu','jozankei','shikotsu'].includes(id)?'excursion':'');
  el.setAttribute('aria-label','查看 '+p.name+' 的景點資訊');
  const dot=document.createElement('span');dot.className='p-dot';dot.setAttribute('aria-hidden','true');
  const label=document.createElement('span');label.className='p-text';label.textContent=p.name;
  el.append(dot,label);
  const box=document.createElement('div');const title=document.createElement('strong');title.textContent=p.name;const caption=document.createElement('small');caption.textContent=p.tag;
  const a=document.createElement('a');a.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.name+' 北海道');a.target='_blank';a.rel='noopener noreferrer';a.textContent='在 Google Maps 查看 ↗';box.append(title,caption,a);
  const popup=new window.maplibregl.Popup({offset:18,maxWidth:'260px'}).setDOMContent(box);
  const marker=new window.maplibregl.Marker({element:el,anchor:'left'}).setLngLat(p.point).setPopup(popup).addTo(map);
  markers.push(marker);
 }
}
function boundsFor(keys){
 const b=new window.maplibregl.LngLatBounds(); keys.forEach(x=>b.extend(PLACES[x].point));return b;
}
function view(){
 if(!ready || !map)return;
 const ids=focus==='otaru'?['sapporo','otaru','yoichi']:focus==='biei'?['tomita','biei','blue']
 :focus==='excursion'?(params.plan==='A'?['sapporo','noboribetsu',...(params.car===2?['shikotsu']:[])]:params.plan==='B'?['sapporo','yoichi','shakotan',...(params.car===2?[]:['otaru'])]:['sapporo','jozankei',...(params.car>=1?['shikotsu']:[])])
 :placesFor(params.plan,params.car);
 map.fitBounds(boundsFor(ids),{padding:{left:42,right:92,top:78,bottom:48},maxZoom:focus==='all'?8.4:10.2,duration:window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:650});
}
function highlightRoutes(){
 if(!ready || !map?.getLayer('trip-lines'))return;
 map.setPaintProperty('trip-lines','line-opacity',focus==='all'?0.85:['case',['==',['get','id'],focus],0.95,0.14]);
}
function applyChoice(plan,car){
 params.plan=['A','B','C'].includes(plan)?plan:'A';params.car=[0,1,2].includes(Number(car))?Number(car):0;
 const bieiButton=toolbar.querySelector('[data-map-focus="biei"]');
 if(bieiButton){
  bieiButton.hidden=params.plan==='C';
  if(params.plan==='C'&&focus==='biei'){
   focus='all';
   toolbar.querySelectorAll('[data-map-focus]').forEach(b=>{const active=b.dataset.mapFocus==='all';b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
  }
 }
 if(!ready)return;
 map.getSource('trip-paths').setData(routeData(params.plan,params.car));
 redrawMarkers();view();highlightRoutes();
}
window.addEventListener('hokkaido:routechange',event=>applyChoice(event.detail.plan,event.detail.car));
for(const el of toolbar.querySelectorAll('[data-map-focus]'))el.addEventListener('click',()=>{
 focus=el.dataset.mapFocus;toolbar.querySelectorAll('[data-map-focus]').forEach(b=>{const active=b===el;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});view();highlightRoutes();
});
try{
 const cssSources=[
  'https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.css',
  'https://cdn.jsdelivr.net/npm/maplibre-gl@6.16.0/dist/maplibre-gl.css'
 ];
 async function loadCSS(url){
  return new Promise((resolve,reject)=>{
   const link=document.createElement('link');link.rel='stylesheet';link.href=url;
   const timer=setTimeout(()=>{link.remove();reject(new Error('CSS 載入逾時'))},6500);
   link.onload=()=>{clearTimeout(timer);resolve(true)};
   link.onerror=()=>{clearTimeout(timer);link.remove();reject(new Error('CSS 下載失敗'))};
   document.head.appendChild(link);
  });
 }
 let cssLoaded=false;
 for(const src of cssSources){try{await loadCSS(src);cssLoaded=true;break}catch(e){console.warn('MapLibre stylesheet unavailable',src,e.message)}}
 if(!cssLoaded)throw new Error('地圖樣式 CSS 無法載入，已保留離線示意圖');
 let imported;
 try{ imported=await import('https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.mjs'); }
 catch(e){ imported=await import('https://cdn.jsdelivr.net/npm/maplibre-gl@6.16.0/dist/maplibre-gl.mjs'); }
 window.maplibregl=imported;
 if(!window.WebGLRenderingContext)throw new Error('瀏覽器未提供 WebGL');
 map=new imported.Map({container:mapElement,style:'https://tiles.openfreemap.org/styles/positron',center:[141.4,43.18],zoom:7,attributionControl:true,cooperativeGestures:true});
 // Track map container size, including breakpoint and sidebar layout changes.
 // Window resize alone can miss container-only resizes.
 if(typeof ResizeObserver!=='undefined'){
   let resizeFrame=0;
   const observer=new ResizeObserver(()=>{
     if(resizeFrame)cancelAnimationFrame(resizeFrame);
     resizeFrame=requestAnimationFrame(()=>{
       resizeFrame=0;
       if(map)map.resize();
     });
   });
   observer.observe(mapElement);
   window.addEventListener('pagehide',()=>{
     observer.disconnect();
     if(resizeFrame)cancelAnimationFrame(resizeFrame);
   },{once:true});
 }
 map.addControl(new imported.NavigationControl({showCompass:false}),'top-right');
 let mapStructureReady=false;
 map.on('load',()=>{
   map.addSource('trip-paths',{type:'geojson',data:routeData(params.plan,params.car)});
   map.addLayer({id:'trip-lines',type:'line',source:'trip-paths',paint:{'line-color':['get','color'],'line-width':3.4,'line-opacity':0.85,'line-dasharray':[1.5,2]}});
   mapStructureReady=true;
   requestAnimationFrame(()=>{try{map.resize()}catch(e){}});
 });
 // A loaded style is NOT proof that the basemap has actually rendered. Wait for idle + visible vector features.
 function verifyAndShow(){
  if(!mapStructureReady||ready||!map.areTilesLoaded())return;
  const canvas=map.getCanvas();
  if(!canvas||canvas.width<50||canvas.height<50)return;
  let visibleBasemap=false;
  try{visibleBasemap=map.queryRenderedFeatures().some(f=>f.source!=='trip-paths')}catch(e){return}
  if(!visibleBasemap)return;
  console.info('[SapporoMap] Basemap rendered; tilesLoaded=',map.areTilesLoaded());
  ready=true;clearTimeout(timeout);
  redrawMarkers();view();highlightRoutes();status('ready','');
  host.classList.remove('is-live-loading');toolbar.hidden=false;host.classList.add('has-live-map');
  const fallbackLabel=host.querySelector('.map-label');if(fallbackLabel)fallbackLabel.textContent='景點順序連線，非實際道路導航｜OpenFreeMap © OpenStreetMap';
  map.resize();
 }
 map.on('idle',verifyAndShow);
 // Safari and slow networks can delay the first idle; checking render a few times is harmless.
 let polls=0;const poll=setInterval(()=>{polls++;if(ready||polls>18){clearInterval(poll);return}verifyAndShow()},850);
 map.on('error',event=>{if(!ready){console.warn('OpenFreeMap 載入失敗，保留離線示意圖',event.error);status('error','外部地圖資源載入失敗。離線示意圖仍可使用；請確認網路或瀏覽器封鎖設定。')}});
}catch(err){console.warn('互動地圖未啟用，仍可查看原有離線示意地圖：',err.message);host.classList.remove('is-live-loading','has-live-map');toolbar.hidden=true;status('error','地圖外部資源載入失敗：'+String(err.message||err).slice(0,125)+'。離線示意圖已保留，無須上傳 GitHub。')}
})();
