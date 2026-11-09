
(()=>{
 'use strict';
 const photos=[{"title":"札幌大通公園與電視塔","url":"./assets/photos/sapporo-odori-cover.webp","alt":"札幌大通公園的綠樹、花壇與電視塔","position":"53% 50%","source":""},{"title":"小樽運河","url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Otaru_Canal_Center.jpg/1280px-Otaru_Canal_Center.jpg","alt":"小樽運河與歷史倉庫建築的夏季景色","position":"50% 50%","source":"https://commons.wikimedia.org/wiki/File:Otaru_Canal_Center.jpg"},{"title":"美瑛白金青池","url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Biei_Blue-pond.jpg/1280px-Biei_Blue-pond.jpg","alt":"美瑛白金青池與水中樹木","position":"50% 50%","source":"https://commons.wikimedia.org/wiki/File:Biei_Blue-pond.jpg"},{"title":"積丹神威岬","url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Cape_Kamui_HDR1.jpg/1280px-Cape_Kamui_HDR1.jpg","alt":"積丹神威岬的海岬與藍色海洋","position":"54% 50%","source":"https://commons.wikimedia.org/wiki/File:Cape_Kamui_HDR1.jpg"},{"title":"支笏湖・山湖景觀","url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/%E6%94%AF%E7%AC%8F%E6%B9%96%E3%81%8B%E3%82%89%E3%81%AE%E6%A8%BD%E5%89%8D%E5%B1%B1%E3%81%A8%E9%A2%A8%E4%B8%8D%E6%AD%BB%E5%B2%B3.jpg/1280px-%E6%94%AF%E7%AC%8F%E6%B9%96%E3%81%8B%E3%82%89%E3%81%AE%E6%A8%BD%E5%89%8D%E5%B1%B1%E3%81%A8%E9%A2%A8%E4%B8%8D%E6%AD%BB%E5%B2%B3.jpg","alt":"支笏湖的湖水、遠方樽前山與風不死岳自然景觀，沒有道路或車輛作為主角","position":"50% 50%","source":"https://commons.wikimedia.org/wiki/File:支笏湖からの樽前山と風不死岳.jpg"},{"title":"薄野・札幌霓虹夜景","url":"https://sapporotravel.s3-ap-northeast-1.amazonaws.com/st/ph/img/susukino_05-scaled.jpg","alt":"札幌薄野商圈夜間燈光、招牌與街道景觀","position":"50% 50%","source":"https://www.sapporo.travel/sightseeing.photolibrary/area/area02/9003/"},{"title":"札幌車站夜景","url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Sapporo_Station_at_night_202507.jpg/1280px-Sapporo_Station_at_night_202507.jpg","alt":"夜晚點燈的札幌車站與JR塔","position":"50% 50%","source":"https://commons.wikimedia.org/wiki/File:Sapporo_Station_at_night_202507.jpg"},{"title":"莫埃來沼公園","url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Glass_pyramid_in_Moerenuma_Park_202607a.jpg/1280px-Glass_pyramid_in_Moerenuma_Park_202607a.jpg","alt":"莫埃來沼公園的玻璃金字塔與藍天","position":"50% 50%","source":"https://commons.wikimedia.org/wiki/File:Glass_pyramid_in_Moerenuma_Park_202607a.jpg"}];
 // Share the original embedded cover photo with the day-by-day gallery.
 // This ensures the opening day and any failed remote-day picture always show a real photograph.
 if(typeof PHOTOS!=='undefined')PHOTOS.hero=photos[0].url;
 const hero=document.querySelector('.hero-sapporo');
 const visual=hero&&hero.querySelector('.hero-visual');
 const pagination=hero&&hero.querySelector('.cover-pagination');
 if(!hero||!visual||!pagination)return;
 const original=document.getElementById('heroImage');
 if(original){original.src=photos[0].url;original.alt=photos[0].alt;}
 const stack=document.createElement('div');
 stack.className='cover-photo-stack';
 stack.setAttribute('aria-hidden','true');
 const images=photos.map((photo,i)=>{
   const img=document.createElement('img');
   img.className='cover-photo'+(i===0?' is-current':'');
   img.alt='';
   img.decoding='async';
   img.style.setProperty('object-position',photo.position,'important');
   if(i===0){img.src=photo.url;img.fetchPriority='high';}
   stack.appendChild(img);
   return img;
 });
 visual.appendChild(stack);
 // Preserve an offline photograph to prevent a stuck cover if Wikimedia cannot load.
 const offlineImage=document.createElement('img');
 offlineImage.className='cover-photo';
 offlineImage.alt='';
 offlineImage.decoding='async';
 offlineImage.style.setProperty('object-position','55% 45%','important');
 offlineImage.src="./assets/photos/sapporo-odori-backup.webp";
 stack.appendChild(offlineImage);
 const dots=photos.map((photo,i)=>{
   const button=document.createElement('button');
   button.type='button';
   button.className='cover-dot'+(i===0?' is-current':'');
   button.dataset.cover=String(i);
   button.setAttribute('aria-label','第 '+(i+1)+' 張：'+photo.title);
   button.setAttribute('aria-pressed',String(i===0));
   button.title=photo.title;
   button.appendChild(document.createElement('span'));
   pagination.appendChild(button);
   return button;
 });
 pagination.querySelectorAll('.cover-dot:not([data-cover-new])').forEach(button=>{
   if(!dots.includes(button))button.remove();
 });
 const INTERVAL_MS=5500;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const ready=new Set([0]);
 const failed=new Set();
 let current=0,timer=null;
 offlineImage.addEventListener('load',()=>ready.add(8));
 offlineImage.addEventListener('error',()=>failed.add(8));
 images.forEach((img,i)=>{
   img.addEventListener('load',()=>ready.add(i));
   img.addEventListener('error',()=>{failed.add(i);console.warn('[SapporoCarousel] Image unavailable',i+1,photos[i].title);});
   if(i>0){img.loading='eager';img.src=photos[i].url;}
 });
 function available(index){
   const img=index===8?offlineImage:images[index];
   return ready.has(index)||(img.complete&&img.naturalWidth>0);
 }
 function updateProgress(){
   dots.forEach(button=>button.classList.remove('is-current'));
   void hero.offsetWidth;
   dots.forEach((button,i)=>{
     const active=i===current;
     button.classList.toggle('is-current',active);
     button.setAttribute('aria-pressed',String(active));
   });
   hero.classList.toggle('is-paused',document.hidden||reduced.matches);
 }
 function show(index){
   if(!available(index))return false;
   [...images,offlineImage].forEach((img,i)=>img.classList.toggle('is-current',i===index));
   current=index;
   updateProgress();
   return true;
 }
 function advance(){
   const base=current===8?0:current;
   for(let offset=1;offset<photos.length;offset++){
     const next=(base+offset)%photos.length;
     if(!failed.has(next)&&available(next)){show(next);return;}
   }
   if(current!==8&&available(8)){show(8);return;}
   if(available(0))show(0);
 }
 function clearTimer(){if(timer!==null){clearInterval(timer);timer=null;}}
 function scheduleNext(){
   clearTimer();
   hero.classList.toggle('is-paused',document.hidden||reduced.matches);
   if(!document.hidden&&!reduced.matches)timer=setInterval(advance,INTERVAL_MS);
 }
 function select(index){
   if(!show(index)&&!failed.has(index)){
     images[index].addEventListener('load',()=>{show(index);scheduleNext();},{once:true});
   }
   scheduleNext();
 }
 dots.forEach((button,i)=>button.addEventListener('click',()=>select(i)));
 document.addEventListener('visibilitychange',()=>{
   if(document.hidden){clearTimer();hero.classList.add('is-paused');}
   else{updateProgress();scheduleNext();}
 });
 let touchStart=null;
 hero.addEventListener('touchstart',event=>{
   if(event.touches.length===1)touchStart=event.touches[0].clientX;
 },{passive:true});
 hero.addEventListener('touchend',event=>{
   if(touchStart===null)return;
   const distance=event.changedTouches[0].clientX-touchStart;
   touchStart=null;
   if(Math.abs(distance)>55)select(current+(distance<0?1:-1));
 },{passive:true});
 const onMotionChange=()=>{updateProgress();scheduleNext();};
 if(reduced.addEventListener)reduced.addEventListener('change',onMotionChange);
 else if(reduced.addListener)reduced.addListener(onMotionChange);
 updateProgress();
 scheduleNext();
})();
