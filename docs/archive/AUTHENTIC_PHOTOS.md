# 店家實拍來源策略（2026-11-03）

## 使用者需求

札幌 2027 七日時間軸中的每一間餐廳都應呈現該店自身實際照片，不再跨店共用看起來好看的拉麵、壽司、海鮮丼等示意照。

## 已完成的保守版

- 在 `js/food-guide.js` 的 `VERIFIED_RESTAURANT_PHOTOS` 中，只能註冊**能對應指定店家及合法使用權**的照片。
- 目前有兩個已查核的原始來源：
  - `d1`：成吉思汗 だるま 的店內烤肉實拍（2019 年），作者 Savannah Rivka，CC BY-SA 4.0。
    https://commons.wikimedia.org/wiki/File:Yakiniku_on_braziers_at_成吉思汗_だるま_in_Sapporo,_Japan_(244).jpg
  - `l5`：若鶏時代 なると小樽本店的店面外觀（2014 年歷史照片），作者 Gpx-evo，CC BY-SA 3.0。
    https://commons.wikimedia.org/wiki/File:Wakadorijidainaruto-honten01.JPG
- 其他餐廳**不再顯示跨店通用照片**，以清爽的編輯式版面提供獨立的「查看店家實拍」入口，點擊 Google Maps 針對餐廳全名及地址查找實拍；是照片查閱，不是行車路線導航。
- 另外兩個實拍參考入口：海味はちきょう食べログ「つっこ飯」顧客照片頁、GARAKU 料理介紹網誌；不下載、複製或盜連原站圖片。
- 原本地方名產的商品照片仍保留，已經有商品作者／授權標示。
- `PHOTO_BY_ID` 等舊的料理示意圖片欄位為相容性暫時保留，但**餐廳卡片不再使用**；避免將示意照片誤標為真實店家照片。

## Google Maps 與 Instagram 直接顯示的條件

1. **Google Places Photo API**：需要啟用帳單的 Google Maps Platform 專案、API 金鑰、按官方方式取得最新 Photo resource，以及顯示 Google Maps 與照片作者署名。禁止把 API 得到的照片永久保存到 GitHub。參見 https://developers.google.com/maps/documentation/places/web-service/place-photos 與 https://developers.google.com/maps/documentation/places/web-service/policies。
2. **Instagram 嵌入**：僅使用已核對的公開貼文網址與官方允許的嵌入方式；需要貼文作者未關閉嵌入，不得擷取圖片另存到 GitHub。
3. **部落格、食べログ**：連結文章／原始照片頁；須取得權利人允許才可重製、擷取、代理或盜連圖片。食べログ條款：https://tabelog.com/help/rules 。

## 尚未完成

- 未取得每間餐廳的 Google Places API 金鑰、Place ID 與 Photo attributions，**不能宣稱所有餐廳已在卡片內顯示實拍**。
- 各個 Google Maps 搜尋入口仍需使用者確認同名不同分店，地址與名稱需在 2027 出發前複查。
- 未執行 GitHub Pages 真實瀏覽器的跨裝置圖片載入測試；外站圖片可能受網路或服務條款限制。

## 其他保留功能

Day 1–7、Day 6 A／B／C、午晚餐各 5 間以上、預設只顯示 3 間、營業時間與站內 Leaflet/MapLibre 地圖均未調整。PWA cache 更新 v15。
