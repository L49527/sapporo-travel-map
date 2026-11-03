
(function(){
 if(location.protocol!=='file:')return;
 document.addEventListener('DOMContentLoaded', function(){
  var e=document.getElementById('sapporoMapNotice');
  if(!e)return;
  e.dataset.state='error';
  var b=e.querySelector('strong'), t=e.querySelector('span');
  if(b)b.textContent='目前直接開啟本機 HTML';
  if(t)t.textContent='請使用 http://localhost:8000/ 開啟網站，才能可靠測試線上互動地圖。無網路時仍可查看行程示意圖。';
 });
})();
