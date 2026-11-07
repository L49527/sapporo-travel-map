# HOKKAIDO — 札幌 2027 網站結構

本專案是可直接部署至 GitHub Pages 的純靜態網站，不需要 Node.js 或前端編譯。

## 檔案分工

- `index.html`：HTML 語意結構；不再嵌入大量 CSS / JS / WebP。
- `css/site.css`：原來的 23 段 CSS，**依原始順序**合併，維持優先順序與 Backroads 視覺。
- `js/app.js`：行程、交通與基本互動。
- `js/photo-loader.js`、`js/cover-carousel.js`、`js/embedded-photo.js`：圖片容錯、封面輪播與照片指定。
- `js/checklist.js`：行前準備清單。
- `js/map.js`：MapLibre ES module 互動地圖。
- `js/map-local-advice.js`、`js/map-status.js`：地圖提示與載入狀態。
- `js/pwa-register.js`：Service Worker 註冊。
- `js/food-guide.js`：每日美食、名產與位置資料及渲染。
- `assets/photos/**/*.webp`：本地照片一律 WebP。原 15 張 PNG 已轉 WebP（約 7MB→0.6MB）；6 張截斷 PNG 移至 `docs/archive/corrupted-photos-20261107/` 待重新匯出，不進站。
- `sw.js`：PWA 快取（`CACHE_NAME` 單一來源，現為 v44）。Shell（HTML/CSS/JS/manifest/icons/封面）進 `sapporo-travel-shell-v44`；餐廳/特產照片進 `sapporo-travel-photos-v44` 於 install 後背景補齊，另有 fetch 時按需回填。新增照片時同步加進 `PHOTO_PRECACHE` 並往後加快取版本。
- `manifest.webmanifest`、`icons/`：原有 PWA 與 Logo 素材。

## 開發與部署

可在本機執行 `python3 -m http.server 8000`，瀏覽 `http://localhost:8000/`。
不要直接以 `file://` 測試 ES module、地圖與 PWA。

GitHub Pages 的子路徑是 `/sapporo-travel-map/`，因此資源 URL 使用 `./css/...`、`./js/...`、`./assets/...` 相對路徑。

## 注意

這次僅做**保守式抽離**，不修改行程資料、設計、輪播間隔、地圖 provider 或外部照片來源。
JS 仍以原 HTML 的相同順序載入；`js/map.js` 保持 `type="module"`。食物資料仍保留在 `js/food-guide.js`，
後續可在完整瀏覽器回歸測試後再獨立為 JSON 模組。

更新 PWA 後，先在有網路時載入一次；快取版本以 `sw.js` 的 `CACHE_NAME` 為準。Shell 優先、照片背景補齊，照片也會有 fetch 時按需快取。
