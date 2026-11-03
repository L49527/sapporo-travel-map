
(function(){
'use strict';
const MEALS=[{"id":"b1","meal":"breakfast","name":"Sandria 本店","en":"SANDRIA / SANDWICHES","dish":"北海道雞蛋三明治","area":"札幌","place":"薄野・中島公園","address":"北海道札幌市中央区南8条西9丁目758-14","hours":"本店 24 小時（以店家公告為準）","day":"6/13・6/16","note":"外帶專門店，適合出發前買好，到中島公園散步野餐。","source":"https://www.sapporo.travel/en/gourmet/shop/sandria/","tag":"早起外帶"},{"id":"b2","meal":"breakfast","name":"どんぶり茶屋 二條市場店","en":"DONBURI CHAYA / SEAFOOD","dish":"北海道海鮮丼","area":"札幌","place":"二條市場","address":"北海道札幌市中央区南3条東1丁目7 二条市場","hours":"夏季約 07:30 起","day":"6/13・6/16","note":"鮭魚卵、海膽與螃蟹等海味，早上先逛市場再吃。","source":"https://donburi.jp/en/shop/nijo","tag":"市場早餐"},{"id":"b3","meal":"breakfast","name":"CAFE YOSHIMI 赤れんがテラス","en":"CAFE YOSHIMI / MORNING","dish":"晨間吐司、咖啡與輕食","area":"札幌","place":"札幌車站・赤磚廣場","address":"北海道札幌市中央区北2条西4丁目1 赤れんがテラス B1F","hours":"約 08:00 起","day":"6/13・6/18","note":"位於札幌站至大通的地下連通動線，適合需要簡單早餐的早晨。","source":"https://www.sapporo.travel/en/gourmet/feature/breakfast-in-sapporo/","tag":"咖啡館"},{"id":"b4","meal":"breakfast","name":"Northern Terrace Diner","en":"SAPPORO GRAND HOTEL / BREAKFAST","dish":"北海道食材自助早餐","area":"札幌","place":"大通・札幌格蘭飯店","address":"北海道札幌市中央区北1条西4丁目2-3 札幌グランドホテル 1F","hours":"早餐約 06:30–10:00","day":"6/15・6/17","note":"長途郊遊日可先吃飽再出發；餐費和是否對非住客開放需再確認。","source":"https://www.sapporo.travel/en/gourmet/feature/breakfast-in-sapporo/","tag":"飯店早餐"},{"id":"l1","meal":"lunch","name":"Soup Curry GARAKU 札幌本店","en":"GARAKU / SOUP CURRY","dish":"香料湯咖哩與北海道蔬菜","area":"札幌","place":"大通・創成川東","address":"北海道札幌市中央区南3条東2丁目6-1 プレサント南3東2 B1F","hours":"午餐約 11:30 起","day":"6/13・6/16","note":"高人氣湯咖哩名店，熱門時段需預留候位時間。","source":"https://visit.sapporo.travel/tw/discover/cuisine/soup-curry/","tag":"札幌代表味"},{"id":"l2","meal":"lunch","name":"根室花まる JR TOWER 店","en":"NEMURO HANAMARU / SUSHI","dish":"北海道迴轉壽司與季節鮮魚","area":"札幌","place":"札幌站・Stellar Place","address":"北海道札幌市中央区北5条西4丁目 JRタワー ステラプレイス 6F","hours":"約 11:00 起","day":"6/13・6/16","note":"車站直通、動線方便；容易排隊，適合行程彈性的一天。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"車站直達"},{"id":"l3","meal":"lunch","name":"らーめん 信玄 南6条店","en":"RAMEN SHINGEN / MISO","dish":"濃郁札幌系味噌拉麵","area":"札幌","place":"薄野","address":"北海道札幌市中央区南6条西8丁目8-2","hours":"約 11:00 起","day":"6/13・6/16","note":"份量足、候位人氣高；趕祭典場次時請準備替代店。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"人氣拉麵"},{"id":"l4","meal":"lunch","name":"おたる政寿司 本店","en":"OTARU MASAZUSHI / SUSHI","dish":"小樽職人握壽司與海鮮","area":"小樽","place":"小樽・壽司屋通","address":"北海道小樽市花園1丁目1-1","hours":"午餐約 11:00–15:00","day":"6/14","note":"較適合安排一頓正式海鮮午餐；需確認預約和預算。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"小樽午餐"},{"id":"l5","meal":"lunch","name":"若鶏時代 なると 本店","en":"NARUTO / HALF FRIED CHICKEN","dish":"若雞半身炸雞","area":"小樽","place":"小樽・稻穗","address":"北海道小樽市稲穂3丁目16-13","hours":"約 11:00 起","day":"6/14","note":"不想再吃海鮮時的經典選擇，可與同行者分食。","source":"https://www.sapporo.travel/en/gourmet/","tag":"小樽名物"},{"id":"l6","meal":"lunch","name":"くまげら","en":"KUMAGERA / FURANO","dish":"富良野和牛與鄉土料理","area":"富良野","place":"富良野車站周邊","address":"北海道富良野市日の出町3-22","hours":"約 11:30 起（休息日需確認）","day":"6/15","note":"長途美瑛自駕日僅列備選；如果為了用餐繞路，優先保留青池景點。","source":"https://www.visit-hokkaido.jp/en/","tag":"郊遊備選"},{"id":"l7","meal":"lunch","name":"松尾ジンギスカン 大通南1条店","en":"MATSUO / JINGISUKAN","dish":"醬漬成吉思汗烤羊肉","area":"札幌","place":"大通・西4丁目","address":"北海道札幌市中央区南1条西4丁目16-1 南舘ビル 1F","hours":"午餐約 11:00–15:00","day":"6/16","note":"中午也能品嚐北海道烤羊肉，地點靠近大通行程。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"當地肉料理"},{"id":"d1","meal":"dinner","name":"成吉思汗 だるま 本店","en":"DARUMA / JINGISUKAN","dish":"傳統炭火烤羊肉","area":"札幌","place":"薄野","address":"北海道札幌市中央区南5条西4丁目","hours":"晚間約 17:00 起","day":"6/12・6/16","note":"經典吧檯式烤羊肉，熱門時段排隊；座位型式不適合所有旅伴。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"經典名店"},{"id":"d2","meal":"dinner","name":"海味はちきょう 本店","en":"HACHIKYO / SEAFOOD IZAKAYA","dish":"鮭魚卵『つっこ飯』與海鮮","area":"札幌","place":"薄野","address":"北海道札幌市中央区南3条西3丁目 都ビル1F","hours":"平日約 18:00 起；週日較早","day":"6/12・6/16","note":"以鮭魚卵飯聞名，適合當作一晚的主題餐；建議事先詢問預約。","source":"https://hachikyo.com/shop/honten","tag":"值得預訂"},{"id":"d3","meal":"dinner","name":"サッポロビール園","en":"SAPPORO BEER GARDEN","dish":"北海道烤羊肉與歷史建築餐廳","area":"札幌","place":"札幌站東北側","address":"北海道札幌市東区北7条東9丁目2-10","hours":"午晚餐營業，夜間約至 21:00","day":"6/16・6/17","note":"適合安排團體晚餐；餐廳館別、座位與用餐時段請先確認。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"特色體驗"},{"id":"d4","meal":"dinner","name":"けやき すすきの本店","en":"KEYAKI / MISO RAMEN","dish":"札幌味噌拉麵","area":"札幌","place":"薄野","address":"北海道札幌市中央区南6条西3丁目 陸ビル1F","hours":"營業至深夜，實際時段請確認","day":"6/12・6/13","note":"晚歸時可彈性吃一碗熱拉麵，適合不想花太久吃正餐的夜晚。","source":"https://www.sapporo.travel/en/gourmet/","tag":"夜間友善"},{"id":"d5","meal":"dinner","name":"札幌かに本家 札幌駅前本店","en":"KANI HONKE / CRAB COURSE","dish":"螃蟹會席與鍋物","area":"札幌","place":"札幌站","address":"北海道札幌市中央区北3条西2丁目1-18","hours":"晚餐供應；需確認套餐與預訂","day":"6/16","note":"想正式吃一次北海道螃蟹料理可列入，預算通常高於一般拉麵。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"正式晚餐"},{"id":"d6","meal":"dinner","name":"Soup Curry GARAKU 札幌本店","en":"GARAKU / EVENING CURRY","dish":"香料雞腿與蔬菜湯咖哩","area":"札幌","place":"大通・創成川東","address":"北海道札幌市中央区南3条東2丁目6-1 プレサント南3東2 B1F","hours":"晚餐約 17:00–20:30","day":"6/12・6/13","note":"午餐排不到時，可改列夜間候補；並非第二間分店。","source":"https://visit.sapporo.travel/tw/discover/cuisine/soup-curry/","tag":"午晚皆可"},{"id":"d7","meal":"dinner","name":"松尾ジンギスカン 大通南1条店","en":"MATSUO / GRILLED LAMB","dish":"醬漬羊肉燒烤套餐","area":"札幌","place":"大通・西4丁目","address":"北海道札幌市中央区南1条西4丁目16-1 南舘ビル 1F","hours":"晚餐約 16:30–22:30","day":"6/12・6/16","note":"與達摩不同的醬漬烤法，適合想有較完整餐桌用餐體驗的晚餐。","source":"https://visit.sapporo.travel/discover/cuisine/","tag":"烤羊肉候補"}];
const GIFTS=[{"id":"s1","name":"白色戀人・ISHIYA 札幌大通本店","en":"SHIROI KOIBITO","pick":"白巧克力夾心餅乾、美冬","area":"札幌","address":"北海道札幌市中央区大通西4丁目6-1 札幌大通西4ビル 1F","carry":"常溫伴手禮／同事分送","tip":"6/13 大通公園周邊順買。","source":"https://www.ishiya.co.jp/odori/index.html"},{"id":"s2","name":"六花亭 札幌本店","en":"ROKKATEI","pick":"MARUSEI 奶油葡萄夾心","area":"札幌","address":"北海道札幌市中央区北4条西6丁目3-3","carry":"留意保存溫度與期限","tip":"札幌站周邊散步可順買。","source":"https://www.rokkatei.co.jp/shop/sapporo/"},{"id":"s3","name":"北菓樓 札幌本館","en":"KITAKARO","pick":"北海道開拓米菓、年輪蛋糕","area":"札幌","address":"北海道札幌市中央区北1条西5丁目1-2","carry":"常溫禮盒為主","tip":"特色歷史建築，適合 6/16 市區購物。","source":"https://www.kitakaro.com/ext/tenpo/sapporohonkan.html"},{"id":"s4","name":"ROYCE' 大丸札幌店","en":"ROYCE' CHOCOLATE","pick":"生巧克力、洋芋片巧克力","area":"札幌","address":"北海道札幌市中央区北5条西4丁目7 大丸札幌店 B1F","carry":"生巧克力須保冷","tip":"返台前買較易控制保冷時間。","source":"https://www.royce.com/"},{"id":"s5","name":"KINOTOYA BAKE 地下街店","en":"KINOTOYA BAKE","pick":"現烤起司塔、北海道牛奶霜淇淋","area":"札幌","address":"北海道札幌市中央区南2条西3丁目 さっぽろ地下街ポールタウン","carry":"現吃較適合","tip":"逛狸小路、大通時補充甜點。","source":"https://www.sapporo.travel/en/gourmet/"},{"id":"s6","name":"LeTAO 本店","en":"LETAO / OTARU","pick":"Double Fromage 雙層起司蛋糕","area":"小樽","address":"北海道小樽市堺町7-16","carry":"需留意冷藏／冷凍","tip":"6/14 小樽堺町通必經甜點站。","source":"https://www.letao.jp/"},{"id":"s7","name":"かま栄 工場直売店","en":"KAMAEI / OTARU","pick":"現炸魚板、蒲鉾禮盒","area":"小樽","address":"北海道小樽市堺町3-7","carry":"部分商品需冷藏","tip":"適合 6/14 邊走邊吃。","source":"https://www.sapporo.travel/en/gourmet/"},{"id":"s8","name":"美瑛選果 新千歲機場店","en":"BIEI SENKA","pick":"美瑛玉米麵包與農產品點心","area":"機場","address":"北海道千歳市美々 新千歳空港国内線ターミナル 2F","carry":"麵包適合當日食用","tip":"分批出爐且可能售完，不為購買而壓縮登機時間。","source":"https://bieisenka.jp/about/"},{"id":"s9","name":"北海道本舗 綜合土產店","en":"HOKKAIDO HONPO / AIRPORT","pick":"薯條三兄弟、夕張哈密瓜果凍等","area":"機場","address":"北海道千歳市美々 新千歳空港 国内線ターミナル 2F","carry":"常溫盒裝商品","tip":"6/18 返回機場時集中採購。","source":"https://www.hokkaido-airports.com/en/new-chitose/"},{"id":"s10","name":"小樽オルゴール堂 本館","en":"OTARU MUSIC BOX MUSEUM","pick":"手工音樂盒、特色生活選物","area":"小樽","address":"北海道小樽市住吉町4-1","carry":"易碎品需妥善包裝","tip":"不想只買食品，可挑一件小樽紀念品。","source":"https://www.sapporo.travel/en/"}];
const EXTRA_MEALS=[{"id":"x-yoi","meal":"lunch","name":"柿崎商店 海鮮工房","en":"KAKIZAKI / YOICHI","dish":"余市海鮮丼、現撈海產定食","area":"余市","place":"余市站前","address":"北海道余市郡余市町黒川町7丁目25","hours":"10:00–18:00（以當年公告為準）","day":"6/14","note":"余市站前名店；如果 6/14 預定在小樽吃壽司，兩者擇一，不要連排兩餐。","source":"https://yoichi-kankoukyoukai.com/spot_food/%E6%B5%B7%E9%AE%AE%E3%83%BB%E5%AF%BF%E5%8F%B8/","tag":"余市必吃","zone":"yoichi","index":2},{"id":"x-biei","meal":"lunch","name":"RESTAURANT ASPERGES","en":"ASPERGES / BIEI","dish":"美瑛當季蔬菜法式料理","area":"美瑛","place":"美瑛選果","address":"北海道上川郡美瑛町大町2丁目","hours":"午餐約 11:00–14:00，季節營業","day":"6/15","note":"需預留較長用餐時間；6/15 長途一日巴士團不適合另外安排此餐，僅供自駕自由調整。","source":"https://www.biei-hokkaido.jp/ja/facility/restaurant-asperges","tag":"美瑛特色","zone":"biei","index":3,"carOnly":true},{"id":"x-tomita","meal":"lunch","name":"とみたメロンハウス","en":"FURANO MELON HOUSE","dish":"富良野哈密瓜與哈密瓜霜淇淋","area":"富良野","place":"中富良野・富田農場附近","address":"北海道空知郡中富良野町宮町3-32","hours":"季節營業，6月營運與果品供應須核對","day":"6/15","note":"適合在富田農場附近短暫休息；如果參加一日巴士團，只有時間許可才順買。","source":"https://www.tomita-m.co.jp/","tag":"季節甜點","zone":"tomita","index":3},{"id":"x-nobo","meal":"lunch","name":"登別温泉市場","en":"ONSEN ICHIBA / NOBORIBETSU","dish":"海鮮丼、烤貝類、溫泉蛋","area":"登別","place":"登別溫泉街","address":"北海道登別市登別温泉町50","hours":"約 10:30–21:00","day":"6/17","note":"位於地獄谷周邊溫泉街，可搭配午餐；用餐與泡湯時間請按當日交通取捨。","source":"https://noboribetsu-spa.jp/spot/spot0169/","tag":"溫泉街","zone":"noboribetsu","index":5},{"id":"x-shik","meal":"lunch","name":"支笏湖 レークサイドキッチン トントン","en":"LAKESIDE KITCHEN TONTON","dish":"支笏湖姬鱒（チップ）料理","area":"支笏湖","place":"支笏湖遊客中心附近","address":"北海道千歳市支笏湖温泉番外地","hours":"約 9:00–17:00","day":"6/17","note":"支笏湖漁協列出的姬鱒餐廳；只有 6/17 方案實際到支笏湖才顯示。","source":"https://shikotsuko-gyokyo.org/shop/","tag":"湖畔名物","zone":"shikotsu","index":5},{"id":"x-shako","meal":"lunch","name":"お食事処 みさき","en":"MISAKI / SHAKOTAN UNI","dish":"積丹天然海膽丼（6–8 月為產季）","area":"積丹","place":"積丹・日司町","address":"北海道積丹郡積丹町日司町236","hours":"2026 年參考 9:00–15:00；季節營業","day":"6/17","note":"熱門且可能提前售完；參加巴士團不一定能在店前停靠，不要假設可以離團用餐。","source":"https://osyokujidokoromisaki.com/","tag":"積丹名店","zone":"shakotan","index":5},{"id":"x-joz","meal":"lunch","name":"Furukawa Fruit J・glacée","en":"J-GLACEE / JOZANKEI","dish":"北海道蘋果派、季節水果甜點","area":"定山溪","place":"定山溪溫泉街","address":"北海道札幌市南区定山渓温泉西4丁目356","hours":"9:30–17:00（不定期休）","day":"6/17","note":"定山溪散步時的甜點休息點，官方觀光協會收錄；下午較適合。","source":"https://jozankei.jp/tw/store/j-glacee/","tag":"溪谷甜點","zone":"jozankei","index":5}];
const EXTRA_GIFTS=[{"id":"gx-yoi","name":"柿崎商店・海產選物","en":"KAKIZAKI / YOICHI","pick":"余市水產品及地方食品","area":"余市","address":"北海道余市郡余市町黒川町7丁目25","carry":"生鮮需冷藏且入台可能有限制","tip":"6/14 余市站前；優先選可合法攜帶的常溫產品。","source":"https://yoichi-kankoukyoukai.com/kaisanbutsu_special/","zone":"yoichi","index":2},{"id":"gx-biei","name":"美瑛選果・美瑛町店","en":"BIEI SENKA / BIEI","pick":"美瑛小麥麵包、餅乾及地方農產品加工品","area":"美瑛","address":"北海道上川郡美瑛町大町2丁目","carry":"常溫加工點心比較好攜帶","tip":"6/15 自駕順路較適合；觀光巴士行程未必停靠。","source":"https://www.biei-hokkaido.jp/ja/facility/biei-vegetable-market","zone":"biei","index":3,"carOnly":true},{"id":"gx-furano","name":"富田農場周邊選物","en":"FARM TOMITA / NAKAFURANO","pick":"富良野花香周邊紀念品、當季甜點","area":"富良野","address":"北海道空知郡中富良野町基線北15号","carry":"食品先看保存溫度；紀念品方便攜帶","tip":"6/15 限真正有停靠富田農場時購買，勿為購物延誤巴士。","source":"https://www.farm-tomita.co.jp/","zone":"tomita","index":3},{"id":"gx-nobo","name":"登別温泉市場・地方土產","en":"ONSEN ICHIBA / GIFTS","pick":"登別地方加工食品、溫泉蛋與甜點","area":"登別","address":"北海道登別市登別温泉町50","carry":"常溫包裝較方便；蛋類食品入台先核對檢疫","tip":"6/17 登別溫泉街就地選購。","source":"https://noboribetsu-spa.jp/spot/spot0169/","zone":"noboribetsu","index":5},{"id":"gx-shako","name":"食堂 鱗晃・當地伴手禮角落","en":"RINKOU / SHAKOTAN","pick":"積丹地方食品及紀念品","area":"積丹","address":"北海道積丹郡積丹町神威岬周邊","carry":"確認個別商品保存條件及入台規定","tip":"若當天經過神威岬周邊再選購，先以景觀及巴士班次為優先。","source":"https://www.kanko-shakotan.jp/food/","zone":"shakotan","index":5},{"id":"gx-joz","name":"J・glacée 手工蘋果派","en":"JOZANKEI / APPLE PIE","pick":"定山溪蘋果派、當季水果甜點","area":"定山溪","address":"北海道札幌市南区定山渓温泉西4丁目356","carry":"現吃或當日享用較適合","tip":"6/17 定山溪散步時順道購買。","source":"https://jozankei.jp/tw/store/j-glacee/","zone":"jozankei","index":5},{"id":"gx-shik","name":"メメール・湖畔甜點","en":"MEMERE / LAKE SHIKOTSU","pick":"北海道乳品水果製作的義式冰淇淋","area":"支笏湖","address":"北海道千歳市支笏湖温泉","carry":"當地現吃，非適合長途攜帶的伴手禮","tip":"6/17 支笏湖湖畔短暫停留時選購。","source":"https://shikotsuko-gyokyo.org/shop/","zone":"shikotsu","index":5}];

const ZONES={
susukino:{name:'薄野',lat:43.0538,lng:141.3535},odori:{name:'大通公園',lat:43.0604,lng:141.3542},station:{name:'札幌站',lat:43.0687,lng:141.3508},nijo:{name:'二條市場',lat:43.0582,lng:141.3602},
otaru:{name:'小樽站周邊',lat:43.1973,lng:141.0011},sakaimachi:{name:'小樽堺町通',lat:43.1908,lng:141.0082},yoichi:{name:'余市站周邊',lat:43.1953,lng:140.7942},
furano:{name:'富良野站周邊',lat:43.3479,lng:142.392},tomita:{name:'中富良野・富田農場',lat:43.4170,lng:142.4257},biei:{name:'美瑛站周邊',lat:43.5910,lng:142.4620},
noboribetsu:{name:'登別溫泉街',lat:42.4914,lng:141.1444},shikotsu:{name:'支笏湖畔',lat:42.7712,lng:141.4030},shakotan:{name:'積丹・日司町',lat:43.3270,lng:140.4810},jozankei:{name:'定山溪溫泉街',lat:42.9650,lng:141.1666},airport:{name:'新千歲機場',lat:42.7746,lng:141.6926}
};
const MEAL_ZONE={b1:'susukino',b2:'nijo',b3:'station',b4:'station',l1:'nijo',l2:'station',l3:'susukino',l4:'otaru',l5:'otaru',l6:'furano',l7:'odori',d1:'susukino',d2:'susukino',d3:'station',d4:'susukino',d5:'station',d6:'nijo',d7:'odori'};
const GIFT_ZONE={s1:'odori',s2:'station',s3:'odori',s4:'station',s5:'susukino',s6:'sakaimachi',s7:'sakaimachi',s8:'airport',s9:'airport',s10:'sakaimachi'};
const GIFT_DAYS={0:['s5'],1:['s1','s2','s3','s5'],2:['s6','s7','s10'],3:[],4:['s1','s2','s3','s4','s5'],5:[],6:['s2','s4','s8','s9']};
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
const FEATURED={breakfast:2,lunch:3,dinner:3,gifts:2};
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
 day===3?['furano','tomita','biei']:
 day===4?['odori','nijo','station','susukino']:
 day===6?['station','airport']:[];
 let label=LABELS[day];
 let detail='';
 if(day===5&&typeof getDay==='function'){
   const itinerary=getDay(5);
   const words=[itinerary.title,itinerary.desc,...itinerary.stops.map(s=>s[1])].join(' ');
   if(/登別/.test(words))zones.push('noboribetsu');
   if(/支笏湖/.test(words))zones.push('shikotsu');
   if(/積丹|神威岬/.test(words))zones.push('shakotan');
   if(/定山溪|定山渓/.test(words))zones.push('jozankei');
   if(/余市/.test(words))zones.push('yoichi');
   if(/小樽/.test(words))zones.push('otaru','sakaimachi');
   if(!zones.length)zones.push('station');
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
 const date='6/'+String(12+ctx.day);
 const breakfasts=MEALS.filter(p=>p.meal==='breakfast'&&p.day.includes(date))
   .map(p=>Object.assign({},p,{zone:MEAL_ZONE[p.id]}))
   .filter(p=>p.zone&&ctx.zones.includes(p.zone));
 const choices=[];
 const key=ctx.day===5?'5'+state.plan:String(ctx.day);
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
  ...GIFTS.filter(p=>(GIFT_DAYS[ctx.day]||[]).includes(p.id)).map(p=>Object.assign({},p,{zone:GIFT_ZONE[p.id]})),
  ...EXTRA_GIFTS.filter(p=>p.index===ctx.day&&(!p.carOnly||state.car!==0))
 ].filter(p=>p.zone&&ctx.zones.includes(p.zone));
 return {meals:[...breakfasts,...choices],gifts};
}

/* Images have been sourced from individually linked Wikimedia Commons file pages.
 * A representative dish is not claimed to be a photograph from the listed store.
 * Photos of products or interiors are labeled separately. */
const PHOTO_LIBRARY={"egg":{"file":"Japanese egg sandwich in a sandwich case.jpg","author":"Quercus acuta","license":"CC BY-SA 4.0","label":"料理示意照"},"seafood":{"file":"Seafood bowl.jpg","author":"Douglas P. Perkins","license":"CC0 1.0","label":"料理示意照"},"sushi":{"file":"2009, sushi in Otaru -81219.jpeg","author":"Syced","license":"CC0 1.0","label":"小樽料理示意照"},"soup":{"file":"A soup curry dish in Sapporo - Flickr - odako1.jpg","author":"Koichi Oda","license":"CC BY-SA 2.0","label":"札幌料理示意照"},"ramen":{"file":"Sapporo miso ramen.jpg","author":"Schellack","license":"CC BY 3.0","label":"札幌料理示意照"},"lamb":{"file":"Genghis Khan dish.jpg","author":"Douglas P. Perkins","license":"CC0 1.0","label":"料理示意照"},"matsuo":{"file":"Matsuo Jingisukan.jpg","author":"Totti","license":"CC BY-SA 4.0","label":"品牌料理實拍（非指定分店）"},"uni":{"file":"UniIkuraDon.jpg","author":"Douglas P. Perkins","license":"CC BY 3.0","label":"料理示意照"},"white":{"file":"Shiroi koibito.jpg","author":"Fk","license":"CC BY-SA 3.0","label":"實際商品照片"},"rokkatei":{"file":"Marusei butter sand of Rokkatei (1).jpg","author":"毒島みるく","license":"CC0 1.0","label":"實際商品照片"},"royce":{"file":"Royce chocolate.jpg","author":"Antonio733","license":"CC BY-SA 4.0","label":"實際商品照片"},"kitakaro":{"file":"KITAKARO Sapporo Honkan interior 201904.jpg","author":"MIKI Yoshihito","license":"CC BY 2.0","label":"札幌本館實景"},"kinotoya":{"file":"KINOTOYA, Sapporo, Hokkaido, Japan, 札幌, 北海道, 日本, 焼きたてチーズタルト, きのとや, 新千歳空港店, さっぽろし, ほっかいどう, にっぽん, にほん (16720983681).jpg","author":"bryan...","license":"CC BY-SA 2.0","label":"品牌商品實景（非指定分店）"},"letao":{"file":"LeTAO-1.jpg","author":"Evelyn-rose","license":"CC0 1.0","label":"品牌門市示意（非小樽本店）"},"music":{"file":"Otaru Music Box Museum interior.jpg","author":"Liandrei","license":"CC BY-SA 4.0","label":"小樽店內實景"},"pie":{"file":"IMG small apple pie.jpg","author":"LostplanetKD73","license":"CC0 1.0","label":"蘋果派示意照"},"darumaReal":{"file":"Yakiniku on braziers at 成吉思汗 だるま in Sapporo, Japan (244).jpg","author":"Savannah Rivka","license":"CC BY-SA 4.0","label":"Daruma 本店實拍"},"roeEditorial":{"src":"https://images.unsplash.com/photo-1761095596580-c96bd32f84a2?auto=format&fit=crop&w=1100&q=82","creditUrl":"https://unsplash.com/photos/close-up-of-bright-orange-salmon-roe-in-a-tin-_eyJJf8Bwrc","author":"Madeline Liu","license":"Unsplash License","label":"鮭魚卵特寫／非店家實拍"},"ramenEditorial":{"src":"https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1100&q=82","creditUrl":"https://unsplash.com/photos/ramen-dish-qom5MPOER-I","author":"Bon Vivant","license":"Unsplash License","label":"拉麵料理示意／非店家實拍"},"seafoodEditorial":{"src":"https://images.unsplash.com/photo-1752878821092-a0a77c6bd2f8?auto=format&fit=crop&w=1100&q=82","creditUrl":"https://unsplash.com/photos/sushi-bowl-with-various-fish-and-garnishes-GI_3suAJ-9Y","author":"Kris Tian","license":"Unsplash License","label":"海鮮丼示意／非店家實拍"},"lambCooked":{"file":"Sheep and cloud hill 2023-05-20(2) as.jpg","author":"Araisyohei","license":"CC BY 4.0","label":"北海道成吉思汗烤肉示意"}};
const PHOTO_BY_ID={"b1":"egg","b2":"seafoodEditorial","b3":"egg","b4":"egg","l1":"soup","l2":"sushi","l3":"ramenEditorial","l4":"sushi","l6":"uni","l7":"matsuo","d1":"darumaReal","d2":"roeEditorial","d3":"lambCooked","d4":"ramenEditorial","d5":"seafoodEditorial","d6":"soup","d7":"matsuo","x-yoi":"seafoodEditorial","x-biei":null,"x-tomita":null,"x-nobo":"seafoodEditorial","x-shik":"seafood","x-shako":"uni","x-joz":"pie","s1":"white","s2":"rokkatei","s3":"kitakaro","s4":"royce","s5":"kinotoya","s6":"letao","s7":null,"s8":null,"s9":null,"s10":"music","gx-yoi":"seafood","gx-biei":null,"gx-furano":null,"gx-nobo":null,"gx-shako":"uni","gx-joz":"pie","gx-shik":null};
const SHOP_HOURS={"s1":{"display":"10:00–20:00","source":"https://www.ishiya.co.jp/shop/001352.html"},"s2":{"display":"10:00–17:30；喫茶 10:30–16:30（週三休）","source":"https://www.rokkatei.co.jp/shop/sapporo/"},"s3":{"display":"10:00–18:00；咖啡廳 11:00–16:00","source":"https://www.sapporo.travel/gourmet/shop/shop_51-2/"},"s4":{"display":"10:00–20:00（依百貨休館日）","source":"https://www.royce.com/brand/shop/detail/?no=101"},"s5":{"display":"10:00–21:00（末點 20:45）","source":"https://www.sapporo-chikagai.jp/shop/single/176"},"s6":{"display":"09:00–18:00；咖啡廳最末點 17:30","source":"https://otaru.gr.jp/shop/letao_honten"},"s7":{"display":"5–10月 平日 09:00–18:00、週末 09:00–19:00","source":"https://kamaei.co.jp/store_introduce/chokubai/"},"s8":{"display":"08:00–19:00","source":"https://bieisenka.jp/about/"},"s9":{"display":"營業時間待核實（請查機場官方商店列表）","source":"https://www.hokkaido-airports.com/ja/new-chitose/spend/shop/"},"s10":{"display":"09:00–18:00（2、3 樓 17:45 關閉）","source":"https://www.otaru-orgel.co.jp/shop"},"gx-yoi":{"display":"營業時間請查店家最新公告","source":"https://yoichi-kankoukyoukai.com/kaisanbutsu_special/"},"gx-biei":{"display":"6月營業時間請查店家公告","source":"https://bieisenka.jp/about/"},"gx-furano":{"display":"季節營業；開放時間以官方為準","source":"https://www.farm-tomita.co.jp/"},"gx-nobo":{"display":"約 10:30–21:00（參考；請查店家）","source":"https://noboribetsu-spa.jp/spot/spot0169/"},"gx-shako":{"display":"依當年季節營業公告","source":"https://www.kanko-shakotan.jp/food/"},"gx-joz":{"display":"09:30–17:00（不定期公休）","source":"https://jozankei.jp/tw/store/j-glacee/"},"gx-shik":{"display":"營業時間待確認","source":"https://shikotsuko-gyokyo.org/shop/"}};
function shopHours(p){
 const detail=SHOP_HOURS[p.id];
 return {display:detail?.display||p.hours||'營業時間待確認',source:detail?.source||p.source};
}
function hoursHTML(p){
 const h=shopHours(p);
 return '<p class="dd-shop-hours"><span aria-hidden="true">◷</span> <span>營業時間（參考）</span> <strong>'+safe(h.display)+'</strong> '+
 '<a href="'+safe(h.source)+'" target="_blank" rel="noopener noreferrer" aria-label="查看'+safe(p.name)+'官方營業時間">核對 ↗</a></p>';
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
const TABELOG_DIRECT={"d1":"https://tabelog.com/hokkaido/A0101/A010103/1000007/","d2":"https://tabelog.com/hokkaido/A0101/A010103/1003784/","l1":"https://tabelog.com/hokkaido/A0101/A010102/1082918/","d6":"https://tabelog.com/hokkaido/A0101/A010102/1082918/","l2":"https://tabelog.com/hokkaido/A0101/A010101/1001102/","l3":"https://tabelog.com/hokkaido/A0101/A010103/1002793/","l4":"https://tabelog.com/hokkaido/A0106/A010601/1000209/","l5":"https://tabelog.com/hokkaido/A0106/A010601/1000906/","d4":"https://tabelog.com/hokkaido/A0101/A010103/1000150/","l7":"https://tabelog.com/hokkaido/A0101/A010102/1002898/","d7":"https://tabelog.com/hokkaido/A0101/A010102/1002898/","x-yoi":"https://tabelog.com/hokkaido/A0106/A010602/1000224/","x-shik":"https://tabelog.com/hokkaido/A0107/A010701/1031081/","citySuage":"https://tabelog.com/hokkaido/A0101/A010103/1006004/","cityIchigen":"https://tabelog.com/hokkaido/A0101/A010103/1025072/"};
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
function verifiedRestaurantPhoto(p){
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
 return '<button type="button" class="dd-map-action" data-dd-place="'+safe(p.id)+'" data-dd-kind="'+kind+'" aria-label="在當日地圖查看'+safe(p.name)+'所在區域">⌖ 在地圖查看</button>';
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
 '<div class="dd-pick-kicker">LOCAL FINDS / '+safe(p.area)+'</div>'+
 '<h5>'+safe(p.name)+'</h5><div class="dd-pick-en">'+safe(p.en)+'</div>'+
 '<p class="dd-pick-feature">'+safe(p.pick)+'</p>'+hoursHTML(p)+
 '<p class="dd-pick-detail">'+safe(p.tip)+'　'+safe(p.carry)+'</p>'+
 '<div class="dd-pick-foot">'+focusButton(p,'gift')+'<a href="'+safe(p.source)+'" target="_blank" rel="noopener noreferrer">資料來源 ↗</a></div></article>';
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
 if(ctx.day===0)contextExtra='｜首日午後抵達，午餐僅供航班較早時備選。';
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
 '<p class="dd-empty">當天暫無順路地方選物，可安排最後一天集中採買。</p>';
 updateMore(giftMore,'gifts',gifts.length,FEATURED.gifts);
 counts.textContent='午餐 '+numbers.lunch+' 間備選 · 晚餐 '+numbers.dinner+' 間備選 · 地方名產 '+gifts.length+' 處｜餐廳是候選，不必全部排入行程。';
 if(localMap)refreshMap(ctx);
}

function showOverview(){
 const ids=['s1','s2','s4'];
 document.getElementById('dd-overview-list').innerHTML=ids.map((id,i)=>{
  const p=GIFTS.find(x=>x.id===id);
  return '<article class="dd-overview-item">'+photoHTML(p)+
   '<span class="dd-overview-num">0'+(i+1)+'</span><div class="dd-overview-copy"><h3>'+safe(p.name)+'</h3><p class="dd-overview-en">'+safe(p.en)+'</p>'+
   '<p>'+safe(p.pick)+'</p>'+hoursHTML(p)+'<small>'+safe(p.carry)+' · '+safe(p.tip)+'</small></div>'+
   '<a class="dd-overview-link" href="'+safe(p.source)+'" target="_blank" rel="noopener noreferrer">官方資訊 ↗</a></article>';
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
initLocalMap();

})();
