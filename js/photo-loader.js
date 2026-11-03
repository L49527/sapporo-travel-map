(()=>{
function mark(e){let img=e.target;if(!img||img.tagName!=='IMG')return;img.closest('.hero-panel,.hero,.tour-card,.story-layout,.day-photo,.day-img')?.classList.add('photo-missing');}
function ok(e){let img=e.target;if(!img||img.tagName!=='IMG')return;img.closest('.hero-panel,.hero,.tour-card,.story-layout,.day-photo,.day-img')?.classList.remove('photo-missing');}
document.addEventListener('error',mark,true);document.addEventListener('load',ok,true);
})();