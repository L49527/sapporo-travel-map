
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
