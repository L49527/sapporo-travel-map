
if ('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost' || location.hostname==='127.0.0.1')) {
 const hadController=!!navigator.serviceWorker.controller;
 let notified=false;
 const toast=(id,text,action)=>{
  let el=document.getElementById(id);
  if(!el){
   el=document.createElement('div');el.id=id;el.className='pwa-toast';el.setAttribute('role','status');
   document.body.appendChild(el);
  }
  el.textContent='';
  const span=document.createElement('span');span.textContent=text;el.appendChild(span);
  if(action){const b=document.createElement('button');b.type='button';b.textContent=action.label;b.addEventListener('click',action.run);el.appendChild(b);}
  el.hidden=false;
  return el;
 };
 // A new service worker takes control immediately (skipWaiting + clients.claim);
 // tell the visitor so they can reload to get the new page files.
 navigator.serviceWorker.addEventListener('controllerchange',()=>{
  if(!hadController||notified)return;
  notified=true;
  toast('pwaUpdateToast','網站已更新到新版本。',{label:'重新整理',run:()=>location.reload()});
 });
 const status=document.getElementById('offlineStatus');
 function showStatus(message){
  status.textContent=message;
  status.hidden=false;
 }
 function prepareOffline(worker){
  if(!worker)return;
  const online=navigator.onLine!==false;
  if(online)showStatus('正在準備離線行程與照片…');
  worker.postMessage({type:'prepare-offline',download:online});
 }
 navigator.serviceWorker.addEventListener('message',event=>{
  if(event.data?.type!=='offline-status')return;
  const {shell,photos}=event.data;
  showStatus(!shell?'離線行程尚未準備完成，請在連線時重新開啟。'
   :photos?'離線行程與預下載照片已準備完成。'
   :'行程可離線使用。部分照片尚未下載，可連線後重新整理。');
 });
 navigator.serviceWorker.addEventListener('controllerchange',()=>
  prepareOffline(navigator.serviceWorker.controller));
 window.addEventListener('online',()=>prepareOffline(navigator.serviceWorker.controller));
 navigator.serviceWorker.ready.then(reg=>prepareOffline(reg.active));
 window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js',{scope:'./',updateViaCache:'none'})
 .then(reg=>{reg.update().catch(()=>{});console.info('[SapporoPWA] ready',reg.scope)})
 .catch(err=>console.warn('[SapporoPWA] unavailable',err.message)));
}
(()=>{
 const show=()=>{
  if(navigator.onLine!==false){const el=document.getElementById('pwaOfflineBanner');if(el)el.hidden=true;return;}
  let el=document.getElementById('pwaOfflineBanner');
  if(!el){el=document.createElement('div');el.id='pwaOfflineBanner';el.className='pwa-toast pwa-offline';el.setAttribute('role','status');el.textContent='目前離線：已快取的行程與照片仍可使用，線上地圖與外部連結需要網路。';document.body.appendChild(el);}
  el.hidden=false;
 };
 window.addEventListener('online',show);window.addEventListener('offline',show);
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',show,{once:true});else show();
})();
