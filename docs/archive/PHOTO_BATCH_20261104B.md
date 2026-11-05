# 2026-11-04 第三批餐廳實拍照片（12 張）

使用者逐張提供，全部轉為 WebP（最寬 1600px、quality 82），檔名使用店家 slug，存放於 `assets/photos/restaurants/`。

| 店家 | 行程 ID | 檔案 |
|---|---|---|
| 北海道 BBQ NOBOJIN | `noboNobojin` | `hokkaidoBbqNobojin.webp` |
| 漁師の店 中村屋 | `shakotanNakamuraya` | `nakamurayaShakotan.webp` |
| ふじ鮨 積丹本店 | `shakotanFuji` | `fujizushiShakotan.webp` |
| 食堂 鱗晃 | `shakotanRinkou` | `rinkouShokudo.webp` |
| うに膳屋 積丹本店 | `shakotanSugino` | `suginoUnizenShakotan.webp` |
| 食堂いち | `jozanIchi` | `shokudoIchiJozan.webp` |
| 食堂こんの | `jozanKonno` | `shokudoKonnoJozan.webp` |
| シウマイハヤマデタベルモノ | `jozanShiumai` | `shiumaiHayama.webp` |
| 喫茶＆軽食フランセ | `jozanFranse` | `franseJozan.webp` |
| 八剣山キッチン＆マルシェ | `jozanHakken` | `hakkenzanKitchenMarche.webp` |
| 北登のおうどん | `noboKitaUdon` | `kitaNoboruUdon.webp` |
| 閻魔軒 | `noboEnmaken` | `enmakenNoboribetsu.webp` |

## 同步更新

- `js/food-guide.js`：`USER_RESTAURANT_PHOTOS` 加入以上 12 個映射，全部一對一，沒有跨店共用。
- `sw.js`：預先快取清單加入 12 張新圖，cache 升到 `sapporo-travel-shell-v32`，之後再加入 メメール 照片升至 `v33`。
- `tests/hokkaido-photo-batch2-20261104.test.cjs`：檢查映射、檔名 slug、檔案大小、預先快取與 cache 版本。

## 注意

照片由使用者提供，不代表必然擁有著作權；公開轉載前應確認授權。營業時間與 Tabelog 連結未因本批照片變更。

## 追加：メメール・湖畔甜點

| 店家 | 行程 ID | 檔案 |
|---|---|---|
| メメール・湖畔甜點 | `gx-shik` | `memereLakesideSweets.webp` |

此為支笏湖地方甜點選物，沒有 Tabelog 店家頁；卡片只保留市場資料來源，不強行加入 Tabelog 連結。

## 追加：名產選物三張

| 店家 | 行程 ID | 檔案 | 原始格式 |
|---|---|---|---|
| かま栄 工場直売店 | `s7` | `kamaeiFactoryStore.webp` | JPEG 1000×667 |
| 富田農場周邊選物 | `gx-furano` | `farmTomitaSouvenirs.webp` | JPEG 800×500 |
| ふる川果日 J・glacée | `x-joz`, `gx-joz` | `furukawaFruitGlacee.webp` | PNG 400×400（轉 WebP） |

- `x-joz`（餐飲）與 `gx-joz`（名產選物）是同一間店，允許共用一張照片。
- `sw.js` 預先快取已補上這三張圖，cache 升至 `sapporo-travel-shell-v36`。
- `tests/gifts-daily-coverage-20261104.test.cjs` 檢查每日名產至少三家、營業時間不得為占位文字、以及上述照片均已預先快取。
