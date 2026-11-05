# 七日時間軸：午餐與晚餐推薦數量規格

## 不可退讓的規格
- 每個日期 **午餐至少 5 個、晚餐至少 5 個**不同餐廳候選。第 6 天需分別滿足 A／B／C 三方案。
- 首頁**預設只顯示**早餐最多 2、午餐最多 3、晚餐最多 3；多出的項目按各餐別「探索更多」展開。
- 地方名產仍預設最多 2 個，不混入餐飲候選。
- 切換日期／第六天 A/B/C／租車 0–2 天時重置展開狀態並同步更新地圖標記。
- 餐廳項目是「候選備選」，不是時間表內全部都要吃，也不代表已訂位。

## 適用區域與限制
- Day 1：下午抵達，午餐僅早班機抵達時可用；勿誤認一定吃得到。
- Day 2：札幌市區。
- Day 3：小樽／余市午餐，晚餐以回札幌之後為主。
- Day 4：富良野／美瑛午餐；不租車時參加觀光巴士可能包含午餐，資料僅供變更行程的候選。晚上回札幌用餐。
- Day 5：札幌市區祭典日。
- Day 6 A：登別午餐；若租第二天車增加支笏湖候選。B：積丹午餐；C：定山溪午餐。晚餐回札幌後備選。季節營業、旅行團停靠與分店時間需再確認。
- Day 7：新千歲機場**安檢前**餐廳。晚餐僅適用航班晚且能預留充分報到、行李、免稅海關與安檢時間的情況。

## 實作檔案
- `js/dining-catalog.js`：30 間擴充餐飲資料與各日 lunch/dinner roster（資料來源為官方地方旅遊與店家頁，2026 年 11 月參考）。
- `js/food-guide.js`：同日期/方案擷取餐別資料、以三個獨立分組呈現、點擊地圖標記與圖片資訊。
- `index.html`：新增早餐、午餐、晚餐三組渲染容器與獨立「探索更多」。
- `css/site.css`：餐別小標和卡片版面。
- `sw.js`：v14 快取新增資料檔。

## 核對來源
- 札幌：https://www.sapporo.travel/en/gourmet/feature/soupcarry/
- 小樽：https://otaru.gr.jp/eat
- 富良野：https://www.furanotourism.com/en/spot/spot_S.php?kid1=3&kid2=12&kid3=47&page=2
- 登別：https://noboribetsu-spa.jp/tw/spot/spot0213/
- 積丹：https://www.kanko-shakotan.jp/food/
- 定山溪：https://jozankei.jp/store/
- 新千歲機場：https://www.hokkaido-airports.com/ko/new-chitose/spend/shop/eat/

營業時間是出發前的參考資料，不能視為 2027 年 6 月已確認。所有候選皆需考量交通、步行負擔與當日營業狀況。
