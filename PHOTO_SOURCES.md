# 2027 札幌旅遊網｜美食／名產照片與營業時間

資料檔：`js/food-guide.js` 中的 `PHOTO_LIBRARY`、`PHOTO_BY_ID`、`SHOP_HOURS`。
頁面：每日行程下方 `#day-discover` 及跨區伴手禮總覽 `#food-guide`。

## 影像展示規則
- 用真實公開授權影像，不以 AI 合成冒充店家菜色。
- 「料理示意照」只說明料理類型，**不代表指定餐廳出餐實際樣式**。
- 「品牌商品實拍」則拍攝真實商品；「店景」明確標明是否非指定分店。
- 每張照片卡片內都有攝影者、Creative Commons / CC0 授權資訊及 Wikimedia Commons 原始頁面連結；使用外站照片須連網。
- 無法匹配相符、授權可查的照片就顯示中性底色提示，絕不強行配錯圖；圖片載入失敗亦轉成文字備援。
- 照片從 `Special:FilePath` 請求 800px 宽版本，lazy-load，避免將巨大圖檔內嵌 HTML。

## 使用的 Wikimedia Commons 圖片清單
| 圖片 | 攝影者 | 授權 |
|---|---|---|
| Japanese egg sandwich in a sandwich case.jpg | Quercus acuta | CC BY-SA 4.0 |
| Seafood bowl.jpg | Douglas P. Perkins | CC0 1.0 |
| 2009, sushi in Otaru -81219.jpeg | Syced | CC0 1.0 |
| A soup curry dish in Sapporo - Flickr - odako1.jpg | Koichi Oda | CC BY-SA 2.0 |
| Sapporo miso ramen.jpg | Schellack | CC BY 3.0 |
| Genghis Khan dish.jpg | Douglas P. Perkins | CC0 1.0 |
| Matsuo Jingisukan.jpg | Totti | CC BY-SA 4.0 |
| UniIkuraDon.jpg | Douglas P. Perkins | CC BY 3.0 |
| Shiroi koibito.jpg | Fk | CC BY-SA 3.0 |
| Marusei butter sand of Rokkatei (1).jpg | 毒島みるく | CC0 1.0 |
| Royce chocolate.jpg | Antonio733 | CC BY-SA 4.0 |
| KITAKARO Sapporo Honkan interior 201904.jpg | MIKI Yoshihito | CC BY 2.0 |
| KINOTOYA, Sapporo, Hokkaido, Japan, 札幌, 北海道, 日本, 焼きたてチーズタルト, きのとや, 新千歳空港店, さっぽろし, ほっかいどう, にっぽん, にほん (16720983681).jpg | bryan... | CC BY-SA 2.0 |
| LeTAO-1.jpg | Evelyn-rose | CC0 1.0 |
| Otaru Music Box Museum interior.jpg | Liandrei | CC BY-SA 4.0 |
| IMG small apple pie.jpg | LostplanetKD73 | CC0 1.0 |

所有檔案原始頁：https://commons.wikimedia.org/wiki/Special:MediaSearch 。

## 營業時間
- 餐廳沿用既有的約略／參考時段。未全面逐店即時核實的時段，不標示為已確認。
- 已核對官方來源的名產店家（顯示於卡片的「核對 ↗」）包含 ISHIYA 札幌大通、六花亭札幌本店、北菓樓札幌本館、ROYCE 大丸札幌、KINOTOYA BAKE、LeTAO、小樽かま栄、小樽音樂盒堂、美瑛選果新千歲機場店、定山溪 J・glacée 等。
- 目前資訊適用 2026 年的行程規劃參考；**不是 2027 年 6 月已確認營業時間或即時開店狀態**。使用前必須以店家官方資訊再核對。
- 部分未能核實的店鋪顯示「待核實」，尤其是郊外季節性店鋪。

## 相容性
- 保留 Day 1–7、A/B/C、0/1/2 天租車、選店後地圖聚焦及「探索更多」邏輯。
- PWA 快取版本以 `sw.js` 的 `CACHE_NAME` 為準（現 v44）。本地照片在照片快取裡背景補齊；外部 Wikimedia Commons 影像不預快取、僅瀏覽器 HTTP 快取。2026-11 起本地照片一律 WebP；6 張截斷 PNG 見 `docs/archive/corrupted-photos-20261107/README.md`。
