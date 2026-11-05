# 札幌・北海道 2027｜網頁完整包

此資料夾已放好網站程式、照片與圖示。可整包上傳到你的 GitHub 儲存庫，再由你部署。

## 上傳方式

將本資料夾內的所有內容放到網站根目錄，讓 `index.html` 與 `css/`、`js/`、`assets/`、`icons/` 位於同一層。不要只上傳 `index.html`，也不要把 ZIP 本身當作網站檔案。

這是靜態網頁，不需安裝套件或執行編譯。GitHub Pages 使用根目錄的 `index.html`；其他靜態主機也使用同一套檔案。`.nojekyll` 一起保留即可。

## 本次調整

- 封面：依 Backroads 原始碼的滿版高度、置中標題與按鈕調整；手機與桌機初次開啟都不會露出下一區文字。
- 卡片：左／右／下方交錯進場，約 0.55 秒；中間故事區的照片與文字分別由左右進場，約 0.6 秒。啟用系統「減少動態效果」時直接顯示內容。
- 新增你提供的照片，均存放於 `assets/photos/restaurants/`，分別對應伊勢鮨、なると、滝波食堂、くまげら、ASPERGES、Tomita Melon House、唯我獨尊、小玉家、Natural Dining、Fukuzushi，以及本次新加入的 Northern Terrace Diner、レークサイドキッチン トントン、味之大王 登別溫泉店。
- 餐廳照片檔名全部改為可讀的店名 slug（例如 `darumaHonten.webp`、`northernTerraceDiner.webp`），不再使用 `b4`、`d4` 這類行程 ID。
- 稽核全部 56 筆餐廳的食べログ連結，補上奥芝商店 駅前創成寺的直達頁；`b4` 地址與 `x-shik` 營業時間已依官網修正。
- 名產每天至少三家，只有超過三家才顯示「探索更多」；新增フラノマルシェ、富良野チーズ工房，並補上かま栄、富田農場、J・glacée 三張照片。
- 更新離線快取版本與檔案清單，包含新的封面樣式與全部 57 張餐廳／選物照片（cache `v36`）。
- 進場動畫改為由 `js/interaction-effects.js` 加上 `html.motion-on` 才啟動，並擴大到區塊標題、時間軸、預算欄位、行前準備與清單；`prefers-reduced-motion` 仍會完全關閉動畫。

## 檔案位置

- `index.html`：網頁入口。
- `css/cover-layout.css`：此次封面版面設定（最後載入）。
- `css/interaction-effects.css`、`js/interaction-effects.js`：卡片進場效果與選單互動（版本字串 `20261104-motion3`，兩者要一起上傳）。
- `js/food-guide.js`：餐廳照片與食べログ連結對應。
- `js/dining-catalog.js`：餐廳資料；保留原有行程內容。
- `assets/photos/restaurants/`：店家照片。
- `PHOTO_UPDATE_20261104.md`：十張 PNG 照片與連結更新紀錄。
- `TABELOG_AUDIT_20261104.md`：56 筆餐廳的食べログ連結稽核清單與例外說明。
- `USER_RESTAURANT_PHOTOS.md`：全部餐廳照片檔名與行程 ID 對照。
- `tests/`：原有資料檢查。若電腦有 Node.js，可用 `node --test tests/*.test.cjs` 執行。

## 比對依據

[Backroads 參考網站](https://travel-backroads.vercel.app/)

[Hero.tsx：滿版與置中封面](https://github.com/arnobt78/Travel-Tourism-Landing-Page--React-Frontend/blob/main/src/components/Hero.tsx)

[About.tsx：照片與文字左右進場](https://github.com/arnobt78/Travel-Tourism-Landing-Page--React-Frontend/blob/main/src/components/About.tsx)

[Tour.tsx](https://github.com/arnobt78/Travel-Tourism-Landing-Page--React-Frontend/blob/main/src/components/Tour.tsx) 與 [Tours.tsx](https://github.com/arnobt78/Travel-Tourism-Landing-Page--React-Frontend/blob/main/src/components/Tours.tsx)：左／右／下方交錯進場。

這次保留札幌品牌、照片輪播與行程功能，採用參考站的封面結構及進場方式，並非將整站換成 Backroads 的英文內容。

## 看不到進場動畫時

1. 開啟網站，按 F12 打開 Console，輸入 `window.hokkaidoMotion` 後按 Enter。
2. `undefined`：`js/interaction-effects.js` 沒上傳或被快取擋住，重新上傳這個檔案與 `index.html`。
3. `enabled: false`：電腦或手機開了「減少動態效果」（macOS：系統設定 → 輔助使用 → 顯示器），這是刻意的無障礙行為。
4. `enabled: true` 但沒有動畫：`css/interaction-effects.css` 沒載入或 HTML 還是舊版，重新上傳 `css/interaction-effects.css` 與 `index.html`。
5. 仍無效時，到 DevTools → Application → Service Workers 按 Update 或 Unregister，再強制重新整理（macOS：Cmd + Shift + R）。

最常見的原因是瀏覽器快取住舊的 `index.html`：舊 HTML 只會去要舊版 CSS／JS，新動畫檔案根本沒被下載。本次已讓 `sw.js`（`v36`）的導覽請求跳過 HTTP 快取，並在更新後自動換掉舊快取；上傳後第一次開啟請重新整理一次，之後就會固定拿到新版。

本機預覽與正式網站都必須保持 `index.html`、`css/`、`js/` 三者在同一層，動畫才會運作。

原有外部景點圖庫與地圖仍需連網；本次新增十張餐廳照片為隨包提供的本地檔案。
