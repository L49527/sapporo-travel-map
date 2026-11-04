# 使用者提供的餐廳照片

最後更新：2026-11-04

目前 `USER_RESTAURANT_PHOTOS` 共有 **63 個行程識別碼**，對應 **57 個圖片檔**。同一間店在午餐與晚餐、或本店與同店選物區重複出現時，允許共用同一張照片。

## 檔名規則

- 檔名一律使用可讀的店家英文／羅馬字 slug，例如 `darumaHonten.webp`、`northernTerraceDiner.webp`。
- 不再使用 `b4`、`d4`、`x-shik` 這類行程 ID 當檔名；行程 ID 只保留在 `USER_RESTAURANT_PHOTOS` 的鍵。
- 既有 PNG 維持 PNG，不重新壓縮；新加入的 JPEG 轉為 WebP（最寬 1600px、quality 82）。
- 全部檔案位於 `assets/photos/restaurants/`，並列於 `sw.js` 的預先快取清單（cache `v34`）。

## 對照清單

### 札幌市區

| 檔案 | 行程 ID | 店家 |
|---|---|---|
| `sandriaHonten.webp` | `b1` | サンドイッチ工房 サンドリア 本店 |
| `donburiChayaNijo.png` | `b2`, `どんぶり茶屋` | どんぶり茶屋 さっぽろ二条市場店 |
| `cafeYoshimiAkarenga.webp` | `b3` | CAFE YOSHIMI 赤れんがテラス |
| `northernTerraceDiner.webp` | `b4` | Northern Terrace Diner（札幌グランドホテル東館 1F） |
| `garakuSapporoHonten.webp` | `l1`, `d6` | Soup Curry GARAKU 札幌本店 |
| `nemuroHanamaruJrTower.webp` | `l2` | 根室花まる JRタワーステラプレイス店 |
| `shingenMinami6.webp` | `l3` | らーめん 信玄 南6条店 |
| `matsuiJingisukanOdoriMinami1.webp` | `l7`, `d7` | 松尾ジンギスカン 札幌大通南1条店 |
| `darumaHonten.webp` | `d1` | 成吉思汗 だるま 本店 |
| `hachikyoHonten.webp` | `d2` | 海味 はちきょう 本店 |
| `sapporoBeerGarden.webp` | `d3` | サッポロビール園 |
| `keyakiSusukinoHonten.webp` | `d4` | けやき すすきの本店 |
| `kaniHonkeSapporoEkimae.webp` | `d5` | 札幌かに本家 札幌駅前本店 |
| `suagePlus.webp` | `citySuage` | Soup Curry Suage＋ |
| `ichigenSohonten.webp` | `cityIchigen` | えびそば一幻 総本店 |
| `okushibaSoseiji.webp` | `cityOkushiba` | 奥芝商店 駅前創成寺 |

### 小樽・余市・積丹

| 檔案 | 行程 ID | 店家 |
|---|---|---|
| `otaruMasazushiHonten.webp` | `l4` | おたる政寿司 本店 |
| `narutoHonten.png` | `l5` | 若鶏時代 なると 本店（保留圖片可見的 `booji.com／小布少爺` 浮水印） |
| `otaruPoseidonSakaimachi.webp` | `otaruPoseidon` | 海鮮丼屋 小樽ポセイ丼 堺町總本店 |
| `warakuOtaru.webp` | `otaruWaraku` | 回転寿し 和楽 小樽店 |
| `isezushiOtaruEkinaka.png` | `otaruIse` | 伊勢鮨 小樽駅中店 |
| `takinamiShokudo.png` | `otaruSankaku` | 北のどんぶり屋 滝波食堂 |
| `kakizakiSeafoodKobo.webp` | `x-yoi`, `gx-yoi` | 柿崎商店 海鮮工房（同店選物區共用） |
| `misakiShakotan.webp` | `x-shako` | お食事処 みさき |
| `nakamurayaShakotan.webp` | `shakotanNakamuraya` | 漁師の店 中村屋 |
| `fujizushiShakotan.webp` | `shakotanFuji` | ふじ鮨 積丹本店 |
| `rinkouShokudo.webp` | `shakotanRinkou` | 食堂 鱗晃 |
| `suginoUnizenShakotan.webp` | `shakotanSugino` | うに膳屋 積丹本店 |
| `kamaeiFactoryStore.webp` | `s7` | かま栄 工場直売店（名產選物） |

### 富良野・美瑛

| 檔案 | 行程 ID | 店家 |
|---|---|---|
| `kumagera.png` | `l6` | くまげら |
| `asperges.png` | `x-biei` | RESTAURANT ASPERGES |
| `tomitaMelonHouse.png` | `x-tomita` | とみたメロンハウス |
| `yuigaDoxon.png` | `furanoYuiga` | 唯我獨尊 Yuiga Doxon |
| `kodamaya.png` | `furanoKodamaya` | そば処 小玉家 本店 |
| `naturalDiningFurano.png` | `furanoNatural` | Natural Dining 富良野 |
| `fukuzushi.png` | `furanoFukuzushi` | Fukuzushi 福壽司 |
| `farmTomitaSouvenirs.webp` | `gx-furano` | 富田農場周邊選物（名產選物） |

### 定山溪

| 檔案 | 行程 ID | 店家 |
|---|---|---|
| `shokudoIchiJozan.webp` | `jozanIchi` | 食堂いち |
| `shokudoKonnoJozan.webp` | `jozanKonno` | 食堂こんの |
| `shiumaiHayama.webp` | `jozanShiumai` | シウマイハヤマデタベルモノ |
| `franseJozan.webp` | `jozanFranse` | 喫茶＆軽食フランセ |
| `hakkenzanKitchenMarche.webp` | `jozanHakken` | 八剣山キッチン＆マルシェ |
| `furukawaFruitGlacee.webp` | `x-joz`, `gx-joz` | ふる川果日 J・glacée（同店餐飲與選物共用） |

### 支笏湖・登別

| 檔案 | 行程 ID | 店家 |
|---|---|---|
| `lakesideKitchenTonton.webp` | `x-shik` | 支笏湖 レークサイドキッチン トントン |
| `noboribetsuOnsenIchiba.webp` | `x-nobo`, `gx-nobo` | 登別温泉市場（同店選物區共用） |
| `ajinoDaioNoboribetsu.webp` | `noboDaio` | 味之大王 登別溫泉店 |
| `memereLakesideSweets.webp` | `gx-shik` | メメール・湖畔甜點（地方選物；無 Tabelog 頁） |
| `chibaNoboribetsu.webp` | `noboChiba` | ラーメン居酒屋 ち葉 |
| `hokkaidoBbqNobojin.webp` | `noboNobojin` | 北海道 BBQ NOBOJIN |
| `kitaNoboruUdon.webp` | `noboKitaUdon` | 北登のおうどん |
| `enmakenNoboribetsu.webp` | `noboEnmaken` | 閻魔軒 |

### 新千歲機場

| 檔案 | 行程 ID | 店家 |
|---|---|---|
| `ichigenNewChitose.webp` | `airportIchigen` | えびそば一幻 新千歳空港店 |
| `shirakabaSansoNewChitose.webp` | `airportShirakaba` | 白樺山荘 新千歳空港店 |
| `kantaroNewChitose.webp` | `airportKantaro` | 函太郎 新千歳空港店 |
| `otaruNewSankoNewChitose.webp` | `airportNewSanko` | 小樽ニュー三幸 新千歳空港店 |
| `hanabusaNewChitose.webp` | `airportHanabusa` | 北国の寿司 花ぶさ 新千歳空港店 |
| `keyakiNewChitose.webp` | `airportKeyaki` | けやき 新千歳空港店 |

## 部署狀態

- `js/food-guide.js` 的 `USER_RESTAURANT_PHOTOS` 已全部指向新檔名；`assets/photos/restaurants/` 內的實體檔名與清單一致。
- 二進位圖片需要一起上傳到 GitHub 對應目錄，不能只上傳 JavaScript。圖片未部署前卡片會顯示備援文字，不會假稱圖片已上線。
- `sw.js` cache 已升到 `sapporo-travel-shell-v36`，預先快取全部 57 張餐廳／選物照片。
- えびそば一幻「総本店」與「新千歳空港店」是不同分店，使用不同照片；不可互換。
- 同店共用照片僅限：`b2`／`どんぶり茶屋`、`l1`／`d6`、`l7`／`d7`、`x-yoi`／`gx-yoi`、`x-nobo`／`gx-nobo`、`x-joz`／`gx-joz`。

## 圖片使用權

使用者提供的照片不等於其著作權一定歸使用者。若原檔出自食べログ、Instagram、網誌或其他攝影者，發布到公開 GitHub Pages 前，應確認具備再利用／轉載的授權。本站僅標示「圖片由使用者提供」，不宣稱是官方攝影或攝影師授權。
