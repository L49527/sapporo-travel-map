# 使用者提供的餐廳照片（2026-11-04）

本次依對話逐張建立 **17 張照片** 的餐廳 ID 對照，涵蓋 19 個行程資料識別碼。
同一間店在午餐與晚餐重複出現時，允許共用同一張照片。

## 來源及圖片清單

| 檔案 | 對應店家 |
|---|---|
| d4.webp | けやき すすきの本店 |
| l7.webp | 松尾ジンギスカン 札幌大通南1条店；同一張供 d7 午晚餐顯示 |
| d2.webp | 海味 はちきょう 本店 |
| d5.webp | 札幌かに本家 札幌駅前本店 |
| d3.webp | サッポロビール園 |
| l1.webp | スープカレー GARAKU 札幌本店；同一張供 d6 午晚餐顯示 |
| l2.webp | 根室花まる JRタワーステラプレイス店 |
| l3.webp | らーめん 信玄 南6条店 |
| d1.webp | 成吉思汗 だるま 本店 |
| airportIchigen.webp | えびそば一幻 新千歳空港店 |
| airportShirakaba.webp | 白樺山荘 新千歳空港店 |
| airportKantaro.webp | 函太郎 新千歳空港店 |
| airportNewSanko.webp | 小樽ニュー三幸 新千歳空港店 |
| airportHanabusa.webp | 北国の寿司 花ぶさ 新千歳空港店 |
| airportKeyaki.webp | けやき 新千歳空港店 |
| b3.webp | CAFE YOSHIMI 赤れんがテラス |
| x-shako.webp | お食事処 みさき |

## 部署狀態

- `js/food-guide.js` 已支援上述本機圖片位置：`./assets/photos/restaurants/<id>.webp`。
- 二進位 WebP 需要另外**上傳至 GitHub 對應目錄**；不能只有 JavaScript 引用。圖片未部署前會出現備援文字，而不會假稱圖片已成功上線。
- 已將照片整理為 `sapporo-restaurant-photos-17.zip`，包含 `assets/photos/restaurants/` 的全部 17 張 WebP。需要把 ZIP **解壓後**的 `assets/` 資料夾拖入 GitHub → Add file → Upload files，不要直接上傳 ZIP 檔。
- 保留原 Day 1–7、A/B/C、5+ 午晚餐選項、營業時間及站內 Leaflet 地圖。
- 新增 `x-shako` 的食べログ直達頁：https://tabelog.com/hokkaido/A0106/A010602/1003109/，官方營業時間 09:00–15:00，季節性營業：https://osyokujidokoromisaki.com/about。
- PWA shell v20。

## 圖片使用權

使用者提供的照片不等於其著作權一定歸使用者。若原檔出自食べログ、Instagram、網誌或其他攝影者，發布到公開 GitHub Pages 前，應確認具備再利用／轉載的授權。本站僅標示「圖片由使用者提供」，不宣稱是官方攝影或攝影師授權。
