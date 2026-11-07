
(function(){
'use strict';
const MEALS=[{"id":"b1","meal":"breakfast","name":"Sandria 本店","en":"SANDRIA / SANDWICHES","dish":"北海道雞蛋三明治","area":"札幌","place":"薄野・中島公園","address":"北海道札幌市中央区南8条西9丁目758-14","hours":"24 小時營業（12/31–1/2 休）","day":"6/13・6/16","note":"外帶專門店，適合出發前買好，到中島公園散步野餐。","source":"https://www.s-sandwich.com/","tag":"早起外帶"},{"id":"b2","meal":"breakfast","name":"どんぶり茶屋 二條市場店","en":"DONBURI CHAYA / SEAFOOD","dish":"北海道海鮮丼","area":"札幌","place":"二條市場","address":"北海道札幌市中央区南3条東1丁目7 二条市場","hours":"07:30–16:30（L.O. 16:00）；元旦休，另有臨時休","day":"6/13・6/16","note":"鮭魚卵、海膽與螃蟹等海味，早上先逛市場再吃。","source":"https://donburi.jp/shop/nijo/","tag":"市場早餐"},{"id":"b3","meal":"breakfast","name":"CAFE YOSHIMI 赤れんがテラス","en":"CAFE YOSHIMI / MORNING","dish":"晨間吐司、咖啡與輕食","area":"札幌","place":"札幌車站・赤磚廣場","address":"北海道札幌市中央区北2条西4丁目1 赤れんがテラス B1F","hours":"08:00–22:30（L.O. 21:30）","day":"6/13・6/18","note":"位於札幌站至大通的地下連通動線，適合需要簡單早餐的早晨。","source":"https://mitsui-shopping-park.com/urban/akatera/store/600372.html","tag":"咖啡館"},{"id":"b4","meal":"breakfast","name":"Northern Terrace Diner","en":"SAPPORO GRAND HOTEL / BREAKFAST","dish":"北海道食材自助早餐","area":"札幌","place":"大通・札幌格蘭飯店","address":"北海道札幌市中央区北1条西4丁目 札幌グランドホテル 東館 1F","hours":"早餐 06:30–10:00；午餐 11:30–14:30；晚餐 17:00–21:00（L.O. 20:30）","day":"6/15・6/17","note":"長途郊遊日可先吃飽再出發；早餐為洋食・和食自助餐，非住客能否用餐與費用出發前再確認。","source":"https://grand1934.com/restaurant/northern-terrace-diner/","tag":"飯店早餐"},{"id":"l1","meal":"lunch","name":"Soup Curry GARAKU 札幌本店","en":"GARAKU / SOUP CURRY","dish":"香料湯咖哩與北海道蔬菜","area":"札幌","place":"大通・創成川東","address":"北海道札幌市中央区南3条東2丁目6-1 プレサント南3東2 B1F","hours":"11:30–15:30（L.O. 15:00）；17:00–21:00（L.O. 20:30）；不定休","day":"6/13・6/16","note":"高人氣湯咖哩名店，熱門時段需預留候位時間。","source":"https://visit.sapporo.travel/tw/discover/cuisine/soup-curry/","tag":"札幌代表味"},{"id":"l2","meal":"lunch","name":"根室花まる JR TOWER 店","en":"NEMURO HANAMARU / SUSHI","dish":"北海道迴轉壽司與季節鮮魚","area":"札幌","place":"札幌站・Stellar Place","address":"北海道札幌市中央区北5条西4丁目 JRタワー ステラプレイス 6F","hours":"11:00–22:00（L.O. 21:30）；依 Stellar Place 休館日","day":"6/13・6/16","note":"車站直通、動線方便；容易排隊，適合行程彈性的一天。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"車站直達"},{"id":"l3","meal":"lunch","name":"らーめん 信玄 南6条店","en":"RAMEN SHINGEN / MISO","dish":"濃郁札幌系味噌拉麵","area":"札幌","place":"薄野","address":"北海道札幌市中央区南6条西8丁目8-2","hours":"11:00–翌日 01:00","day":"6/13・6/16","note":"份量足、候位人氣高；趕祭典場次時請準備替代店。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"人氣拉麵"},{"id":"l4","meal":"lunch","name":"おたる政寿司 本店","en":"OTARU MASAZUSHI / SUSHI","dish":"小樽職人握壽司與海鮮","area":"小樽","place":"小樽・壽司屋通","address":"北海道小樽市花園1丁目1-1","hours":"11:00–15:00（L.O. 14:30）；17:00–21:00（L.O. 20:30）；週三休","day":"6/14","note":"較適合安排一頓正式海鮮午餐；需確認預約和預算。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"小樽午餐"},{"id":"l5","meal":"lunch","name":"若鶏時代 なると 本店","en":"NARUTO / HALF FRIED CHICKEN","dish":"若雞半身炸雞","area":"小樽","place":"小樽・稻穗","address":"北海道小樽市稲穂3丁目16-13","hours":"11:00–21:00（L.O. 20:30）；元旦休","day":"6/14","note":"不想再吃海鮮時的經典選擇，可與同行者分食。","source":"https://food-collect.jp/naruto/shops/honten/","tag":"小樽名物"},{"id":"l6","meal":"lunch","name":"くまげら","en":"KUMAGERA / FURANO","dish":"富良野和牛與鄉土料理","area":"富良野","place":"富良野車站周邊","address":"北海道富良野市日の出町3-22","hours":"11:30–21:30；週三休","day":"6/15","note":"長途美瑛自駕日僅列備選；如果為了用餐繞路，優先保留青池景點。","source":"https://www.furano.ne.jp/kumagera/","tag":"郊遊備選"},{"id":"l7","meal":"lunch","name":"松尾ジンギスカン 大通南1条店","en":"MATSUO / JINGISUKAN","dish":"醬漬成吉思汗烤羊肉","area":"札幌","place":"大通・西4丁目","address":"北海道札幌市中央区南1条西4丁目16-1 南舘ビル 1F","hours":"11:00–15:00（L.O. 14:30）；16:30–22:30（L.O. 22:00）；12/31–1/2 休","day":"6/16","note":"中午也能品嚐北海道烤羊肉，地點靠近大通行程。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"當地肉料理"},{"id":"d1","meal":"dinner","name":"成吉思汗 だるま 本店","en":"DARUMA / JINGISUKAN","dish":"傳統炭火烤羊肉","area":"札幌","place":"薄野","address":"北海道札幌市中央区南5条西4丁目","hours":"17:00–翌日 05:00","day":"6/12・6/16","note":"經典吧檯式烤羊肉，熱門時段排隊；座位型式不適合所有旅伴。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"經典名店"},{"id":"d2","meal":"dinner","name":"海味はちきょう 本店","en":"HACHIKYO / SEAFOOD IZAKAYA","dish":"鮭魚卵『つっこ飯』與海鮮","area":"札幌","place":"薄野","address":"北海道札幌市中央区南3条西3丁目 都ビル1F","hours":"週一–六 18:00–24:00（L.O. 23:00）；週日・假日 17:00–23:00（L.O. 22:00）；年末年始休","day":"6/12・6/16","note":"以鮭魚卵飯聞名，適合當作一晚的主題餐；建議事先詢問預約。","source":"https://hachikyo.com/shop/honten","tag":"值得預訂"},{"id":"d3","meal":"dinner","name":"サッポロビール園","en":"SAPPORO BEER GARDEN","dish":"北海道烤羊肉與歷史建築餐廳","area":"札幌","place":"札幌站東北側","address":"北海道札幌市東区北7条東9丁目2-10","hours":"11:30–21:00（L.O. 20:40）；12/31 休","day":"6/16・6/17","note":"適合安排團體晚餐；餐廳館別、座位與用餐時段請先確認。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"特色體驗"},{"id":"d4","meal":"dinner","name":"けやき すすきの本店","en":"KEYAKI / MISO RAMEN","dish":"札幌味噌拉麵","area":"札幌","place":"薄野","address":"北海道札幌市中央区南6条西3丁目 陸ビル1F","hours":"週一–六 10:30–翌日 03:00；週日・假日 10:30–翌日 02:00","day":"6/12・6/13","note":"晚歸時可彈性吃一碗熱拉麵，適合不想花太久吃正餐的夜晚。","source":"https://www.sapporo.travel/en/gourmet/","tag":"夜間友善"},{"id":"d5","meal":"dinner","name":"札幌かに本家 札幌駅前本店","en":"KANI HONKE / CRAB COURSE","dish":"螃蟹會席與鍋物","area":"札幌","place":"札幌站","address":"北海道札幌市中央区北3条西2丁目1-18","hours":"11:30–22:00（L.O. 21:30）；12/31 僅外帶、1/1 11:30–21:00","day":"6/16","note":"想正式吃一次北海道螃蟹料理可列入，預算通常高於一般拉麵。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"正式晚餐"},{"id":"d6","meal":"dinner","name":"Soup Curry GARAKU 札幌本店","en":"GARAKU / EVENING CURRY","dish":"香料雞腿與蔬菜湯咖哩","area":"札幌","place":"大通・創成川東","address":"北海道札幌市中央区南3条東2丁目6-1 プレサント南3東2 B1F","hours":"11:30–15:30（L.O. 15:00）；17:00–21:00（L.O. 20:30）；不定休","day":"6/12・6/13","note":"午餐排不到時，可改列夜間候補；並非第二間分店。","source":"https://visit.sapporo.travel/tw/discover/cuisine/soup-curry/","tag":"午晚皆可"},{"id":"d7","meal":"dinner","name":"松尾ジンギスカン 大通南1条店","en":"MATSUO / GRILLED LAMB","dish":"醬漬羊肉燒烤套餐","area":"札幌","place":"大通・西4丁目","address":"北海道札幌市中央区南1条西4丁目16-1 南舘ビル 1F","hours":"11:00–15:00（L.O. 14:30）；16:30–22:30（L.O. 22:00）；12/31–1/2 休","day":"6/12・6/16","note":"與達摩不同的醬漬烤法，適合想有較完整餐桌用餐體驗的晚餐。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"烤羊肉候補"}];
const BREAKFAST_EXTRA=[{"id":"b5","meal":"breakfast","name":"海鮮食堂 北のグルメ亭","en":"KITANOGURUME / SEAFOOD MARKET","dish":"海鮮丼、烤魚定食與北海道海味","area":"札幌","place":"札幌場外市場","address":"北海道札幌市中央区北11条西22丁目4-1","hours":"07:00–15:00（L.O. 14:30）；年中無休","note":"場外市場的海鮮食堂，離札幌站約車程 10 分鐘；早班出發日可先吃飽再走。","source":"https://www.kitanogurume.co.jp/","tag":"市場早餐"},{"id":"b6","meal":"breakfast","name":"札幌二条市場 大磯","en":"OHISO / NIJO MARKET","dish":"海鮮丼、刺身與烤魚定食","area":"札幌","place":"二條市場","address":"北海道札幌市中央区南3条東2丁目（二条市場内）","hours":"07:30–15:30（L.O. 15:00）；17:00–21:00（L.O. 20:30）；週三休（假日營業）","note":"二條市場角地的海鮮丼老店；週三休，出發前先確認當日營業。","source":"https://ohiso.jp/shop/","tag":"市場早餐"},{"id":"b7","meal":"breakfast","name":"鮨の魚政","en":"UOMASA / MARKET SUSHI","dish":"市場壽司、握壽司與海鮮","area":"札幌","place":"札幌中央卸売市場","address":"北海道札幌市中央区北12条西20丁目1-20 丸果ビル 1F","hours":"06:00–13:00（L.O. 12:30）；週日・假日休；週三不定休（依市場）","note":"中央卸売市場內的早起壽司店，食材售完可能提早結束；週日與假日不營業。","source":"https://tabelog.com/hokkaido/A0101/A010105/1005395/","tag":"市場壽司"},{"id":"b8","meal":"breakfast","name":"JUNE COFFEE 札幌店","en":"JUNE COFFEE / BAKERY","dish":"現烤麵包、咖啡與晨間輕食","area":"札幌","place":"薄野・東本願寺前","address":"北海道札幌市中央区南6条西7丁目1-1 FavLux 札幌すすきの 1F","hours":"07:00–22:00（L.O. 21:30）；早餐 07:00–10:30；年中無休","note":"長崎發源的麵包咖啡店，07:00 開始供應早餐；適合想避開海鮮的早晨。","source":"https://tabelog.com/hokkaido/A0101/A010103/1081326/","tag":"麵包咖啡"},{"id":"b9","meal":"breakfast","name":"スターバックス 札幌ステラプレイス センター1階店","en":"STARBUCKS / STELLAR PLACE","dish":"咖啡、麵包與輕食","area":"札幌","place":"札幌站・Stellar Place","address":"北海道札幌市中央区北5条西2丁目5 JRタワー ステラプレイス センター1階","hours":"07:00–23:00；不定休","note":"札幌站直結，07:00 開門；適合需要快速咖啡與輕食的早晨。","source":"https://store.starbucks.co.jp/detail-451/","tag":"站前咖啡"}];
const BREAKFAST_VENUES=[...MEALS.filter(p=>p.meal==='breakfast'),...BREAKFAST_EXTRA];
const BREAKFAST_ROSTER={
 '0':['b1','b2','b3'],
 '1':['b1','b2','b3'],
 '2':['b4','b5','b6'],
 '3':['b8','b7','b1'],
 '4':['b2','b3','b9'],
 '5':['b4','b7','b5'],
 '5A':['b4','b7','b5'],
 '5B':['b4','b7','b5'],
 '5C':['b4','b7','b5'],
 '6':['b6','b8','b9']
};
const GIFTS=[{"id":"s1","name":"白色戀人","en":"SHIROI KOIBITO / ISHIYA","pick":"薄脆貓舌餅夾白巧克力，是北海道最具代表性的盒裝甜點之一。","area":"札幌","buyAt":"ISHIYA 札幌大通本店","address":"北海道札幌市中央区大通西4丁目6-1 札幌大通西4ビル 1F","carry":"常溫攜帶；適合分送","tip":"6/13 大通公園周邊順買。","source":"https://shop.ishiya.co.jp/collections/shiroi-koibito"},{"id":"s2","name":"MARUSEI 奶油葡萄夾心餅","en":"MARUSEI BUTTER SAND / ROKKATEI","pick":"餅乾夾入白巧克力、奶油與葡萄乾調製的內餡，是六花亭的經典商品。","area":"札幌","buyAt":"六花亭 札幌本店","address":"北海道札幌市中央区北4条西6丁目3-3","carry":"留意保存溫度與期限","tip":"札幌站周邊散步可順買。","source":"https://www.rokkatei.co.jp/"},{"id":"s3","name":"北海道開拓米菓","en":"HOKKAIDO KAITAKU OKAKI / KITAKARO","pick":"使用北海道糯米與道產海味製作的米菓，鹹味系伴手禮可和甜點錯開。","area":"札幌","buyAt":"北菓樓 札幌本館","address":"北海道札幌市中央区北1条西5丁目1-2","carry":"常溫禮盒，方便攜帶","tip":"6/16 市區散步時購買。","source":"https://www.kitakaro.com/"},{"id":"s4","name":"ROYCE' 生巧克力","en":"NAMA CHOCOLATE / ROYCE'","pick":"口感柔滑的生巧克力有多種風味；也可選較好攜帶的洋芋片巧克力。","area":"札幌","buyAt":"ROYCE' 大丸札幌店","address":"北海道札幌市中央区北5条西4丁目7 大丸札幌店 B1F","carry":"生巧克力須保冷","tip":"返台前再買，較易控制保冷時間。","source":"https://www.royce.com/goods/list/?in_category=C010"},{"id":"s5","name":"KINOTOYA 現烤起司塔","en":"BAKE CHEESE TART / KINOTOYA","pick":"酥脆塔皮搭配濃郁起司內餡，適合作為札幌散步途中現吃甜點。","area":"札幌","buyAt":"KINOTOYA BAKE 地下街店","address":"北海道札幌市中央区南2条西3丁目 さっぽろ地下街ポールタウン","carry":"現吃最佳，不適合長途攜帶","tip":"逛狸小路、大通時品嚐。","source":"https://www.kinotoya.com/"},{"id":"s6","name":"Double Fromage 雙層起司蛋糕","en":"DOUBLE FROMAGE / LeTAO","pick":"上層為柔滑生乳酪、下層為濃郁烤乳酪，是小樽代表性甜點。","area":"小樽","buyAt":"LeTAO 本店","address":"北海道小樽市堺町7-16","carry":"需留意冷藏／冷凍","tip":"6/14 走訪小樽堺町通時品嚐或購買。","source":"https://www.letao.jp/"},{"id":"s7","name":"かま栄 蒲鉾魚板","en":"KAMABOKO / KAMAEI","pick":"小樽老字號魚漿製品；可現吃炸魚板，也有適合送禮的盒裝蒲鉾。","area":"小樽","buyAt":"かま栄 工場直売店","address":"北海道小樽市堺町3-7","carry":"部分商品需冷藏","tip":"6/14 堺町散步途中品嚐。","source":"https://kamaei.co.jp/"},{"id":"s8","name":"美瑛玉米麵包","en":"CORN BREAD / BIEI SENKA","pick":"以北海道美瑛玉米為主角的高人氣麵包，玉米香甜、數量有限。","area":"機場","buyAt":"美瑛選果 新千歲機場店","address":"北海道千歳市美々 新千歳空港国内線ターミナル 2F","carry":"適合購買當日食用","tip":"分批出爐且可能售完，不為購買而壓縮登機時間。","source":"https://bieisenka.jp/about/"},{"id":"s9","name":"薯條三兄弟","en":"JAGA POKKURU / CALBEE","pick":"酥脆薯條造型點心，鹹香易分裝，是機場常見的北海道定番伴手禮。","area":"機場","buyAt":"北海道本舗等機場土產店","address":"北海道千歳市美々 新千歳空港 国内線ターミナル 2F","carry":"常溫盒裝，方便分送","tip":"6/18 返回機場時集中採購。","source":"https://www.hokkaido-airports.com/en/new-chitose/"},{"id":"s10","name":"小樽手工音樂盒","en":"OTARU MUSIC BOX","pick":"從木製、玻璃到蒸氣鐘造型皆有，是小樽具代表性的非食品紀念品。","area":"小樽","buyAt":"小樽オルゴール堂 本館","address":"北海道小樽市住吉町4-1","carry":"易碎品需妥善包裝","tip":"不想只買食品，可挑一件小樽紀念品。","source":"https://www.otaru-orgel.co.jp/"},{"id":"s11","name":"富良野薰衣草香氛與花草製品","en":"FURANO LAVENDER GOODS","pick":"薰衣草精油、香氛袋與花草小物，最能帶回富良野花田的氣味記憶。","area":"富良野","buyAt":"フラノマルシェ 1 & 2","address":"北海道富良野市幸町13-1","carry":"非食品最方便攜帶","tip":"6/15 行程有停靠富良野市區時再購買。","source":"https://marche.furano.jp/"},{"id":"s12","name":"富良野葡萄酒切達起司","en":"WINE CHEDDAR CHEESE / FURANO","pick":"加入富良野葡萄酒製成的特色切達起司，色澤與風味都很有辨識度。","area":"富良野","buyAt":"富良野チーズ工房","address":"北海道富良野市中五区","carry":"起司需冷藏","tip":"6/15 自駕較順；參觀與試吃約需 30 分鐘。","source":"https://www.furano-cheese.jp/"},{"id":"s13","name":"北海道哈密瓜果凍","en":"HOKKAIDO MELON JELLY","pick":"以北海道哈密瓜風味製成的常溫甜點，包裝穩定、比鮮果更適合帶回台灣。","area":"札幌","buyAt":"北海道どさんこプラザ 札幌店","address":"北海道札幌市北区北6条西4丁目 JR札幌駅西通北口 1F","carry":"常溫攜帶；避免選購生鮮水果","tip":"6/17 回札幌後，可在札幌站北口補買。","source":"https://dousanhin.jp/store-information/sapporo"}];
const EXTRA_MEALS=[{"id":"x-yoi","meal":"lunch","name":"柿崎商店 海鮮工房","en":"KAKIZAKI / YOICHI","dish":"余市海鮮丼、現撈海產定食","area":"余市","place":"余市站前","address":"北海道余市郡余市町黒川町7丁目25","hours":"09:00–18:00（週日 –17:00）；週四休","day":"6/14","note":"余市站前名店；如果 6/14 預定在小樽吃壽司，兩者擇一，不要連排兩餐。","source":"https://yoichi-kankoukyoukai.com/spot_food/%E6%B5%B7%E9%AE%AE%E3%83%BB%E5%AF%BF%E5%8F%B8/","tag":"余市必吃","zone":"yoichi","index":2},{"id":"x-biei","meal":"lunch","name":"RESTAURANT ASPERGES","en":"ASPERGES / BIEI","dish":"美瑛當季蔬菜法式料理","area":"美瑛","place":"美瑛選果","address":"北海道上川郡美瑛町大町2丁目","hours":"11:00–20:00（週一）；11:00–19:00（其他營業日）；週三休；7–8 月至 20:00","day":"6/15","note":"需預留較長用餐時間；6/15 長途一日巴士團不適合另外安排此餐，僅供自駕自由調整。","source":"https://biei-asperges.com/","tag":"美瑛特色","zone":"biei","index":3,"carOnly":true},{"id":"x-tomita","meal":"lunch","name":"とみたメロンハウス","en":"FURANO MELON HOUSE","dish":"富良野哈密瓜與哈密瓜霜淇淋","area":"富良野","place":"中富良野・富田農場附近","address":"北海道空知郡中富良野町宮町3-32","hours":"09:00–17:00；5–10 月中旬無休（天候影響可能變更）","day":"6/15","note":"適合在富田農場附近短暫休息；如果參加一日巴士團，只有時間許可才順買。","source":"https://www.tomita-m.co.jp/","tag":"季節甜點","zone":"tomita","index":3},{"id":"x-nobo","meal":"lunch","name":"登別温泉市場","en":"ONSEN ICHIBA / NOBORIBETSU","dish":"海鮮丼、烤貝類、溫泉蛋","area":"登別","place":"登別溫泉街","address":"北海道登別市登別温泉町50","hours":"11:30–19:30（冬季至 21:00）；全年無休","day":"6/17","note":"登別溫泉街海鮮餐廳兼特產店；餐飲與名產共用同一張店面實拍。營業時間可能調整。","source":"https://noboribetsu-spa.jp/spot/spot0169/","tag":"溫泉街","zone":"noboribetsu","index":5},{"id":"x-shik","meal":"lunch","name":"支笏湖 レークサイドキッチン トントン","en":"LAKESIDE KITCHEN TONTON","dish":"支笏湖姬鱒（チップ）料理","area":"支笏湖","place":"支笏湖遊客中心附近","address":"北海道千歳市支笏湖温泉番外地","hours":"6–9月 10:00–16:00（L.O. 15:30）；其他月份 10:00–15:00（L.O. 14:30）；天候不佳不定休","day":"6/17","note":"支笏湖漁協列出的姬鱒餐廳；只有 6/17 方案實際到支笏湖才顯示。Tabelog 頁面曾標示休業中，出發前請向店家電話確認。","source":"https://lakeshikotsu-tonton.com/","tag":"湖畔名物","zone":"shikotsu","index":5},{"id":"x-shako","meal":"lunch","name":"お食事処 みさき","en":"MISAKI / SHAKOTAN UNI","dish":"積丹天然海膽丼（6–8 月為產季）","area":"積丹","place":"積丹・日司町","address":"北海道積丹郡積丹町日司町236","hours":"09:00–15:00；週三休","day":"6/17","note":"積丹天然海膽丼，熱門時段可能售完；每年休息日與漁況請查官方公告。參團不保證可自行停靠用餐。","source":"https://osyokujidokoromisaki.com/about","tag":"積丹名店","zone":"shakotan","index":5},{"id":"x-joz","meal":"lunch","name":"Furukawa Fruit J・glacée","en":"J-GLACEE / JOZANKEI","dish":"北海道蘋果派、季節水果甜點","area":"定山溪","place":"定山溪溫泉街","address":"北海道札幌市南区定山渓温泉西4丁目356","hours":"09:30–17:00；週二休（可能因進貨或活動臨時休）","day":"6/17","note":"定山溪散步時的甜點休息點，官方觀光協會收錄；下午較適合。","source":"https://jozankei.jp/tw/store/j-glacee/","tag":"溪谷甜點","zone":"jozankei","index":5}];
const EXTRA_GIFTS=[{"id":"gx-yoi","name":"余市海產加工品","en":"YOICHI SEAFOOD PRODUCTS","pick":"以余市漁獲製作的燻製、昆布卷與罐裝海味，比生鮮更適合旅行攜帶。","area":"余市","buyAt":"柿崎商店","address":"北海道余市郡余市町黒川町7丁目25","carry":"優先選常溫密封包裝，並核對入台規定","tip":"6/14 余市站前順買。","source":"https://yoichi-kankoukyoukai.com/kaisanbutsu_special/","zone":"yoichi","index":2},{"id":"gx-furano","name":"富良野薰衣草精油與香氛袋","en":"FURANO LAVENDER GOODS","pick":"把富良野花田香氣帶回家的非食品特產，體積小且容易放入行李。","area":"富良野","buyAt":"富田農場園內商店","address":"北海道空知郡中富良野町基線北15号","carry":"非食品，方便攜帶","tip":"6/15 真正有停靠富田農場時再購買，勿延誤巴士。","source":"https://www.farm-tomita.co.jp/","zone":"tomita","index":3},{"id":"gx-biei","name":"美瑛小麥餅乾與農產點心","en":"BIEI WHEAT SWEETS","pick":"以美瑛小麥及當地農產品製作的餅乾、烘焙點心，適合常溫帶回。","area":"美瑛","buyAt":"美瑛選果・美瑛町店","address":"北海道上川郡美瑛町大町2丁目","carry":"常溫加工點心較好攜帶","tip":"6/15 自駕順路較適合；觀光巴士未必停靠。","source":"https://www.biei-hokkaido.jp/ja/facility/biei-vegetable-market","zone":"biei","index":3,"carOnly":true},{"id":"gx-nobo","name":"登別溫泉饅頭與地獄谷限定點心","en":"NOBORIBETSU ONSEN SWEETS","pick":"以溫泉街與地獄谷為主題的甜點與包裝零食，比一般綜合土產更有地方辨識度。","area":"登別","buyAt":"登別温泉市場周邊","address":"北海道登別市登別温泉町50","carry":"優先選常溫包裝；蛋類食品先核對檢疫","tip":"6/17 走訪登別溫泉街時選購。","source":"https://noboribetsu-spa.jp/spot/spot0169/","zone":"noboribetsu","index":5},{"id":"gx-shako","name":"積丹昆布與海產加工品","en":"SHAKOTAN KELP & SEAFOOD","pick":"積丹沿岸昆布、海味罐頭與常溫加工品，能帶回半島的海洋風味。","area":"積丹","buyAt":"神威岬周邊地方物產販售處","address":"北海道積丹郡積丹町神威岬周邊","carry":"確認個別商品保存條件及入台規定","tip":"若當天經過神威岬再選購，景觀與巴士班次優先。","source":"https://www.kanko-shakotan.jp/food/","zone":"shakotan","index":5},{"id":"gx-joz","name":"定山溪手工蘋果派","en":"JOZANKEI APPLE PIE / J・GLACÉE","pick":"酥皮包入北海道蘋果餡，適合在定山溪散步時現吃。","area":"定山溪","buyAt":"J・glacée","address":"北海道札幌市南区定山渓温泉西4丁目356","carry":"現吃或當日享用較適合","tip":"6/17 定山溪散步時順道購買。","source":"https://jozankei.jp/tw/store/j-glacee/","zone":"jozankei","index":5},{"id":"gx-shik","name":"メメール・支笏湖義式冰淇淋","en":"LAKE SHIKOTSU GELATO / MEMERE","pick":"以北海道乳品與水果製作的湖畔義式冰淇淋，是到支笏湖才適合品嚐的當地甜點。","area":"支笏湖","buyAt":"メメール 湖畔店","address":"北海道千歳市支笏湖温泉","carry":"當地現吃，不適合長途攜帶","tip":"6/17 支笏湖湖畔短暫停留時品嚐。","source":"https://shikotsuko-gyokyo.org/shop/","zone":"shikotsu","index":5}];

const ZONES={
susukino:{name:'薄野',lat:43.0538,lng:141.3535},odori:{name:'大通公園',lat:43.0604,lng:141.3542},station:{name:'札幌站',lat:43.0687,lng:141.3508},nijo:{name:'二條市場',lat:43.0582,lng:141.3602},
otaru:{name:'小樽站周邊',lat:43.1973,lng:141.0011},sakaimachi:{name:'小樽堺町通',lat:43.1908,lng:141.0082},yoichi:{name:'余市站周邊',lat:43.1953,lng:140.7942},
furano:{name:'富良野站周邊',lat:43.3479,lng:142.392},tomita:{name:'中富良野・富田農場',lat:43.4170,lng:142.4257},biei:{name:'美瑛站周邊',lat:43.5910,lng:142.4620},
noboribetsu:{name:'登別溫泉街',lat:42.4914,lng:141.1444},shikotsu:{name:'支笏湖畔',lat:42.7712,lng:141.4030},shakotan:{name:'積丹・日司町',lat:43.3270,lng:140.4810},jozankei:{name:'定山溪溫泉街',lat:42.9650,lng:141.1666},airport:{name:'新千歲機場',lat:42.7746,lng:141.6926},jogai:{name:'札幌場外市場',lat:43.0714,lng:141.3235}
};
const MEAL_ZONE={b1:'susukino',b2:'nijo',b3:'station',b4:'station',b5:'jogai',b6:'nijo',b7:'jogai',b8:'susukino',b9:'station',l1:'nijo',l2:'station',l3:'susukino',l4:'otaru',l5:'otaru',l6:'furano',l7:'odori',d1:'susukino',d2:'susukino',d3:'station',d4:'susukino',d5:'station',d6:'nijo',d7:'odori'};
const GIFT_ZONE={s1:'odori',s2:'station',s3:'odori',s4:'station',s5:'susukino',s6:'sakaimachi',s7:'sakaimachi',s8:'airport',s9:'airport',s10:'sakaimachi',s11:'furano',s12:'furano',s13:'station'};
const GIFT_DAYS={0:['s13','s4','s5'],1:['s1','s2','s3','s5'],2:['s6','s7','s10'],3:['s11','s12'],4:['s1','s2','s3','s4','s5'],5:['s13','s4'],6:['s2','s4','s8','s9']};
const LABELS=['札幌・薄野','札幌祭典','小樽・余市','富良野・美瑛','札幌神宮祭','郊外方案','札幌・機場'];

const dayRoot=document.getElementById('day-discover');
const overview=document.getElementById('food-guide');
if(!dayRoot||!overview)return;
const mealGrids=Object.fromEntries(['breakfast','lunch','dinner'].map(key=>[key,document.getElementById('dd-meals-'+key)]));
const mealMore=Object.fromEntries(['breakfast','lunch','dinner'].map(key=>[key,document.getElementById('dd-more-'+key)]));
const mealCounts=Object.fromEntries(['breakfast','lunch','dinner'].map(key=>[key,document.getElementById('dd-count-'+key)]));
const giftGrid=document.getElementById('dd-gifts');
const dayContextLabel=document.getElementById('dd-day-context');
const counts=document.getElementById('dd-count');
const mapPanel=document.getElementById('dd-map-panel');
const mapStatus=document.getElementById('dd-map-status');
const giftMore=document.getElementById('dd-more-gifts');
const FEATURED={breakfast:3,lunch:3,dinner:3,gifts:3};
let expanded={breakfast:false,lunch:false,dinner:false,gifts:false};
let localMap=null,markerLayer=null,markers={},currentPlaces=[],pendingFocus=null;
const scenicStops={
 0:[['札幌站',43.0687,141.3508],['薄野・狸小路',43.0538,141.3535]],
 1:[['大通公園・YOSAKOI',43.0604,141.3542]],
 2:[['余市',43.1953,140.7942],['小樽運河',43.1992,141.0033],['小樽堺町通',43.1908,141.0082]],
 3:[['富田農場',43.4170,142.4257],['四季彩之丘',43.5479,142.4668],['白金青池',43.4939,142.6141]],
 4:[['北海道神宮',43.0547,141.3074],['大通公園',43.0604,141.3542]],
 6:[['札幌站',43.0687,141.3508],['新千歲機場',42.7746,141.6926]]
};
function dayLandmarks(ctx){
 if(ctx.day!==5)return scenicStops[ctx.day]||[];
 const landmarks=[];
 if(ctx.zones.includes('noboribetsu'))landmarks.push(['登別地獄谷',42.4911,141.1649]);
 if(ctx.zones.includes('shikotsu'))landmarks.push(['支笏湖',42.7586,141.3141]);
 if(ctx.zones.includes('shakotan'))landmarks.push(['積丹・神威岬',43.3281,140.3440]);
 if(ctx.zones.includes('jozankei'))landmarks.push(['定山溪溫泉',42.9625,141.1556]);
 if(ctx.zones.includes('yoichi'))landmarks.push(['余市',43.1953,140.7942]);
 if(ctx.zones.includes('otaru'))landmarks.push(['小樽運河',43.1992,141.0033]);
 return landmarks;
}
function safe(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function indexToday(){return (typeof state!=='undefined'&&Number.isInteger(state.day))?state.day:0;}
function dayContext(){
 const day=indexToday();
 const zones=day===0?['station','susukino','odori']:
 day===1?['station','odori','nijo','susukino']:
 day===2?['yoichi','otaru','sakaimachi']:
 day===3?['furano','tomita','biei','station']:
 day===4?['odori','nijo','station','susukino']:
 day===6?['station','airport']:[];
 let label=LABELS[day];
 let detail='';
 if(day===5&&typeof getDay==='function'){
   const itinerary=getDay(5);
   const words=[itinerary.title,...itinerary.stops.map(s=>s[1])].join(' ');
   if(/登別/.test(words))zones.push('noboribetsu');
   if(/支笏湖/.test(words))zones.push('shikotsu');
   if(/積丹|神威岬/.test(words))zones.push('shakotan');
   if(/定山溪|定山渓/.test(words))zones.push('jozankei');
   if(/余市/.test(words))zones.push('yoichi');
   if(/小樽/.test(words))zones.push('otaru','sakaimachi');
   if(!zones.length)zones.push('station');
   if(!zones.includes('station'))zones.push('station');
   label=itinerary.title;
   detail='目前為 '+state.plan+' 方案／'+(state.car===0?'不租車':state.car+' 天租車')+'。當天的美食與名產會依此更換。';
 }else if(day===3){
   detail=state.car===0?'觀光巴士行程停留時間有限；美瑛市區餐廳僅自駕時顯示。':'自駕可視停留時間決定是否加進美瑛餐廳。';
 }else if(day===6){
   detail='機場購物與札幌站最後採買；依實際航班時間取捨。';
 }else detail='與七日旅行時間軸連動；點一下名店就能在下方地圖查看所在區域。';
 return {day,zones:[...new Set(zones)],label,detail};
}
function allFor(ctx){
 const dining=window.HOKKAIDO_DINING;
 const key=ctx.day===5?'5'+state.plan:String(ctx.day);
 // Breakfast is always eaten before leaving Sapporo, so it has its own
 // per-day roster instead of being filtered by the day-trip zones.
 const breakfasts=(BREAKFAST_ROSTER[key]||BREAKFAST_ROSTER[ctx.day]||[])
   .map(id=>BREAKFAST_VENUES.find(p=>p.id===id))
   .filter(Boolean)
   .map(p=>{
    const candidate=Object.assign({},p,{zone:MEAL_ZONE[p.id]});
    if(!candidate.zone||!ZONES[candidate.zone])return null;
    if(ctx.day===0)candidate.note='隔日早晨候選；'+candidate.note;
    else if(!ctx.zones.includes(candidate.zone))candidate.note='出發前於札幌市區用餐；'+candidate.note;
    return candidate;
   })
   .filter(Boolean);
 const choices=[];
 const schedule=dining?.roster?.[key];
 function pick(id,meal){
  const base=MEALS.find(p=>p.id===id)||EXTRA_MEALS.find(p=>p.id===id)||dining?.catalog?.[id];
  if(!base)return null;
  const candidate=Object.assign({},base,{meal,zone:base.zone||MEAL_ZONE[id]});
  if(!candidate.zone||!ZONES[candidate.zone])return null;
  if(ctx.day===3&&state.car===0){
    candidate.note='觀光巴士常已含午餐且未必自由停靠；以下為更換行程／自駕候選。 '+candidate.note;
  }
  if(ctx.day===5&&state.car===0&&meal==='lunch'){
    candidate.note='依預約團停靠點與自由用餐時間決定是否能去。 '+candidate.note;
  }
  if(ctx.day===6){
    candidate.note='返程前安檢區外餐飲候選；請優先完成行李托運、免稅查驗及報到。 '+candidate.note;
  }
  return candidate;
 }
 for(const meal of ['lunch','dinner']){
  const keys=[...(schedule?.[meal]||[])];
  if(ctx.day===5&&meal==='lunch'&&state.car===2&&state.plan==='A')keys.push('x-shik');
  if(ctx.day===5&&meal==='lunch'&&state.car===2&&state.plan==='C')keys.push('jozanHakken');
  const names=new Set();
  for(const id of keys){
   const p=pick(id,meal);if(!p)continue;
   const unique=p.name.normalize('NFKC').toLowerCase().trim();
   if(names.has(unique))continue;
   names.add(unique);choices.push(p);
  }
 }
 const gifts=[
  ...EXTRA_GIFTS.filter(p=>p.index===ctx.day&&(!p.carOnly||state.car!==0)),
  ...GIFTS.filter(p=>(GIFT_DAYS[ctx.day]||[]).includes(p.id)).map(p=>Object.assign({},p,{zone:GIFT_ZONE[p.id]}))
 ].filter(p=>p.zone&&ctx.zones.includes(p.zone));
 return {meals:[...breakfasts,...choices],gifts};
}

/* Images have been sourced from individually linked Wikimedia Commons file pages.
 * A representative dish is not claimed to be a photograph from the listed store.
 * Photos of products or interiors are labeled separately. */
const PHOTO_LIBRARY={"egg":{"file":"Japanese egg sandwich in a sandwich case.jpg","author":"Quercus acuta","license":"CC BY-SA 4.0","label":"料理示意照"},"seafood":{"file":"Seafood bowl.jpg","author":"Douglas P. Perkins","license":"CC0 1.0","label":"料理示意照"},"sushi":{"file":"2009, sushi in Otaru -81219.jpeg","author":"Syced","license":"CC0 1.0","label":"小樽料理示意照"},"soup":{"file":"A soup curry dish in Sapporo - Flickr - odako1.jpg","author":"Koichi Oda","license":"CC BY-SA 2.0","label":"札幌料理示意照"},"ramen":{"file":"Sapporo miso ramen.jpg","author":"Schellack","license":"CC BY 3.0","label":"札幌料理示意照"},"lamb":{"file":"Genghis Khan dish.jpg","author":"Douglas P. Perkins","license":"CC0 1.0","label":"料理示意照"},"matsuo":{"file":"Matsuo Jingisukan.jpg","author":"Totti","license":"CC BY-SA 4.0","label":"品牌料理實拍（非指定分店）"},"uni":{"file":"UniIkuraDon.jpg","author":"Douglas P. Perkins","license":"CC BY 3.0","label":"料理示意照"},"white":{"file":"Shiroi koibito.jpg","author":"Fk","license":"CC BY-SA 3.0","label":"實際商品照片"},"rokkatei":{"file":"Marusei butter sand of Rokkatei (1).jpg","author":"毒島みるく","license":"CC0 1.0","label":"實際商品照片"},"royce":{"file":"Royce chocolate.jpg","author":"Antonio733","license":"CC BY-SA 4.0","label":"實際商品照片"},"kitakaro":{"file":"KITAKARO Sapporo Honkan interior 201904.jpg","author":"MIKI Yoshihito","license":"CC BY 2.0","label":"札幌本館實景"},"kinotoya":{"file":"KINOTOYA, Sapporo, Hokkaido, Japan, 札幌, 北海道, 日本, 焼きたてチーズタルト, きのとや, 新千歳空港店, さっぽろし, ほっかいどう, にっぽん, にほん (16720983681).jpg","author":"bryan...","license":"CC BY-SA 2.0","label":"品牌商品實景（非指定分店）"},"letao":{"file":"LeTAO-1.jpg","author":"Evelyn-rose","license":"CC0 1.0","label":"品牌門市示意（非小樽本店）"},"music":{"file":"Otaru Music Box Museum interior.jpg","author":"Liandrei","license":"CC BY-SA 4.0","label":"小樽店內實景"},"pie":{"file":"IMG small apple pie.jpg","author":"LostplanetKD73","license":"CC0 1.0","label":"蘋果派示意照"},"darumaReal":{"file":"Yakiniku on braziers at 成吉思汗 だるま in Sapporo, Japan (244).jpg","author":"Savannah Rivka","license":"CC BY-SA 4.0","label":"Daruma 本店實拍"},"roeEditorial":{"src":"https://images.unsplash.com/photo-1761095596580-c96bd32f84a2?auto=format&fit=crop&w=1100&q=82","creditUrl":"https://unsplash.com/photos/close-up-of-bright-orange-salmon-roe-in-a-tin-_eyJJf8Bwrc","author":"Madeline Liu","license":"Unsplash License","label":"鮭魚卵特寫／非店家實拍"},"ramenEditorial":{"src":"https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1100&q=82","creditUrl":"https://unsplash.com/photos/ramen-dish-qom5MPOER-I","author":"Bon Vivant","license":"Unsplash License","label":"拉麵料理示意／非店家實拍"},"seafoodEditorial":{"src":"https://images.unsplash.com/photo-1752878821092-a0a77c6bd2f8?auto=format&fit=crop&w=1100&q=82","creditUrl":"https://unsplash.com/photos/sushi-bowl-with-various-fish-and-garnishes-GI_3suAJ-9Y","author":"Kris Tian","license":"Unsplash License","label":"海鮮丼示意／非店家實拍"},"lambCooked":{"file":"Sheep and cloud hill 2023-05-20(2) as.jpg","author":"Araisyohei","license":"CC BY 4.0","label":"北海道成吉思汗烤肉示意"}};
const PHOTO_BY_ID={"b1":"egg","b2":"seafoodEditorial","b3":"egg","b4":"egg","l1":"soup","l2":"sushi","l3":"ramenEditorial","l4":"sushi","l6":"uni","l7":"matsuo","d1":"darumaReal","d2":"roeEditorial","d3":"lambCooked","d4":"ramenEditorial","d5":"seafoodEditorial","d6":"soup","d7":"matsuo","x-yoi":"seafoodEditorial","x-biei":null,"x-tomita":null,"x-nobo":"seafoodEditorial","x-shik":"seafood","x-shako":"uni","x-joz":"pie","s1":"white","s2":"rokkatei","s3":"kitakaro","s4":"royce","s5":"kinotoya","s6":"letao","s7":null,"s8":null,"s9":null,"s10":"music","s11":null,"s12":null,"s13":null,"gx-yoi":"seafood","gx-biei":null,"gx-furano":null,"gx-nobo":null,"gx-shako":"uni","gx-joz":"pie","gx-shik":null};
const SHOP_HOURS={"s1":{"display":"10:00–20:00","source":"https://www.ishiya.co.jp/shop/001352.html"},"s2":{"display":"10:00–17:30；喫茶 10:30–16:30（喫茶週三休）","source":"https://www.rokkatei.co.jp/shop/sapporo/"},"s3":{"display":"10:00–18:00；2F 咖啡 11:00–17:00（L.O. 16:30）","source":"https://www.kitakaro.com/ext/tenpo/sapporohonkan.html"},"s4":{"display":"10:00–20:00（依百貨休館日）","source":"https://www.royce.com/brand/shop/detail/?no=101"},"s5":{"display":"10:00–20:00（依地下街休館日）","source":"https://www.sapporo-chikagai.jp/shop/single/176"},"s6":{"display":"09:00–18:00；2F 喫茶 L.O. 17:30；無休","source":"https://tabelog.com/hokkaido/A0106/A010601/1000304/"},"s7":{"display":"5–10月 平日（含假日）09:00–18:00、週末 09:00–19:00；11–4月 09:00–18:00；元旦休","source":"https://kamaei.co.jp/store_introduce/chokubai/"},"s8":{"display":"08:00–19:00","source":"https://bieisenka.jp/about/"},"s9":{"display":"07:30–20:30；無休","source":"https://www.hokkaido-airports.com/ja/new-chitose/spend/shop/42"},"s10":{"display":"09:00–18:00（2、3 樓 17:45 關閉）；無休","source":"https://www.otaru-orgel.co.jp/shop"},"gx-yoi":{"display":"09:00–18:00（週日 –17:00）；週四休","source":"https://tabelog.com/hokkaido/A0106/A010602/1000224/"},"gx-biei":{"display":"選果市場 6–8月 09:00–18:00；其他月份 10:00–17:00；12/30–1/5 休","source":"https://bieisenka.jp/about/"},"gx-furano":{"display":"4月下旬–10月 約 09:00–17:00（7月前後延長至 18:00）；冬季休園","source":"https://www.farm-tomita.co.jp/"},"gx-nobo":{"display":"購物 10:30 起；餐飲 11:30 起；L.O. 19:30、20:00 閉店","source":"http://www.onsenichiba.com/kisendo.html"},"gx-shako":{"display":"09:00–16:00；週二休","source":"https://www.kanko-shakotan.jp/food/"},"gx-joz":{"display":"09:30–17:00；週二休（可能因進貨或活動臨時休）","source":"https://tabelog.com/hokkaido/A0101/A010305/1050843/"},"gx-shik":{"display":"10:00–17:30（L.O. 17:00）；外帶 09:00–17:30；不定休","source":"https://lake-shikotsu.jp/archives/info/272.html"},"s11":{"display":"10:00–18:00（6/20–8/31 至 19:00）；11 月中旬維護休館、12/31–1/1 休","source":"https://marche.furano.jp/"},"s12":{"display":"09:00–17:00（11–3 月至 16:00）；12/31–1/3 休","source":"https://www.furano-cheese.jp/"},"s13":{"display":"08:30–20:00；無休","source":"https://dousanhin.jp/store-information/sapporo"}};
function shopHours(p){
 const detail=SHOP_HOURS[p.id];
 return {display:detail?.display||p.hours||'營業時間待確認',source:detail?.source||p.source};
}
function hoursHTML(p){
 const h=shopHours(p);
 return '<p class="dd-shop-hours"><span aria-hidden="true">◷</span> <span>營業時間（參考）</span> <strong>'+safe(h.display)+'</strong> '+
 '<a href="'+safe(h.source)+'" target="_blank" rel="noopener noreferrer" aria-label="查看'+safe(p.name)+'官方營業時間">核對 ↗</a></p>';
}
function giftHoursHTML(p){
 const h=shopHours(p);
 return '<p class="dd-shop-hours"><span aria-hidden="true">◷</span> <span>建議購買處營業</span> <strong>'+safe(h.display)+'</strong> '+
 '<a href="'+safe(h.source)+'" target="_blank" rel="noopener noreferrer" aria-label="查看'+safe(p.buyAt||p.name)+'營業時間">核對 ↗</a></p>';
}

const VERIFIED_RESTAURANT_PHOTOS={
 d1:{file:'Yakiniku on braziers at 成吉思汗 だるま in Sapporo, Japan (244).jpg',
  author:'Savannah Rivka',license:'CC BY-SA 4.0',
  label:'成吉思汗 だるま 店內實拍',type:'現場餐點'},
 l5:{file:'Wakadorijidainaruto-honten01.JPG',
  author:'Gpx-evo',license:'CC BY-SA 3.0',
  label:'若鶏時代なると小樽本店 店面實景',type:'店面外觀'}
};
/* Direct links are source-verified Tabelog store pages. For unverified shops,
   use Tabelog's own restaurant search rather than guessing an ID or branch. */
const TABELOG_DIRECT={"d1":"https://tabelog.com/hokkaido/A0101/A010103/1000007/","d2":"https://tabelog.com/hokkaido/A0101/A010103/1003784/","l1":"https://tabelog.com/hokkaido/A0101/A010102/1082918/","d6":"https://tabelog.com/hokkaido/A0101/A010102/1082918/","l2":"https://tabelog.com/hokkaido/A0101/A010101/1001102/","l3":"https://tabelog.com/hokkaido/A0101/A010103/1002793/","l4":"https://tabelog.com/hokkaido/A0106/A010601/1000209/","l5":"https://tabelog.com/hokkaido/A0106/A010601/1000906/","d4":"https://tabelog.com/hokkaido/A0101/A010103/1000150/","l7":"https://tabelog.com/hokkaido/A0101/A010102/1002898/","d7":"https://tabelog.com/hokkaido/A0101/A010102/1002898/","x-yoi":"https://tabelog.com/hokkaido/A0106/A010602/1000224/","x-shik":"https://tabelog.com/hokkaido/A0107/A010701/1031081/","citySuage":"https://tabelog.com/hokkaido/A0101/A010103/1006004/","cityIchigen":"https://tabelog.com/hokkaido/A0101/A010103/1025072/","d5":"https://tabelog.com/hokkaido/A0101/A010101/1000299/","d3":"https://tabelog.com/hokkaido/A0101/A010202/1000159/","airportIchigen":"https://tabelog.com/hokkaido/A0107/A010701/1034338/","airportShirakaba":"https://tabelog.com/hokkaido/A0107/A010701/1007892/","airportKantaro":"https://tabelog.com/hokkaido/A0107/A010701/1049433/","airportNewSanko":"https://tabelog.com/hokkaido/A0107/A010701/1069364/","airportHanabusa":"https://tabelog.com/hokkaido/A0107/A010701/1000819/","airportKeyaki":"https://tabelog.com/hokkaido/A0107/A010701/1042872/","b3":"https://tabelog.com/hokkaido/A0101/A010102/1046356/","x-shako":"https://tabelog.com/hokkaido/A0106/A010602/1003109/","otaruPoseidon":"https://tabelog.com/hokkaido/A0106/A010601/1042928/","otaruWaraku":"https://tabelog.com/hokkaido/A0106/A010601/1001257/","b1":"https://tabelog.com/hokkaido/A0101/A010104/1001503/","b2":"https://tabelog.com/hokkaido/A0101/A010103/1000272/","otaruIse":"https://tabelog.com/hokkaido/A0106/A010601/1045303/","otaruSankaku":"https://tabelog.com/hokkaido/A0106/A010601/1027887/","x-nobo":"https://tabelog.com/hokkaido/A0108/A010803/1002147/","noboDaio":"https://tabelog.com/hokkaido/A0108/A010803/1006770/","noboNobojin":"https://tabelog.com/hokkaido/A0108/A010803/1059982/","noboChiba":"https://tabelog.com/hokkaido/A0108/A010803/1023670/","noboKitaUdon":"https://tabelog.com/hokkaido/A0108/A010803/1081478/","noboEnmaken":"https://tabelog.com/hokkaido/A0108/A010803/1074628/","l6":"https://tabelog.com/hokkaido/A0104/A010403/1000298/","x-biei":"https://tabelog.com/hokkaido/A0104/A010403/1005336/","x-tomita":"https://tabelog.com/hokkaido/A0104/A010403/1024348/","furanoYuiga":"https://tabelog.com/hokkaido/A0104/A010403/1000063/","furanoKodamaya":"https://tabelog.com/hokkaido/A0104/A010403/1010159/","furanoNatural":"https://tabelog.com/hokkaido/A0104/A010403/1061688/","furanoFukuzushi":"https://tabelog.com/hokkaido/A0104/A010403/1007198/","b4":"https://tabelog.com/hokkaido/A0101/A010102/1042576/","x-joz":"https://tabelog.com/hokkaido/A0101/A010305/1050843/","shakotanNakamuraya":"https://tabelog.com/hokkaido/A0106/A010602/1005212/","shakotanFuji":"https://tabelog.com/hokkaido/A0106/A010602/1000239/","shakotanRinkou":"https://tabelog.com/hokkaido/A0106/A010602/1001759/","shakotanSugino":"https://tabelog.com/hokkaido/A0106/A010602/1024105/","jozanIchi":"https://tabelog.com/hokkaido/A0101/A010305/1072376/","jozanKonno":"https://tabelog.com/hokkaido/A0101/A010305/1023645/","jozanShiumai":"https://tabelog.com/hokkaido/A0101/A010305/1073810/","jozanFranse":"https://tabelog.com/hokkaido/A0101/A010305/1023646/","jozanHakken":"https://tabelog.com/hokkaido/A0101/A010305/1064705/","cityOkushiba":"https://tabelog.com/hokkaido/A0101/A010101/1041930/","b5":"https://tabelog.com/hokkaido/A0101/A010204/1000153/","b6":"https://tabelog.com/hokkaido/A0101/A010103/1035973/","b7":"https://tabelog.com/hokkaido/A0101/A010105/1005395/","b8":"https://tabelog.com/hokkaido/A0101/A010103/1081326/","b9":"https://tabelog.com/hokkaido/A0101/A010101/1001677/"};
function tabelogPhotoLink(p){
 const direct=TABELOG_DIRECT[p.id];
 return {
  url:direct||('https://tabelog.com/rstLst/?sk='+encodeURIComponent(p.name+' '+(p.area||'北海道'))),
  direct:Boolean(direct)
 };
}

function googleRealPhotosURL(p){
 const query=[p.name,p.address||p.place||p.area,'北海道'].filter(Boolean).join(' ');
 return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query);
}
// Photos selected and supplied in this conversation, keyed by actual restaurant ID.
// Do not display another restaurant's photo. Asset files are provided separately in the
// image package and must be committed under assets/photos/restaurants/ before rendering.
// s9/s12/s13 原檔損壞（見 docs/archive/corrupted-photos-20261107/README.md），待重新匯出後再加回。
const USER_SPECIALTY_PHOTOS={"s8":"bieiCornBread.webp","s11":"furanoLavenderCandle.webp"};
function suppliedSpecialtyPhotoMarkup(p){
 const file=USER_SPECIALTY_PHOTOS[p.id];
 if(!file)return null;
 const path='./assets/photos/specialties/'+file;
 return '<figure class="dd-photo dd-photo-verified dd-photo-user" data-specialty-photo="'+safe(p.id)+'">'+
   '<img src="'+safe(path)+'" alt="'+safe(p.name+'：使用者提供的特產商品照片')+'" loading="lazy" decoding="async">'+
   '<figcaption><span>'+safe(p.name)+' · 商品照片</span><span>圖片由使用者提供</span></figcaption></figure>';
}
const USER_RESTAURANT_PHOTOS={"d4":"keyakiSusukinoHonten.webp","l7":"matsuiJingisukanOdoriMinami1.webp","d7":"matsuiJingisukanOdoriMinami1.webp","d2":"hachikyoHonten.webp","d5":"kaniHonkeSapporoEkimae.webp","d3":"sapporoBeerGarden.webp","l1":"garakuSapporoHonten.webp","d6":"garakuSapporoHonten.webp","l2":"nemuroHanamaruJrTower.webp","l3":"shingenMinami6.webp","d1":"darumaHonten.webp","airportIchigen":"ichigenNewChitose.webp","airportShirakaba":"shirakabaSansoNewChitose.webp","airportKantaro":"kantaroNewChitose.webp","airportNewSanko":"otaruNewSankoNewChitose.webp","airportHanabusa":"hanabusaNewChitose.webp","airportKeyaki":"keyakiNewChitose.webp","b3":"cafeYoshimiAkarenga.webp","b4":"northernTerraceDiner.webp","x-shako":"misakiShakotan.webp","x-shik":"lakesideKitchenTonton.webp","citySuage":"suagePlus.webp","cityIchigen":"ichigenSohonten.webp","cityOkushiba":"okushibaSoseiji.webp","l4":"otaruMasazushiHonten.webp","otaruWaraku":"warakuOtaru.webp","b1":"sandriaHonten.webp","x-yoi":"kakizakiSeafoodKobo.webp","gx-yoi":"kakizakiSeafoodKobo.webp","otaruPoseidon":"otaruPoseidonSakaimachi.webp","x-nobo":"noboribetsuOnsenIchiba.webp","gx-nobo":"noboribetsuOnsenIchiba.webp","noboChiba":"chibaNoboribetsu.webp","noboDaio":"ajinoDaioNoboribetsu.webp","otaruIse":"isezushiOtaruEkinaka.webp","l5":"narutoHonten.webp","otaruSankaku":"takinamiShokudo.webp","l6":"kumagera.webp","x-tomita":"tomitaMelonHouse.webp","furanoKodamaya":"kodamaya.webp","furanoNatural":"naturalDiningFurano.webp","furanoFukuzushi":"fukuzushi.webp","noboNobojin":"hokkaidoBbqNobojin.webp","shakotanNakamuraya":"nakamurayaShakotan.webp","shakotanFuji":"fujizushiShakotan.webp","shakotanRinkou":"rinkouShokudo.webp","shakotanSugino":"suginoUnizenShakotan.webp","jozanIchi":"shokudoIchiJozan.webp","jozanKonno":"shokudoKonnoJozan.webp","jozanShiumai":"shiumaiHayama.webp","jozanFranse":"franseJozan.webp","jozanHakken":"hakkenzanKitchenMarche.webp","noboKitaUdon":"kitaNoboruUdon.webp","noboEnmaken":"enmakenNoboribetsu.webp","gx-shik":"memereLakesideSweets.webp","s7":"kamaeiFactoryStore.webp","gx-furano":"farmTomitaSouvenirs.webp","x-joz":"furukawaFruitGlacee.webp","gx-joz":"furukawaFruitGlacee.webp"};
USER_RESTAURANT_PHOTOS.b8='juneCoffeeSapporo.webp';
USER_RESTAURANT_PHOTOS.b9='starbucksSapporoStellarPlace.webp';
USER_RESTAURANT_PHOTOS.b6='ohisoNijoMarket.webp';
USER_RESTAURANT_PHOTOS.b7='uomasaMarketSushi.webp';
USER_RESTAURANT_PHOTOS.b5='kitanogurumeSeafood.webp';
const USER_RESTAURANT_PHOTO_CREDITS={l5:'圖片由使用者提供 · booji.com／小布少爺'};
function suppliedPhotoMarkup(p){
 const file=USER_RESTAURANT_PHOTOS[p.id];
 if(!file)return null;
 const path='./assets/photos/restaurants/'+file;
 const credit=USER_RESTAURANT_PHOTO_CREDITS[p.id]||'圖片由使用者提供';
 return '<figure class="dd-photo dd-photo-verified dd-photo-user" data-restaurant-photo="'+safe(p.id)+'">'+
   '<img src="'+safe(path)+'" alt="'+safe(p.name+'：使用者提供的店家料理照片')+'" loading="lazy" decoding="async">'+
   '<figcaption><span>'+safe(p.name)+' · 店家照片</span>'+
   '<span>'+safe(credit)+'</span></figcaption></figure>';
}

function verifiedRestaurantPhoto(p){
 const supplied=suppliedPhotoMarkup(p);
 if(supplied)return supplied;
 const photo=VERIFIED_RESTAURANT_PHOTOS[p.id];
 if(!photo){
  return '<div class="dd-photo dd-photo-authentic-pending" role="group" aria-label="查看'+safe(p.name)+'真實照片">'+
    '<div class="dd-authentic-symbol">HOKKAIDO / FOOD JOURNAL</div>'+
    '<div class="dd-authentic-name">'+safe(p.name)+'</div>'+
    '<a class="dd-authentic-link" href="'+safe(tabelogPhotoLink(p).url)+'" target="_blank" rel="noopener noreferrer" aria-label="前往食べログ查看'+safe(p.name)+'的照片或搜尋結果">在食べログ查看實拍　↗</a>'+
    '<small>連至食べログ'+(tabelogPhotoLink(p).direct?'店家頁':'搜尋結果')+'；未獲授權的照片不複製到本站</small></div>';
 }
 const file=photo.file.replace(/ /g,'_');
 const src='https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(file)+'?width=900';
 const credit='https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(file);
 return '<figure class="dd-photo dd-photo-verified"><img src="'+safe(src)+'" alt="'+safe(photo.label)+'" loading="lazy" decoding="async" referrerpolicy="no-referrer">'+
   '<figcaption><span>'+safe(photo.label)+'</span><a href="'+safe(credit)+'" target="_blank" rel="noopener noreferrer">© '+safe(photo.author)+' · '+safe(photo.license)+' ↗</a></figcaption></figure>';
}
function restaurantPhotoSourceLinks(p){
 const t=tabelogPhotoLink(p);
 const label=t.direct?'食べログ實拍':'食べログ搜尋照片';
 const search='<a class="dd-actual-photo-link" href="'+safe(t.url)+'" target="_blank" rel="noopener noreferrer">'+label+' ↗</a>';
 const google='<a class="dd-actual-photo-link" href="'+safe(googleRealPhotosURL(p))+'" target="_blank" rel="noopener noreferrer">Google Maps 照片 ↗</a>';
 return search+google;
}

function photoHTML(p){
 // Exact restaurant photos only: never use stock/other-shop dishes as a restaurant's photograph.
 if(p.meal)return verifiedRestaurantPhoto(p);
 const specialtyPhoto=suppliedSpecialtyPhotoMarkup(p);
 if(specialtyPhoto)return specialtyPhoto;
 const userPhoto=suppliedPhotoMarkup(p);
 if(userPhoto)return userPhoto;
 // Branded souvenir photographs retain the original credited sources.
 const key=Object.prototype.hasOwnProperty.call(PHOTO_BY_ID,p.id)?PHOTO_BY_ID[p.id]:p.photoKey;
 const photo=key?PHOTO_LIBRARY[key]:null;
 if(!photo)return '';
 const path=photo.file?photo.file.replace(/ /g,'_'):'';
 const url=photo.src||('https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(path)+'?width=900');
 const credit=photo.creditUrl||('https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(path));
 return '<figure class="dd-photo"><img src="'+safe(url)+'" alt="'+safe(p.name+'相關'+photo.label)+'" loading="lazy" decoding="async" referrerpolicy="no-referrer">'+
 '<figcaption><span>'+safe(photo.label)+'</span><a href="'+safe(credit)+'" target="_blank" rel="noopener noreferrer" title="照片作者與授權資訊">© '+safe(photo.author)+' · '+safe(photo.license)+' ↗</a></figcaption></figure>';
}

function editorialMeals(items,day){
 const order=(day===0?['dinner','lunch','breakfast']:day===6?['breakfast','lunch','dinner']:day===3||day===5?['lunch','breakfast','dinner']:['lunch','dinner','breakfast']);
 return items.map((p,i)=>({p,i})).sort((a,b)=>order.indexOf(a.p.meal)-order.indexOf(b.p.meal)||a.i-b.i).map(x=>x.p);
}
function focusButton(p,kind){
 const label=kind==='gift'?'查看建議購買區域':'在地圖查看';
 return '<button type="button" class="dd-map-action" data-dd-place="'+safe(p.id)+'" data-dd-kind="'+kind+'" aria-label="在當日地圖查看'+safe(p.name)+'所在區域">⌖ '+label+'</button>';
}

function foodCard(p){
 const mealName={breakfast:'早餐',lunch:'午餐',dinner:'晚餐'}[p.meal]||'餐飲';
 return '<article class="dd-pick" role="listitem" data-dd-card="'+safe(p.id)+'">'+photoHTML(p)+
 '<div class="dd-pick-kicker">'+mealName+' / '+safe(p.area)+'</div>'+
 '<h5>'+safe(p.name)+'</h5><div class="dd-pick-en">'+safe(p.en)+'</div>'+
 '<p class="dd-pick-feature">'+safe(p.dish)+'</p>'+hoursHTML(p)+
 '<p class="dd-pick-detail">'+safe(p.note)+'</p>'+
 '<div class="dd-pick-foot">'+focusButton(p,'meal')+restaurantPhotoSourceLinks(p)+'<a href="'+safe(p.source)+'" target="_blank" rel="noopener noreferrer">店家資料 ↗</a></div></article>';
}
function giftCard(p){
 return '<article class="dd-pick" role="listitem" data-dd-card="'+safe(p.id)+'">'+photoHTML(p)+
 '<div class="dd-pick-kicker">LOCAL SPECIALTY / '+safe(p.area)+'</div>'+
 '<h5>'+safe(p.name)+'</h5><div class="dd-pick-en">'+safe(p.en)+'</div>'+
 '<p class="dd-pick-feature">'+safe(p.pick)+'</p>'+
 '<p class="dd-pick-detail"><strong>建議購買：</strong>'+safe(p.buyAt||'當地物產販售處')+'</p>'+giftHoursHTML(p)+
 '<p class="dd-pick-detail">'+safe(p.tip)+'　'+safe(p.carry)+'</p>'+
 '<div class="dd-pick-foot">'+focusButton(p,'gift')+'<a href="'+safe(p.source)+'" target="_blank" rel="noopener noreferrer">特產資訊 ↗</a></div></article>';
}
function updateMore(btn,name,length,limit){
 const remainder=Math.max(0,length-limit),open=expanded[name];
 btn.hidden=!remainder;
 btn.textContent=open?'收起精選':'探索更多 · +'+remainder;
 btn.setAttribute('aria-expanded',String(open));
}
function draw(){
 const ctx=dayContext(),entries=allFor(ctx);
 const meals=editorialMeals(entries.meals,ctx.day), gifts=entries.gifts;
 currentPlaces=[...meals.map(p=>Object.assign({},p,{kind:'meal'})),...gifts.map(p=>Object.assign({},p,{kind:'gift'}))];
 let contextExtra='';
 if(ctx.day===0)contextExtra='｜首日午後抵達，早餐為隔日早晨候選；午餐僅供航班較早時備選。';
 if(ctx.day===3&&state.car===0)contextExtra='｜6/15 一日觀光巴士可能含午餐，餐廳候選不代表有自由停靠時間。';
 if(ctx.day===5)contextExtra='｜郊外午餐受巴士或自駕路線限制；晚餐建議回札幌後安排。';
 if(ctx.day===6)contextExtra='｜回程當天以航班優先，晚餐僅適合較晚起飛且預留充足報到時間者。';
 dayContextLabel.textContent='DAY '+String(ctx.day+1).padStart(2,'0')+' · '+ctx.label+'｜'+ctx.detail+contextExtra;
 const numbers={};
 for(const meal of ['breakfast','lunch','dinner']){
  const options=meals.filter(p=>p.meal===meal),limit=FEATURED[meal];
  const box=document.getElementById('dd-group-'+meal);
  box.hidden=options.length===0;
  mealGrids[meal].innerHTML=(expanded[meal]?options:options.slice(0,limit)).map(foodCard).join('');
  mealCounts[meal].textContent=' · '+options.length+' 選';
  updateMore(mealMore[meal],meal,options.length,limit);
  numbers[meal]=options.length;
 }
 giftGrid.innerHTML=(expanded.gifts?gifts:gifts.slice(0,FEATURED.gifts)).map(giftCard).join('')||
 '<p class="dd-empty">當天暫無順路特產，可安排最後一天集中採買。</p>';
 updateMore(giftMore,'gifts',gifts.length,FEATURED.gifts);
 counts.textContent='午餐 '+numbers.lunch+' 間備選 · 晚餐 '+numbers.dinner+' 間備選 · 地方特產 '+gifts.length+' 項｜餐廳與特產都是候選，不必全部排入行程。';
 if(localMap)refreshMap(ctx);
}

function showOverview(){
 const ids=['s1','s2','s4'];
 document.getElementById('dd-overview-list').innerHTML=ids.map((id,i)=>{
  const p=GIFTS.find(x=>x.id===id);
  return '<article class="dd-overview-item">'+photoHTML(p)+
   '<span class="dd-overview-num">0'+(i+1)+'</span><div class="dd-overview-copy"><h3>'+safe(p.name)+'</h3><p class="dd-overview-en">'+safe(p.en)+'</p>'+
   '<p>'+safe(p.pick)+'</p><small><strong>建議購買：</strong>'+safe(p.buyAt)+' · '+safe(p.carry)+'</small></div>'+
   '<a class="dd-overview-link" href="'+safe(p.source)+'" target="_blank" rel="noopener noreferrer">特產資訊 ↗</a></article>';
 }).join('');
}
function popupHTML(name,zone,detail){
 return '<strong>'+safe(name)+'</strong><p>'+safe(detail||zone.name)+'<br>地圖標記為區域示意，非精準店門位置。</p>';
}
function refreshMap(ctx){
 if(!localMap||!markerLayer)return;
 markerLayer.clearLayers();markers={};
 const bounds=[];
 const zoneIds=[...new Set(currentPlaces.map(x=>x.zone))].filter(z=>ZONES[z]);
 for(const id of zoneIds){
  const z=ZONES[id],list=currentPlaces.filter(x=>x.zone===id);
  const marker=window.L.marker([z.lat,z.lng],{icon:window.L.divIcon({className:'dd-map-pin-wrap',html:'<span class="dd-map-pin">'+list.length+'</span>',iconSize:[32,32],iconAnchor:[16,16]})});
  marker.bindPopup('<strong>'+safe(z.name)+'一帶</strong><p>此標記為區域中心，非個別店家門牌。</p><ul>'+list.map(x=>'<li>'+safe(x.name)+'</li>').join('')+'</ul>');
  markerLayer.addLayer(marker);markers[id]=marker;bounds.push([z.lat,z.lng]);
 }
 for(const [name,lat,lng] of dayLandmarks(ctx)){
  const m=window.L.marker([lat,lng],{icon:window.L.divIcon({className:'dd-map-landmark-wrap',html:'<span class="dd-map-landmark">◆</span>',iconSize:[22,22],iconAnchor:[11,11]})});
  m.bindPopup('<strong>'+safe(name)+'</strong><p>當日行程景點方位示意；非道路導航。</p>');
  markerLayer.addLayer(m);bounds.push([lat,lng]);
 }
 if(bounds.length>1)localMap.fitBounds(bounds,{padding:[24,24],maxZoom:12,animate:false});
 else if(bounds.length===1)localMap.setView(bounds[0],12,{animate:false});
 else localMap.setView([43.06,141.35],9,{animate:false});
 window.requestAnimationFrame(()=>localMap?.invalidateSize());
 if(pendingFocus){const match=currentPlaces.find(x=>x.id===pendingFocus.id&&x.kind===pendingFocus.kind);if(match)focusPlace(match,false);pendingFocus=null;}
}
function focusPlace(place,scroll){
 const z=ZONES[place.zone];
 if(!z)return;
 dayRoot.querySelectorAll('[data-dd-card]').forEach(el=>el.classList.toggle('is-selected',el.dataset.ddCard===place.id));
 if(!localMap){
  pendingFocus={id:place.id,kind:place.kind};
  mapStatus.textContent='已選取 '+place.name+'｜'+z.name+'。地圖尚在載入，請參考區域方位。';
 }else{
  localMap.invalidateSize();
  const latlng=[z.lat,z.lng];
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)localMap.setView(latlng,13,{animate:false});
  else localMap.flyTo(latlng,13,{duration:.75});
  if(markers[place.zone]){
   markers[place.zone].setPopupContent(popupHTML(place.name,z,place.address||place.area));
   markers[place.zone].openPopup();
  }
  mapStatus.textContent='已聚焦 '+place.name+'（'+z.name+'一帶）。標記為區域中心，建議以店家地址核對實際位置。';
 }
 if(scroll)mapPanel.scrollIntoView({behavior:'smooth',block:'center'});
}
function loadLeaflet(){
 if(window.L)return Promise.resolve();
 if(!document.querySelector('link[data-fg-leaflet]')){
  const css=document.createElement('link');css.rel='stylesheet';css.dataset.fgLeaflet='yes';
  css.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';document.head.appendChild(css);
 }
 const candidates=['https://unpkg.com/leaflet@1.9.4/dist/leaflet.js','https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js'];
 function attempt(i){
  if(i>=candidates.length)return Promise.reject(new Error('互動地圖程式載入失敗'));
  return new Promise((resolve,reject)=>{
   const s=document.createElement('script');s.src=candidates[i];s.async=true;
   s.onload=()=>window.L?resolve():reject(new Error('Leaflet 尚未啟動'));
   s.onerror=()=>reject(new Error('Leaflet 下載失敗'));
   document.head.appendChild(s);
  }).catch(()=>attempt(i+1));
 }
 return attempt(0);
}
async function initLocalMap(){
 try{
  await loadLeaflet();
  localMap=window.L.map('fg-local-map',{scrollWheelZoom:false,zoomControl:true,attributionControl:true}).setView([43.06,141.35],9);
  window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors',maxZoom:18}).addTo(localMap);
  markerLayer=window.L.layerGroup().addTo(localMap);
  window.L.control.scale({imperial:false}).addTo(localMap);
  mapStatus.textContent='◆ 當日景點　● 當地美食與選物；點選上方推薦即可在這張地圖看方位（非路線導航）。';
  refreshMap(dayContext());
 }catch(error){
  console.warn('[SapporoDayDiscovery] 地圖載入失敗',error);
  mapStatus.textContent='無法載入互動底圖；推薦卡片仍保留所在區域與店家官方資料。';
 }
}

// Broken third-party photos must not leave missing-image icons in the cards.
function photoErrorFallback(event){
 const image=event.target;
 if(!(image instanceof HTMLImageElement)||!image.closest('.dd-photo'))return;
 const figure=image.closest('.dd-photo');
 figure.classList.add('dd-photo-unavailable');
 // Do not claim a user image is displayed when the asset has not been uploaded.
 if(figure.classList.contains('dd-photo-user'))figure.querySelector('figcaption')?.remove();
 image.remove();
 let placeholder=figure.querySelector('.dd-photo-placeholder');
 if(!placeholder){
  placeholder=document.createElement('div');
  placeholder.className='dd-photo-placeholder';
  const label=document.createElement('span');
  label.textContent='HOKKAIDO / LOCAL TASTE';
  const message=document.createElement('small');
  message.textContent='照片暫時無法載入，可點來源查看';
  placeholder.append(label,message);
  figure.prepend(placeholder);
 }
}
dayRoot.addEventListener('error',photoErrorFallback,true);
overview.addEventListener('error',photoErrorFallback,true);

dayRoot.addEventListener('click',event=>{
 const more=event.target.closest('[data-dd-expand]');
 if(more){
  const category=more.dataset.ddExpand;
  if(!['breakfast','lunch','dinner','gifts'].includes(category))return;
  expanded[category]=!expanded[category];draw();
  return;
 }
 const button=event.target.closest('[data-dd-place]');
 if(!button)return;
 const place=currentPlaces.find(x=>x.id===button.dataset.ddPlace&&x.kind===button.dataset.ddKind);
 if(place)focusPlace(place,true);
});
const lastDay=document.getElementById('dd-lastday');
if(lastDay)lastDay.addEventListener('click',()=>{
 if(typeof state==='undefined'||typeof renderDays!=='function')return;
 state.day=6;renderDays();
 document.getElementById('days').scrollIntoView({behavior:'smooth',block:'start'});
});
window.addEventListener('hokkaido:daychange',()=>{
 expanded={breakfast:false,lunch:false,dinner:false,gifts:false};
 pendingFocus=null;
 draw();
});
showOverview();
draw();
// Lazy: only load Leaflet when the day map scrolls near the viewport, so the
// main MapLibre map does not compete with it on initial page load.
(function lazyLocalMap(){
 const panel=document.getElementById('fg-local-map');
 if(!panel){initLocalMap();return;}
 if(!('IntersectionObserver' in window)){initLocalMap();return;}
 let started=false;
 const observer=new IntersectionObserver(entries=>{
  if(started)return;
  if(entries.some(e=>e.isIntersecting)){started=true;observer.disconnect();initLocalMap();}
 },{rootMargin:'400px 0px'});
 observer.observe(panel);
 // Fallback: focusPlace before map loads already queues pendingFocus; also load
 // on first card interaction so clicking a place never waits for scroll.
 dayRoot.addEventListener('click',()=>{if(!started){started=true;observer.disconnect();initLocalMap();}},{once:false});
})();

})();
