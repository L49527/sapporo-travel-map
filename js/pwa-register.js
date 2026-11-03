
if ('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost' || location.hostname==='127.0.0.1')) {
 window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js',{scope:'./',updateViaCache:'none'})
 .then(reg=>{reg.update().catch(()=>{});console.info('[SapporoPWA] ready',reg.scope)})
 .catch(err=>console.warn('[SapporoPWA] unavailable',err.message)));
}
