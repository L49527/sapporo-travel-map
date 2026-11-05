# 食べログ（Tabelog）全店連結稽核｜2026-11-04

## 範圍與方法

- 對象：`js/food-guide.js` 與 `js/dining-catalog.js` 合併後的全部 **56 筆**餐廳資料（56 個 ID；同一店午晚餐共用 ID 時只計一次）。
- 方法：以瀏覽器逐筆開啟 `TABELOG_DIRECT` 的直達網址，確認 HTTP 200，並比對頁面 `<title>`／店名與卡片店名、分店是否一致。
- 結果：**56／56 筆都有直達頁，且頁面店名與資料相符**；沒有再使用食べログ關鍵字搜尋頁代替店家頁。
- 稽核後新增：`cityOkushiba`（奥芝商店 駅前創成寺）補上直達頁 `https://tabelog.com/hokkaido/A0101/A010101/1041930/`。

## 需要留意但已確認正確的項目

| ID | 店家 | 狀況 |
|---|---|---|
| `b4` | Northern Terrace Diner | 食べログ頁顯示「ノーザンテラスダイナー（【旧店名】ノード43°）」，地址為札幌グランドホテル **東館 1F**；官網早餐 06:30–10:00。已同步修正卡片地址、營業時間與來源。 |
| `x-shik` | 支笏湖 レークサイドキッチン トントン | 食べログ頁面帶有「現在休業中」標示，但店家官網仍有營業時間。保留正確直達頁，營業時間改以官網為準，並在卡片註明出發前電話確認。 |
| `l1` / `d6` | Soup Curry GARAKU 札幌本店 | 同一店午晚餐共用，網址為搬遷後新址頁面。 |
| `l7` / `d7` | 松尾ジンギスカン 大通南1条店 | 同一店午晚餐共用同一直達頁。 |

## 稽核清單（56 筆）

### 札幌市區

| ID | 店家 | 直達網址 |
|---|---|---|
| b1 | Sandria 本店 | https://tabelog.com/hokkaido/A0101/A010104/1001503/ |
| b2 | どんぶり茶屋 二條市場店 | https://tabelog.com/hokkaido/A0101/A010103/1000272/ |
| b3 | CAFE YOSHIMI 赤れんがテラス | https://tabelog.com/hokkaido/A0101/A010102/1046356/ |
| b4 | Northern Terrace Diner | https://tabelog.com/hokkaido/A0101/A010102/1042576/ |
| l1 / d6 | Soup Curry GARAKU 札幌本店 | https://tabelog.com/hokkaido/A0101/A010102/1082918/ |
| l2 | 根室花まる JR TOWER 店 | https://tabelog.com/hokkaido/A0101/A010101/1001102/ |
| l3 | らーめん 信玄 南6条店 | https://tabelog.com/hokkaido/A0101/A010103/1002793/ |
| l7 / d7 | 松尾ジンギスカン 大通南1条店 | https://tabelog.com/hokkaido/A0101/A010102/1002898/ |
| d1 | 成吉思汗 だるま 本店 | https://tabelog.com/hokkaido/A0101/A010103/1000007/ |
| d2 | 海味はちきょう 本店 | https://tabelog.com/hokkaido/A0101/A010103/1003784/ |
| d3 | サッポロビール園 | https://tabelog.com/hokkaido/A0101/A010202/1000159/ |
| d4 | けやき すすきの本店 | https://tabelog.com/hokkaido/A0101/A010103/1000150/ |
| d5 | 札幌かに本家 札幌駅前本店 | https://tabelog.com/hokkaido/A0101/A010101/1000299/ |
| citySuage | Soup Curry Suage＋ | https://tabelog.com/hokkaido/A0101/A010103/1006004/ |
| cityIchigen | えびそば一幻 總本店 | https://tabelog.com/hokkaido/A0101/A010103/1025072/ |
| cityOkushiba | 奥芝商店 駅前創成寺 | https://tabelog.com/hokkaido/A0101/A010101/1041930/ |

### 小樽・余市・積丹

| ID | 店家 | 直達網址 |
|---|---|---|
| l4 | おたる政寿司 本店 | https://tabelog.com/hokkaido/A0106/A010601/1000209/ |
| l5 | 若鶏時代 なると 本店 | https://tabelog.com/hokkaido/A0106/A010601/1000906/ |
| otaruPoseidon | 海鮮丼屋 小樽ポセイ丼 堺町總本店 | https://tabelog.com/hokkaido/A0106/A010601/1042928/ |
| otaruWaraku | 回転寿し 和楽 小樽店 | https://tabelog.com/hokkaido/A0106/A010601/1001257/ |
| otaruIse | 伊勢鮨 小樽駅中店 | https://tabelog.com/hokkaido/A0106/A010601/1045303/ |
| otaruSankaku | 北のどんぶり屋 滝波食堂 | https://tabelog.com/hokkaido/A0106/A010601/1027887/ |
| x-yoi | 柿崎商店 海鮮工房 | https://tabelog.com/hokkaido/A0106/A010602/1000224/ |
| x-shako | お食事処 みさき | https://tabelog.com/hokkaido/A0106/A010602/1003109/ |
| shakotanNakamuraya | お食事処 中村屋 | https://tabelog.com/hokkaido/A0106/A010602/1005212/ |
| shakotanFuji | ふじ鮨 積丹本店 | https://tabelog.com/hokkaido/A0106/A010602/1000239/ |
| shakotanRinkou | 食堂 鱗晃 | https://tabelog.com/hokkaido/A0106/A010602/1001759/ |
| shakotanSugino | すぎ乃本店 うに膳屋（積丹店） | https://tabelog.com/hokkaido/A0106/A010602/1024105/ |

### 富良野・美瑛

| ID | 店家 | 直達網址 |
|---|---|---|
| l6 | くまげら | https://tabelog.com/hokkaido/A0104/A010403/1000298/ |
| x-biei | RESTAURANT ASPERGES | https://tabelog.com/hokkaido/A0104/A010403/1005336/ |
| x-tomita | とみたメロンハウス | https://tabelog.com/hokkaido/A0104/A010403/1024348/ |
| furanoYuiga | 唯我獨尊 Yuiga Doxon | https://tabelog.com/hokkaido/A0104/A010403/1000063/ |
| furanoKodamaya | そば処 小玉家（Kodamaya） | https://tabelog.com/hokkaido/A0104/A010403/1010159/ |
| furanoNatural | Natural Dining 富良野 | https://tabelog.com/hokkaido/A0104/A010403/1061688/ |
| furanoFukuzushi | Fukuzushi 福壽司 | https://tabelog.com/hokkaido/A0104/A010403/1007198/ |

### 支笏湖・登別

| ID | 店家 | 直達網址 |
|---|---|---|
| x-shik | 支笏湖 レークサイドキッチン トントン | https://tabelog.com/hokkaido/A0107/A010701/1031081/ |
| x-nobo | 登別温泉市場 | https://tabelog.com/hokkaido/A0108/A010803/1002147/ |
| noboDaio | 味之大王 登別溫泉店 | https://tabelog.com/hokkaido/A0108/A010803/1006770/ |
| noboNobojin | 北海道BBQ NOBOJIN | https://tabelog.com/hokkaido/A0108/A010803/1059982/ |
| noboChiba | ラーメン居酒屋 ち葉 | https://tabelog.com/hokkaido/A0108/A010803/1023670/ |
| noboKitaUdon | 北登のおうどん | https://tabelog.com/hokkaido/A0108/A010803/1081478/ |
| noboEnmaken | 閻魔軒 | https://tabelog.com/hokkaido/A0108/A010803/1074628/ |

### 定山溪

| ID | 店家 | 直達網址 |
|---|---|---|
| x-joz | Furukawa Fruit J・glacée | https://tabelog.com/hokkaido/A0101/A010305/1050843/ |
| jozanIchi | 食堂いち | https://tabelog.com/hokkaido/A0101/A010305/1072376/ |
| jozanKonno | 食堂こんの | https://tabelog.com/hokkaido/A0101/A010305/1023645/ |
| jozanShiumai | シウマイハヤマデタベルモノ | https://tabelog.com/hokkaido/A0101/A010305/1073810/ |
| jozanFranse | 喫茶＆軽食フランセ | https://tabelog.com/hokkaido/A0101/A010305/1023646/ |
| jozanHakken | 八剣山キッチン＆マルシェ | https://tabelog.com/hokkaido/A0101/A010305/1064705/ |

### 新千歲機場

| ID | 店家 | 直達網址 |
|---|---|---|
| airportIchigen | えびそば一幻 新千歲機場店 | https://tabelog.com/hokkaido/A0107/A010701/1034338/ |
| airportShirakaba | 白樺山荘 新千歲機場店 | https://tabelog.com/hokkaido/A0107/A010701/1007892/ |
| airportKantaro | 函太郎 新千歲機場店 | https://tabelog.com/hokkaido/A0107/A010701/1049433/ |
| airportNewSanko | 小樽ニュー三幸 新千歲機場店 | https://tabelog.com/hokkaido/A0107/A010701/1069364/ |
| airportHanabusa | 北国の寿司 花ぶさ 新千歲機場店 | https://tabelog.com/hokkaido/A0107/A010701/1000819/ |
| airportKeyaki | けやき 新千歲機場店 | https://tabelog.com/hokkaido/A0107/A010701/1042872/ |

## 自動檢查

```bash
node --test tests/tabelog-links.test.cjs
```

`tests/tabelog-links.test.cjs` 會檢查合併後每一筆餐廳資料都有 `TABELOG_DIRECT` 直達網址，並確認 `cityOkushiba` 使用上表網址。

## 限制

食べログ頁面可能因分店改名、搬遷、臨時休業、地區或反爬措施而變動。本次結果為 **2026-11-04** 的查詢狀態；2027 出發前仍建議點一次卡片上的「核對 ↗」確認。
