# 札幌・北海道 2027 旅行地圖

札幌與北海道七日旅行的純靜態網站，提供每日行程、餐廳、伴手禮、飯店與地圖資訊。

## 網站內容

- Day 0–6 行程，支援租車 A／B／C 路線與每日餐食安排。
- 餐廳與名產卡片，附分店、營業時間、照片來源與食べログ／官方連結。
- 飯店卡片：外觀與三人以上房型照片輪換，並標示房內設施與洗衣方式。
- MapLibre 互動地圖、行前清單、封面輪播、進場動畫與 PWA 快取。
- 使用者提供的餐廳與特產照片均放在 `assets/photos/`。

## 本機預覽

這是 buildless 靜態網站，不需要安裝套件或編譯：

```bash
python3 -m http.server 8000
```

開啟 <http://localhost:8000/>。請使用 HTTP 預覽，不要直接用 `file://`，否則地圖模組與 Service Worker 可能無法正常運作。

## GitHub Pages

在 GitHub repository 的 **Settings → Pages** 選擇 `main` branch 與根目錄 `/ (root)`。保留根目錄的 `.nojekyll`，並不要改成絕對路徑；網站使用相對路徑載入 `css/`、`js/` 與 `assets/`。

## 主要檔案

| 路徑 | 用途 |
|---|---|
| `index.html` | 網站入口與頁面結構 |
| `css/` | 版面、響應式樣式、封面與動畫 |
| `js/app.js` | 行程、飯店、交通與基本互動 |
| `js/dining-catalog.js` | 餐廳資料 |
| `js/food-guide.js` | 餐廳照片、名產、營業時間與來源連結 |
| `js/map.js` | MapLibre 地圖 |
| `assets/photos/` | 餐廳、名產與飯店本地圖片 |
| `icons/`、`manifest.webmanifest` | PWA 圖示與設定 |
| `sw.js` | Service Worker 與離線快取清單 |
| `tests/` | 資料與頁面結構檢查 |

## 驗證

有 Node.js 時可執行：

```bash
node --test tests/*.test.cjs
```

新增或更換本地圖片時，同步檢查 `sw.js` 的快取清單與相關測試。

## 資料與照片說明

外部店家連結、營業時間與房型資訊可能變動，預訂或出發前請以店家官方頁面再次確認。照片授權與來源記錄集中在 [`PHOTO_SOURCES.md`](PHOTO_SOURCES.md)；網站維護結構可參考 [`ARCHITECTURE.md`](ARCHITECTURE.md)。

歷史需求、照片批次、食べログ稽核與驗證紀錄集中在 [`docs/archive/`](docs/archive/)，後續由其他 AI 維護前可先閱讀相關文件，了解既有規則與取捨。
