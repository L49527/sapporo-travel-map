
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
const root=document.getElementById('food-guide');
if(!root)return;
const mealGrid=document.getElementById('fg-meals');
const giftGrid=document.getElementById('fg-gifts');
const countEl=document.getElementById('fg-count');
const dateButtons=document.getElementById('fg-days');
const dayTitle=document.getElementById('fg-day-title');
const dayDesc=document.getElementById('fg-day-desc');
const regionEl=document.getElementById('fg-region-label');
const mapStatus=document.getElementById('fg-map-status');
const tabs=Array.from(root.querySelectorAll('[data-fg-meal]'));
let meal='all',localMap=null,markerLayer=null,markers={},currentPlaces=[];
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
 const date='6/'+String(12+ctx.day);
 const meals=[
 ...MEALS.filter(p=>p.day.includes(date)).map(p=>Object.assign({},p,{zone:MEAL_ZONE[p.id]})),
 ...EXTRA_MEALS.filter(p=>p.index===ctx.day&&(!p.carOnly||state.car!==0))
 ];
 const dishes=meals.filter(p=>p.zone&&ctx.zones.includes(p.zone));
 const gifts=[
 ...GIFTS.filter(p=>(GIFT_DAYS[ctx.day]||[]).includes(p.id)).map(p=>Object.assign({},p,{zone:GIFT_ZONE[p.id]})),
 ...EXTRA_GIFTS.filter(p=>p.index===ctx.day&&(!p.carOnly||state.car!==0))
 ].filter(p=>p.zone&&ctx.zones.includes(p.zone));
 return {meals:dishes,gifts};
}
function focusButton(p){
 return '<button type="button" class="fg-map" data-fg-focus="'+safe(p.zone)+'" data-fg-name="'+safe(p.name)+'" aria-label="在本站地圖查看'+safe(p.name)+'的所在區域">⌖ 在地圖看方位</button>';
}
function foodCard(p,i){
 return '<article class="fg-card" data-fg-card="'+safe(p.zone)+'">'+
 '<div class="fg-card-top"><span class="fg-no">'+String(i+1).padStart(2,'0')+'</span><span class="fg-card-tag">'+safe(p.tag)+'</span></div>'+
 '<h3>'+safe(p.name)+'</h3><p class="fg-en">'+safe(p.en)+'</p>'+
 '<p class="fg-dish">'+safe(p.dish)+'</p><p class="fg-location">⌖ '+safe(p.place)+' · '+safe(p.area)+'</p>'+
 '<p class="fg-day">'+safe(p.hours)+'</p><p class="fg-detail">'+safe(p.note)+'</p>'+
 '<div class="fg-card-footer">'+focusButton(p)+'<a class="fg-directions" href="'+safe(p.source)+'" target="_blank" rel="noopener noreferrer">官方／觀光資料 ↗</a></div></article>';
}
function giftCard(p,i){
 return '<article class="fg-gift" data-fg-card="'+safe(p.zone)+'"><span class="fg-no">'+String(i+1).padStart(2,'0')+'</span><div><h4>'+safe(p.name)+'</h4>'+
 '<small>'+safe(p.en)+' · '+safe(p.area)+'</small>'+
 '<p class="fg-pick">'+safe(p.pick)+'</p><p>'+safe(p.carry)+'　·　'+safe(p.tip)+'</p>'+
 '<div class="fg-gift-actions">'+focusButton(p)+'<a href="'+safe(p.source)+'" target="_blank" rel="noopener noreferrer">來源資料 ↗</a></div></div></article>';
}
function draw(){
 const ctx=dayContext(),entries=allFor(ctx);
 const items=entries.meals.filter(p=>meal==='all'||p.meal===meal);
 currentPlaces=[...items.map(p=>Object.assign({},p,{kind:'meal'})),...entries.gifts.map(p=>Object.assign({},p,{kind:'gift'}))];
 dateButtons.querySelectorAll('button').forEach((btn,i)=>{const active=i===ctx.day;btn.setAttribute('aria-pressed',String(active));});
 dayTitle.textContent='DAY '+String(ctx.day+1).padStart(2,'0')+'｜'+ctx.label;
 dayDesc.textContent=ctx.detail;
 regionEl.textContent='當日區域：'+ctx.zones.map(z=>ZONES[z]?.name||z).join('、');
 tabs.forEach(t=>{const on=t.dataset.fgMeal===meal;t.setAttribute('aria-pressed',String(on));const k=t.dataset.fgMeal;t.textContent=({breakfast:'早餐',lunch:'午餐',dinner:'晚餐',all:'全部'})[k]+' · '+entries.meals.filter(p=>k==='all'||p.meal===k).length;});
 mealGrid.innerHTML=items.length?items.map(foodCard).join(''):'<p class="fg-empty">當日此餐別暫無精選名店。可選「全部」或切換日期。</p>';
 giftGrid.innerHTML=entries.gifts.length?entries.gifts.map(giftCard).join(''):'<p class="fg-empty">當日暫無確定順路的伴手禮店家；建議回札幌或機場集中購買。</p>';
 countEl.textContent=items.length+' 間當日餐飲、'+entries.gifts.length+' 個當地名產／選物。點卡片可在本頁地圖看方位（非路線導航）。';
 if(localMap)refreshMap(ctx);
}
function refreshMap(ctx){
 if(!localMap||!markerLayer)return;
 markerLayer.clearLayers();markers={};
 const zones=[...new Set(currentPlaces.map(p=>p.zone))].filter(z=>ZONES[z]);
 const bounds=[];
 zones.forEach(z=>{
   const p=ZONES[z],places=currentPlaces.filter(x=>x.zone===z);
   const desc=places.map(x=>'<li>'+safe(x.name)+'</li>').join('');
   const color=places.some(x=>x.kind==='meal')?'meal':'gift';
   const marker=window.L.marker([p.lat,p.lng],{icon:window.L.divIcon({className:'fg-geo-pin '+color,html:'<span>'+String(places.length)+'</span>',iconSize:[36,36],iconAnchor:[18,18]})})
     .bindPopup('<strong>'+safe(p.name)+'一帶</strong><p>這是區域中心方位，非店門精準座標。</p><ul>'+desc+'</ul>');
   markerLayer.addLayer(marker);markers[z]=marker;bounds.push([p.lat,p.lng]);
 });
 if(bounds.length===1)localMap.setView(bounds[0],12,{animate:false});
 else if(bounds.length>1)localMap.fitBounds(bounds,{padding:[25,25],maxZoom:13,animate:false});
 else localMap.setView([43.05,141.35],9,{animate:false});
 setTimeout(()=>{if(localMap)localMap.invalidateSize();},100);
}
function loadLeaflet(){
 if(window.L)return Promise.resolve();
 if(!document.querySelector('link[data-fg-leaflet]')){
   const css=document.createElement('link');css.rel='stylesheet';css.dataset.fgLeaflet='yes';css.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';document.head.appendChild(css);
 }
 const candidates=['https://unpkg.com/leaflet@1.9.4/dist/leaflet.js','https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js'];
 function attempt(i){
   if(i>=candidates.length)return Promise.reject(new Error('地圖程式資源無法載入'));
   return new Promise((resolve,reject)=>{
     const s=document.createElement('script');s.src=candidates[i];s.async=true;
     s.onload=()=>window.L?resolve():reject(new Error('Leaflet 未啟動'));
     s.onerror=()=>reject(new Error('Leaflet 下載失敗'));
     document.head.appendChild(s);
   }).catch(()=>attempt(i+1));
 }
 return attempt(0);
}
async function initLocalMap(){
 try{
   await loadLeaflet();
   localMap=window.L.map('fg-local-map',{scrollWheelZoom:false,zoomControl:true,attributionControl:true}).setView([43.05,141.35],9);
   window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors',maxZoom:18}).addTo(localMap);
   markerLayer=window.L.layerGroup().addTo(localMap);
   window.L.control.scale({imperial:false}).addTo(localMap);
   mapStatus.textContent='拖曳／縮放查看方位；點數字標記可查看該區域的餐飲與名產。標記為區域中心，非店門精準位置。';
   refreshMap(dayContext());
 }catch(e){
   console.warn('[SapporoFoodExplorer] map unavailable',e);
   mapStatus.textContent='外部地圖底圖暫無法載入；仍可使用上方區域名稱及下方店家來源資料。';
 }
}
dateButtons.innerHTML=LABELS.map((label,i)=>'<button type="button" class="fg-day-choice" data-fg-day="'+i+'" aria-pressed="false">D'+(i+1)+'<small>6/'+(12+i)+'</small></button>').join('');
dateButtons.addEventListener('click',event=>{
 const button=event.target.closest('[data-fg-day]');if(!button)return;
 state.day=Number(button.dataset.fgDay);
 meal='all';
 if(typeof renderDays==='function')renderDays();
 else draw();
});
tabs.forEach(t=>t.addEventListener('click',()=>{meal=t.dataset.fgMeal;draw();}));
root.addEventListener('click',event=>{
 const button=event.target.closest('[data-fg-focus]');if(!button)return;
 const zone=button.dataset.fgFocus,p=ZONES[zone];
 if(!p)return;
 root.querySelectorAll('[data-fg-card]').forEach(node=>node.classList.toggle('is-highlighted',node.contains(button)));
 if(localMap){localMap.setView([p.lat,p.lng],Math.max(localMap.getZoom(),13),{animate:true});if(markers[zone])markers[zone].openPopup();}
 else mapStatus.textContent='目標區域：'+p.name+'（頁內地圖暫不可用；請查看店家官方來源）。';
 document.getElementById('fg-map-panel').scrollIntoView({behavior:'smooth',block:'center'});
});
window.addEventListener('hokkaido:daychange',()=>{meal='all';draw();});
draw();
initLocalMap();
})();
