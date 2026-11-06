const CACHE_NAME='sapporo-travel-shell-v43';
const PRECACHE=["./","./index.html","./css/site.css?v=20261106-rooms1","./css/responsive-fixes.css","./css/interaction-effects.css?v=20261104-motion3","./css/cover-layout.css?v=20261104-cover2","./js/app.js?v=20261106-rooms2","./js/photo-loader.js","./js/cover-carousel.js","./js/checklist.js","./js/embedded-photo.js","./js/map-local-advice.js","./js/map.js","./js/map-status.js","./js/pwa-register.js","./js/dining-catalog.js","./js/food-guide.js","./js/interaction-effects.js?v=20261104-motion3","./assets/photos/sapporo-odori-cover.webp","./assets/photos/sapporo-odori-backup.webp","./manifest.webmanifest","./icons/icon.svg","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/apple-touch-icon.png","./assets/photos/restaurants/ajinoDaioNoboribetsu.webp","./assets/photos/restaurants/asperges.png","./assets/photos/restaurants/cafeYoshimiAkarenga.webp","./assets/photos/restaurants/chibaNoboribetsu.webp","./assets/photos/restaurants/darumaHonten.webp","./assets/photos/restaurants/donburiChayaNijo.png","./assets/photos/restaurants/enmakenNoboribetsu.webp","./assets/photos/restaurants/farmTomitaSouvenirs.webp","./assets/photos/restaurants/franseJozan.webp","./assets/photos/restaurants/fujizushiShakotan.webp","./assets/photos/restaurants/fukuzushi.png","./assets/photos/restaurants/furukawaFruitGlacee.webp","./assets/photos/restaurants/garakuSapporoHonten.webp","./assets/photos/restaurants/hachikyoHonten.webp","./assets/photos/restaurants/hakkenzanKitchenMarche.webp","./assets/photos/restaurants/hanabusaNewChitose.webp","./assets/photos/restaurants/hokkaidoBbqNobojin.webp","./assets/photos/restaurants/ichigenNewChitose.webp","./assets/photos/restaurants/ichigenSohonten.webp","./assets/photos/restaurants/isezushiOtaruEkinaka.png","./assets/photos/restaurants/kakizakiSeafoodKobo.webp","./assets/photos/restaurants/kamaeiFactoryStore.webp","./assets/photos/restaurants/kaniHonkeSapporoEkimae.webp","./assets/photos/restaurants/kantaroNewChitose.webp","./assets/photos/restaurants/keyakiNewChitose.webp","./assets/photos/restaurants/keyakiSusukinoHonten.webp","./assets/photos/restaurants/kitaNoboruUdon.webp","./assets/photos/restaurants/kodamaya.png","./assets/photos/restaurants/kumagera.png","./assets/photos/restaurants/lakesideKitchenTonton.webp","./assets/photos/restaurants/matsuiJingisukanOdoriMinami1.webp","./assets/photos/restaurants/memereLakesideSweets.webp","./assets/photos/restaurants/misakiShakotan.webp","./assets/photos/restaurants/nakamurayaShakotan.webp","./assets/photos/restaurants/narutoHonten.png","./assets/photos/restaurants/naturalDiningFurano.png","./assets/photos/restaurants/nemuroHanamaruJrTower.webp","./assets/photos/restaurants/noboribetsuOnsenIchiba.webp","./assets/photos/restaurants/northernTerraceDiner.webp","./assets/photos/restaurants/okushibaSoseiji.webp","./assets/photos/restaurants/otaruMasazushiHonten.webp","./assets/photos/restaurants/otaruNewSankoNewChitose.webp","./assets/photos/restaurants/otaruPoseidonSakaimachi.webp","./assets/photos/restaurants/rinkouShokudo.webp","./assets/photos/restaurants/sandriaHonten.webp","./assets/photos/restaurants/sapporoBeerGarden.webp","./assets/photos/restaurants/shingenMinami6.webp","./assets/photos/restaurants/shirakabaSansoNewChitose.webp","./assets/photos/restaurants/shiumaiHayama.webp","./assets/photos/restaurants/shokudoIchiJozan.webp","./assets/photos/restaurants/shokudoKonnoJozan.webp","./assets/photos/restaurants/suagePlus.webp","./assets/photos/restaurants/suginoUnizenShakotan.webp","./assets/photos/restaurants/takinamiShokudo.png","./assets/photos/restaurants/tomitaMelonHouse.png","./assets/photos/restaurants/warakuOtaru.webp","./assets/photos/restaurants/yuigaDoxon.png"];
PRECACHE.push("./assets/photos/specialties/bieiCornBread.png","./assets/photos/specialties/jagaPokkuru.png","./assets/photos/specialties/horiYubariMelonPureJelly.png","./assets/photos/specialties/furanoLavenderCandle.png","./assets/photos/specialties/furanoWineCheddarCheese.png");
PRECACHE.push("./assets/photos/restaurants/juneCoffeeSapporo.png");
PRECACHE.push("./assets/photos/restaurants/starbucksSapporoStellarPlace.png");
PRECACHE.push("./assets/photos/restaurants/ohisoNijoMarket.png");
PRECACHE.push("./assets/photos/restaurants/uomasaMarketSushi.png");
PRECACHE.push("./assets/photos/restaurants/kitanogurumeSeafood.png");
PRECACHE.push("./css/tax-refund.css?v=20261105-tax1","./assets/illustrations/japan-tax-refund-2026-v1.webp","./assets/illustrations/japan-tax-refund-2026-v1.png");
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(async cache=>{await Promise.allSettled(PRECACHE.map(url=>cache.add(new Request(url,{cache:'reload'}))));}).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sapporo-travel-shell-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin)return;
 if(!url.pathname.startsWith(new URL('./',self.registration.scope).pathname))return;
 const isDocument=req.mode==='navigate';
 event.respondWith((async()=>{
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
