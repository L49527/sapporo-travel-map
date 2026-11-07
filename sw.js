const CACHE_NAME='sapporo-travel-shell-v44';
const PHOTO_CACHE_NAME='sapporo-travel-photos-v44';
const SHELL_PRECACHE=["./","./index.html","./css/site.css?v=20261106-rooms1","./css/responsive-fixes.css","./css/interaction-effects.css?v=20261104-motion3","./css/cover-layout.css?v=20261104-cover2","./css/tax-refund.css?v=20261105-tax1","./js/app.js?v=20261106-rooms2","./js/photo-loader.js","./js/cover-carousel.js","./js/checklist.js","./js/embedded-photo.js","./js/map-local-advice.js","./js/map.js","./js/map-status.js","./js/pwa-register.js","./js/dining-catalog.js","./js/food-guide.js","./js/interaction-effects.js?v=20261104-motion3","./manifest.webmanifest","./icons/icon.svg","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/apple-touch-icon.png","./assets/photos/sapporo-odori-cover.webp","./assets/photos/sapporo-odori-backup.webp","./assets/illustrations/japan-tax-refund-2026-v1.webp"];
const PHOTO_PRECACHE=["./assets/photos/restaurants/ajinoDaioNoboribetsu.webp","./assets/photos/restaurants/cafeYoshimiAkarenga.webp","./assets/photos/restaurants/chibaNoboribetsu.webp","./assets/photos/restaurants/darumaHonten.webp","./assets/photos/restaurants/enmakenNoboribetsu.webp","./assets/photos/restaurants/farmTomitaSouvenirs.webp","./assets/photos/restaurants/franseJozan.webp","./assets/photos/restaurants/fujizushiShakotan.webp","./assets/photos/restaurants/fukuzushi.webp","./assets/photos/restaurants/furukawaFruitGlacee.webp","./assets/photos/restaurants/garakuSapporoHonten.webp","./assets/photos/restaurants/hachikyoHonten.webp","./assets/photos/restaurants/hakkenzanKitchenMarche.webp","./assets/photos/restaurants/hanabusaNewChitose.webp","./assets/photos/restaurants/hokkaidoBbqNobojin.webp","./assets/photos/restaurants/ichigenNewChitose.webp","./assets/photos/restaurants/ichigenSohonten.webp","./assets/photos/restaurants/isezushiOtaruEkinaka.webp","./assets/photos/restaurants/juneCoffeeSapporo.webp","./assets/photos/restaurants/kakizakiSeafoodKobo.webp","./assets/photos/restaurants/kamaeiFactoryStore.webp","./assets/photos/restaurants/kaniHonkeSapporoEkimae.webp","./assets/photos/restaurants/kantaroNewChitose.webp","./assets/photos/restaurants/keyakiNewChitose.webp","./assets/photos/restaurants/keyakiSusukinoHonten.webp","./assets/photos/restaurants/kitaNoboruUdon.webp","./assets/photos/restaurants/kitanogurumeSeafood.webp","./assets/photos/restaurants/kodamaya.webp","./assets/photos/restaurants/kumagera.webp","./assets/photos/restaurants/lakesideKitchenTonton.webp","./assets/photos/restaurants/matsuiJingisukanOdoriMinami1.webp","./assets/photos/restaurants/memereLakesideSweets.webp","./assets/photos/restaurants/misakiShakotan.webp","./assets/photos/restaurants/nakamurayaShakotan.webp","./assets/photos/restaurants/narutoHonten.webp","./assets/photos/restaurants/naturalDiningFurano.webp","./assets/photos/restaurants/nemuroHanamaruJrTower.webp","./assets/photos/restaurants/noboribetsuOnsenIchiba.webp","./assets/photos/restaurants/northernTerraceDiner.webp","./assets/photos/restaurants/ohisoNijoMarket.webp","./assets/photos/restaurants/okushibaSoseiji.webp","./assets/photos/restaurants/otaruMasazushiHonten.webp","./assets/photos/restaurants/otaruNewSankoNewChitose.webp","./assets/photos/restaurants/otaruPoseidonSakaimachi.webp","./assets/photos/restaurants/rinkouShokudo.webp","./assets/photos/restaurants/sandriaHonten.webp","./assets/photos/restaurants/sapporoBeerGarden.webp","./assets/photos/restaurants/shingenMinami6.webp","./assets/photos/restaurants/shirakabaSansoNewChitose.webp","./assets/photos/restaurants/shiumaiHayama.webp","./assets/photos/restaurants/shokudoIchiJozan.webp","./assets/photos/restaurants/shokudoKonnoJozan.webp","./assets/photos/restaurants/starbucksSapporoStellarPlace.webp","./assets/photos/restaurants/suagePlus.webp","./assets/photos/restaurants/suginoUnizenShakotan.webp","./assets/photos/restaurants/takinamiShokudo.webp","./assets/photos/restaurants/tomitaMelonHouse.webp","./assets/photos/restaurants/uomasaMarketSushi.webp","./assets/photos/restaurants/warakuOtaru.webp","./assets/photos/specialties/bieiCornBread.webp","./assets/photos/specialties/furanoLavenderCandle.webp"];
const PRECACHE=SHELL_PRECACHE.concat(PHOTO_PRECACHE);
const isImageRequest=req=>req.destination==='image'||/\.(webp|png|jpg|jpeg|svg|ico)$/i.test(new URL(req.url).pathname);
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
  const shell=await caches.open(CACHE_NAME);
  await Promise.allSettled(SHELL_PRECACHE.map(url=>shell.add(new Request(url,{cache:'reload'}))));
  // Photos fill in the background so first install stays fast; they are still
  // available offline once this background pass finishes. Fetch handler below
  // also backfills individual photos on demand.
  const photos=await caches.open(PHOTO_CACHE_NAME);
  await Promise.allSettled(PHOTO_PRECACHE.map(url=>photos.add(new Request(url,{cache:'reload'}))));
  await self.skipWaiting();
 })());
});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith('sapporo-travel-shell-')&&k!==CACHE_NAME)||(k.startsWith('sapporo-travel-photos-')&&k!==PHOTO_CACHE_NAME)).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin)return;
 if(!url.pathname.startsWith(new URL('./',self.registration.scope).pathname))return;
 const isDocument=req.mode==='navigate';
 const image=isImageRequest(req);
 event.respondWith((async()=>{
  if(image){
   const cached=await caches.match(req,{ignoreSearch:true});
   if(cached){
    // Revalidate in background so updated photos replace stale ones.
    fetch(req).then(res=>{if(res&&res.ok)caches.open(PHOTO_CACHE_NAME).then(c=>c.put(req,res.clone()).catch(()=>{}));}).catch(()=>{});
    return cached;
   }
   try{
    const res=await fetch(req);
    if(res&&res.ok)caches.open(PHOTO_CACHE_NAME).then(c=>c.put(req,res.clone()).catch(()=>{}));
    return res;
   }catch(err){
    const home=await caches.match(new URL('./index.html',self.registration.scope));
    if(home)return home;
    throw err;
   }
  }
  try{
   // Documents must never come from the HTTP cache: a stale index.html would
   // keep pointing at older css/js versions even after an update.
   const res=isDocument
    ?await fetch(req.url,{cache:'reload',credentials:'same-origin'})
    :await fetch(req);
   if(res&&res.ok&&!isDocument){
    const cache=await caches.open(CACHE_NAME);
    cache.put(req,res.clone()).catch(()=>{});
   }
   return res;
  }catch(err){
   const cached=await caches.match(req,{ignoreSearch:true});
   if(cached)return cached;
   if(isDocument){
    const home=await caches.match(new URL('./index.html',self.registration.scope));
    if(home)return home;
   }
   throw err;
  }
 })());
});
