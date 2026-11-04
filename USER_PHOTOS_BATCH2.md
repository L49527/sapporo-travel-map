# 2026-11-04 使用者提供的第二批餐廳實拍照片

此批採用使用者在對話中提供的照片，經 WebP 壓縮後作為網站的**本機圖片資產**，不依賴 Tabelog 圖片 URL。

| 店家（網站 ID） | GitHub 檔案 |
|---|---|
| Soup Curry Suage＋（citySuage） | assets/photos/restaurants/citySuage.webp |
| 北海道名物らー麺 えびそば一幻 総本店（cityIchigen） | assets/photos/restaurants/cityIchigen.webp |
| 奥芝商店 駅前創成寺（cityOkushiba） | assets/photos/restaurants/cityOkushiba.webp |
| おたる政寿司 本店（l4） | assets/photos/restaurants/l4.webp |

**重要：** えびそば一幻「総本店」與「新千歳空港店」是不同分店，各自使用不同照片；絕不可將 `cityIchigen.webp` 用於 `airportIchigen`。

## 修正食べログ店家頁

- 海鮮丼屋 小樽ポセイ丼 堺町総本店（otaruPoseidon）
- 確認網址：https://tabelog.com/hokkaido/A0106/A010601/1042928/
- 官方：https://www.otaru-poseidon.jp/
- 地址：北海道小樽市堺町4-9
- 官方參考營業時間：11:00–18:00（L.O.17:30）

**待處理圖片：** 使用者同一輪提供的「柿崎商店 海鮮工房」與「小樽ポセイ丼」圖片，未在本次容器的可讀附件中找到，因此此批不建立不存在的圖片引用，避免破圖。待影像可取得時應使用 `x-yoi.webp`（同店 `gx-yoi` 可共用）與 `otaruPoseidon.webp`。其 Tabelog 連結修正已獨立完成。

## 注意

這些是由使用者提供的照片，不等同於其必然擁有著作權；公開使用前仍應確認從網站、部落格或社群引用的照片已獲再利用授權。PWA 預快取新增 4 張本機圖片，cache v21。
