
window.addEventListener('load',function(){
  setTimeout(function(){var n=document.getElementById('sapporoMapNotice');if(n && !n.dataset.state){n.dataset.state='error';n.querySelector('strong').textContent='互動地圖未載入';n.querySelector('span').textContent='瀏覽器可能阻擋了本機 HTML 的外部模組。請保持網路連線，改用本機伺服器或 GitHub Pages 測試。';}},12000);
});
