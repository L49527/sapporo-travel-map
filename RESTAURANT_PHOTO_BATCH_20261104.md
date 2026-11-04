# 2026-11-04 Sandria／二條市場／柿崎商店／小樽ポセイ丼更新

依使用者逐張提供的餐廳照片，加入三個獨立 WebP 圖片檔，並依據餐廳 ID 指派。

| 名稱 | ID | 檔案 | 備註 |
|---|---|---|---|
| サンドイッチ工房 サンドリア 本店 | `b1` | `b1.webp` | 使用者提供實拍 |
| どんぶり茶屋 さっぽろ二条市場店 | `b2` | 尚無可匯入原圖 | 已修正 Tabelog 及營業時間；絕不套其他店照片 |
| 柿崎商店 海鮮工房 | `x-yoi` | `x-yoi.webp` | 同店選物 `gx-yoi` 共用 |
| 小樽ポセイ丼 堺町総本店 | `otaruPoseidon` | `otaruPoseidon.webp` | 使用者提供實拍 |

### 食べログ分店頁

- サンドリア 本店：https://tabelog.com/hokkaido/A0101/A010104/1001503/
- どんぶり茶屋 二条市場店：https://tabelog.com/hokkaido/A0101/A010103/1000272/
- 柿崎商店 海鮮工房：https://tabelog.com/hokkaido/A0106/A010602/1000224/
- 小樽ポセイ丼 堺町総本店：https://tabelog.com/hokkaido/A0106/A010601/1042928/

營業時間為 2026 年查詢時的參考資訊，2027 出發前須再核對。

圖片放在 `assets/photos/restaurants/`，`js/food-guide.js` 的 `USER_RESTAURANT_PHOTOS` 負責綁定，`sw.js` v23 預先快取新增圖片。

使用者貼圖不必然代表擁有原照片著作權；公開轉載時須確認圖片有適當使用權。
