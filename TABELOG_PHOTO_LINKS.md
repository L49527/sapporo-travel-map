# 食べログ（Tabelog）餐廳照片入口

此變更為 **55 筆不同餐廳資料**加入食べログ來源入口，不會將食べログ顧客上傳的照片下載、截圖、裁切或重新託管於 GitHub Pages。

## 顯示方式

- 確認到食べログ店家頁的餐廳，使用已核對的店家網址；目前 15 筆餐廳項目（同一間店午餐與晚餐可能共用網址）。
- 尚未核對到確切食べログ ID 的店家，使用食べログ站內關鍵字搜尋網址，帶入店名及地區。此操作是「搜尋入口」，**不是假裝已核對的店家頁**。
- 每個餐廳卡片的編輯式照片入口優先指向食べログ；卡片下方同時有食べログ及 Google Maps 的實際照片入口。
- 「在地圖查看」仍只聚焦**本站內**的當日地圖，外站照片另開分頁。
- 既有合法授權、且確實對應該餐廳的實拍圖可以繼續使用；未核實的餐廳不以其他店家的料理照充數。

## 已核對店家與直達網址

| 代碼 | 店家 | 連結 |
|---|---|---|
| d1 | 成吉思汗 だるま 本店 | https://tabelog.com/hokkaido/A0101/A010103/1000007/ |
| d2 | 海味 はちきょう 本店 | https://tabelog.com/hokkaido/A0101/A010103/1003784/ |
| l1, d6 | GARAKU 札幌本店（2025 年搬遷新址） | https://tabelog.com/hokkaido/A0101/A010102/1082918/ |
| l2 | 根室花まる JR TOWER | https://tabelog.com/hokkaido/A0101/A010101/1001102/ |
| l3 | らーめん 信玄 南6条店 | https://tabelog.com/hokkaido/A0101/A010103/1002793/ |
| l4 | おたる政寿司 本店 | https://tabelog.com/hokkaido/A0106/A010601/1000209/ |
| l5 | 若鶏時代 なると 本店 | https://tabelog.com/hokkaido/A0106/A010601/1000906/ |
| d4 | けやき すすきの本店 | https://tabelog.com/hokkaido/A0101/A010103/1000150/ |
| l7, d7 | 松尾ジンギスカン 札幌大通南1条店 | https://tabelog.com/hokkaido/A0101/A010102/1002898/ |
| x-yoi | 柿崎商店 海鮮工房 | https://tabelog.com/hokkaido/A0106/A010602/1000224/ |
| x-shik | レークサイドキッチン トントン | https://tabelog.com/hokkaido/A0107/A010701/1031081/ |
| citySuage | Soup Curry Suage+ | https://tabelog.com/hokkaido/A0101/A010103/1006004/ |
| cityIchigen | えびそば一幻 総本店 | https://tabelog.com/hokkaido/A0101/A010103/1025072/ |

## 照片使用授權

食べログ官方使用規約限制未經許可的複製、改作、轉載及公眾傳輸，參見 https://tabelog.com/help/rules/ 。把顧客照片**截圖**後自行放進 GitHub Pages 不會因此自動變成已獲授權。若日後取得攝影者/店家的使用同意，可將特定照片加入 verified restaurant photo registry。

## 檢查

```bash
node --test tests/tabelog-links.test.cjs
```

網站靜態檢查確認所有 55 筆餐廳都有食べログ入口；食べログ搜尋頁、圖片及站外連結仍可能受地區、網路、反爬措施、分店改名影響，無法保證永遠可用。PWA cache v16。
