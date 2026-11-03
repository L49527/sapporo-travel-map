
(()=>{'use strict';
const STORE='sapporo2027_checklist_v1';
const categories=[
{id:'booking',icon:'✈',name:'預訂與確認',en:'Reservations',tasks:[
 ['flight','確認 2027/6/12–18 來回航班與行李額度','記下新千歲抵達與回程時間；確認托運行李與座位。','出發前 1～3 個月'],
 ['hotel','確認札幌住宿 6 晚與入住資訊','保存飯店地址、訂房確認信和取消期限。','出發前 1～3 個月'],
 ['festival','確認 6/13 與 6/16 祭典活動時段','再次查 YOSAKOI 與北海道神宮祭最新公布資訊。','出發前 2～4 週'],
 ['spots','檢查景點營業、花況及溫泉日歸入浴時間','6 月中旬不是傳統薰衣草田盛開期；景點與季節性設施可能調整。','出發前 1～2 週'],
 ['weather','下載備用雨天路線、查看官方天氣預報','尤其積丹神威岬可能受強風影響；山區與札幌市區溫差明顯。','出發前 3 天'],
 ['offlinePlan','儲存每日行程、飯店地址及緊急聯絡方式','可將網頁和行程 JSON 存到手機，另備離線地圖。','出發前 3 天']
]},
{id:'immigration',icon:'▣',name:'護照與日本入境',en:'Entry & documents',tasks:[
 ['passport','確認護照效期與姓名拼音','須符合日本及航空公司規範；勿一律以「必須六個月」替代實際規定。','出發前 1～3 個月','https://www.immigration.gov.tw/5382/5385/12162/12191/52087/'],
 ['vjw','準備 Visit Japan Web 入境及海關資料','日本官方提供線上申報，建議預先登錄；須有能出示的 QR Code 或依現場規定使用其他方式。','出發前 1～2 週','https://www.vjw.digital.go.jp/'],
 ['docs','準備來回機票、住宿確認資料與護照','建議於手機及離線備份留存，必要時出示。','出發前 3 天'],
 ['contacts','記下旅行緊急聯絡人與保險資訊','手機中保存聯絡方式及報案／理賠流程。','出發前 3 天']
]},
{id:'insurance',icon:'✚',name:'保險與健康',en:'Insurance & health',tasks:[
 ['insure','確認旅平險與海外醫療保障','留意海外突發疾病、醫療費用與緊急支援等承保範圍。','出發前 2～4 週'],
 ['delay','比較旅遊不便險條款','班機延誤、行李遺失、旅程取消等有等待時間與除外責任，依保單認定。','出發前 2～4 週'],
 ['meds','準備個人藥品與處方證明（如適用）','處方藥若涉及輸入限制，出發前確認日本規定。','出發前 1～2 週'],
 ['health','確認旅伴需求與戶外活動安全','青池、瀑布及地獄谷步道視體力與天候調整。','出發前 1～2 週']
]},
{id:'transport',icon:'▥',name:'交通與租車',en:'Transport & rental',tasks:[
 ['airport','確認新千歲機場至札幌的 JR 路線','核對第一天及回程的航班銜接，並確認末班車。','出發前 1～2 週'],
 ['jr','確認小樽／余市 JR 時刻及轉乘','部分車次、地區巴士班次有限，勿以地圖距離取代實際轉乘時間。','出發前 1～2 週'],
 ['publictour','預訂富良野・美瑛觀光巴士或一日團','全程不開車時必須確認實際開團與集合地點。','出發前 1～2 個月',null,'public'],
 ['publicwest','預約登別／積丹／定山溪所需巴士或一日團','依選擇的 A／B／C 路線確認季節班次與搭乘條件。','出發前 2～4 週',null,'public'],
 ['oneextra','確認未租車的另一個郊區日如何搭車','租 1 天者另一天可能使用 JR、巴士或季節性觀光團。','出發前 2～4 週',null,'one'],
 ['rent','確認租車公司、取還車門市與保險','依行程留意 6/15 取車、車款、ETC、NOC 補償及最後還車時間。','出發前 1～3 個月',null,'drive'],
 ['license','備妥有效台灣駕照正本＋指定日文譯本＋護照','在日本開車須攜帶上述文件，另檢查租車公司附加規定。','出發前 2～4 週','https://english.jaf.or.jp/driving-in-japan/drive-in-japan/switch-to-japanese-license','drive'],
 ['route','確認美瑛／富良野路線、停車場與加油站','提前下載導航，預留山區與高速公路行車時間。','出發前 1～2 週',null,'drive'],
 ['twoday','確認第二個租車日的支笏湖／登別或積丹路線','若租兩天，需核對第二天的取還車時間與車位。','出發前 1～2 週',null,'two']
]},
{id:'packing',icon:'▤',name:'行李打包清單',en:'Packing checklist',tasks:[
 ['coat','輕薄防風外套或保暖外搭','北海道 6 月早晚及山區偏涼。','出發前 3 天'],
 ['layer','薄長袖、T 恤、長褲及換洗衣物','以分層穿搭為主；洗衣設備可減少行李量。','出發前 3 天'],
 ['shoes','好走的防滑鞋與備用襪','地獄谷、溪谷步道及市區移動均需要好走的鞋。','出發前 3 天'],
 ['rain','折疊傘／輕量防水外套','北海道沒有典型梅雨季，但仍有降雨與風。','出發前 3 天'],
 ['sun','防曬乳、太陽眼鏡、帽子','湖區及海岸曝曬時間較長。','出發前 3 天'],
 ['care','盥洗用品、個人常用備品','確認飯店有提供哪些備品，避免重複攜帶。','出發前 3 天'],
 ['bags','隨身小包、購物袋及行李空間','購物與伴手禮預留托運空間。','出發前 3 天']
]},
{id:'payment',icon:'¥',name:'電子設備與支付',en:'Devices & payment',tasks:[
 ['net','設定日本 eSIM／漫遊或 Wi-Fi','確認抵達後可連線，用於查 JR、路線及飯店資訊。','出發前 1 週'],
 ['battery','充電線、充電器與行動電源','行動電源須依航空公司規定隨身攜帶，確認容量限制。','出發前 3 天'],
 ['wallet','信用卡、日圓現金與小額零錢','鄉間停車與小店未必全面支援行動支付。','出發前 1 週'],
 ['transitcard','確認交通 IC 卡與可用餘額','札幌地鐵、市區交通可用；跨區搭車須確認路線支援。','出發前 1 週'],
 ['apps','離線地圖、翻譯 App 與飯店定位','出發前先下載地圖範圍，預防山區收訊不佳。','出發前 3 天']
]},
{id:'taxrefund',icon:'¥',name:'日本免稅・退稅新制',en:'Tax-free refund 2027',tasks:[
 ['taxrule','了解 2026/11 新制：購物先付款含稅價格','2027 年退稅須等離境時海關確認攜出日本後，由免稅店／受託業者退款。','出發前 1～2 週','https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html'],
 ['taxthreshold','確認符合免稅門檻及購物資格','同店同日未稅滿 ¥5,000；購物時依店家規定出示護照或 VJW 資料。','購物當天','https://www.customs.go.jp/kaigairyoko/taxrefund.htm'],
 ['taxrefundmethod','在店家完成退款方式登記','每家店或受託退稅業者的收款方式與時間可能不同。','購物當天'],
 ['taxgoods','完整保存所有欲退稅商品與交易憑證','不要在日本境內消耗欲退稅的食品、飲料、化妝品；同筆交易漏帶商品可能整筆無法退稅。','出境前 1 天'],
 ['tax90days','確認購買後 90 天內完成日本海關確認','要在購買日起 90 天內離境驗證並攜商品出境。','返台前 1 天'],
 ['taxbeforecheckin','新千歲機場先做免稅海關確認，再托運行李','國際線出發大廳辦理；可用免稅終端或指定 Wi-Fi 區域的 Visit Japan Web，依現場要求出示商品。','6/18 回程當天','https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html'],
 ['taxbuffertime','返台當日額外預留退稅查驗時間','退稅查驗若要求開箱或檢查，不可因趕時間直接跳過；避開最後一刻。','6/18 回程當天']
]},
{id:'return',icon:'↺',name:'返台注意事項',en:'Returning to Taiwan',tasks:[
 ['ban','確認農畜產品、鮮果與食品入境限制','豬肉及部分動物產品、鮮果等可能禁止攜入；有疑慮先詢問檢疫人員。','返台前 1 天','https://www.aphia.gov.tw/ws.php?id=10719'],
 ['customs','核對免稅額度、藥品及商品申報規則','特殊食品、植物與免稅商品以當時海關公告為準。','返台前 1 天','https://web.customs.gov.tw/taipei/singlehtml/3392?cntId=cus2_3392_3392_1351'],
 ['returnair','確認回程航班、機場交通與行李重量','提早安排 JR 往新千歲；尖峰時段與轉乘需保留彈性。','返台前 1 天']
]},
{id:'custom',icon:'＋',name:'自己的待辦',en:'Personal reminders',tasks:[]}
];
const $=id=>document.getElementById(id);
let storeOK=true;
function load(){try{const raw=localStorage.getItem(STORE);if(!raw)return {done:{},custom:[]};const v=JSON.parse(raw);return {done: typeof v.done==='object'&&v.done&&!Array.isArray(v.done)?v.done:{},custom:Array.isArray(v.custom)?v.custom.filter(x=>x&&typeof x.text==='string'&&typeof x.id==='string').slice(0,100):[]};}catch(_){storeOK=false;return {done:{},custom:[]}}}
let saved=load(),onlyPending=false; const expanded=new Set(['booking','taxrefund']);
function persist(){try{localStorage.setItem(STORE,JSON.stringify(saved));storeOK=true;}catch(_){storeOK=false;} $('checklistSaveState').textContent=storeOK?'已自動儲存至此瀏覽器；跨裝置可使用「匯出清單／匯入紀錄」。':'此瀏覽器無法儲存；本次操作有效。建議匯出清單保存。';}
function mode(){let node=document.querySelector('.car-btn.active');return node?Number(node.dataset.car||0):0}
function applicable(t,m){let c=t[5];return !c||(c==='public'&&m===0)||(c==='one'&&m===1)||(c==='drive'&&m>0)||(c==='two'&&m===2)}
function tasksFor(cat,m){return cat.id==='custom'?saved.custom.map(x=>[x.id,x.text,'自行新增的準備事項','自訂']):cat.tasks.filter(t=>applicable(t,m))}
function elt(tag,cls,txt){let e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e}
function summarize(){let total=0,done=0;const m=mode();categories.forEach(cat=>tasksFor(cat,m).forEach(t=>{total++;if(saved.done[t[0]])done++;}));const pc=total?Math.round(done*100/total):0;$('checklistCount').textContent=done+' / '+total;$('checklistPct').textContent=pc+'%';$('checklistProgressFill').style.width=pc+'%';$('checklistProgress').setAttribute('aria-valuenow',String(pc));$('checklistModeNote').textContent= m===0?'目前：全程大眾運輸｜顯示觀光巴士與轉乘待辦。':m===1?'目前：租車 1 天｜顯示租車文件與另一郊區日的大眾運輸。':'目前：租車 2 天｜顯示兩天自駕與取還車相關待辦。';}
function render(){const root=$('checklistCategories'),m=mode();const focusId=document.activeElement?.getAttribute?.('data-task-id');root.replaceChildren();for(const cat of categories){const tasks=tasksFor(cat,m),done=tasks.filter(t=>saved.done[t[0]]).length,items=onlyPending?tasks.filter(t=>!saved.done[t[0]]):tasks;const card=elt('article','checklist-card');const toggle=elt('button','checklist-card-toggle');toggle.type='button';toggle.setAttribute('aria-expanded',expanded.has(cat.id)?'true':'false');toggle.setAttribute('aria-controls','prep-group-'+cat.id);toggle.append(elt('span','checklist-card-icon',cat.icon));const title=elt('span','checklist-card-head');title.append(elt('strong','',cat.name),elt('small','',cat.en));toggle.append(title,elt('span','checklist-card-count',done+' / '+tasks.length),elt('span','checklist-card-arrow','›'));
 toggle.addEventListener('click',()=>{expanded.has(cat.id)?expanded.delete(cat.id):expanded.add(cat.id);render();});card.append(toggle);const bar=elt('div','checklist-card-bar');bar.append(elt('span'));bar.firstChild.style.width=(tasks.length?done/tasks.length*100:0)+'%';card.append(bar);const body=elt('div','checklist-card-body');body.id='prep-group-'+cat.id;body.hidden=!expanded.has(cat.id);if(items.length===0){body.append(elt('p','checklist-empty',tasks.length?'此分類目前都已完成。':'還沒有自己的待辦事項。'));}
 for(const t of items){const label=elt('label','checklist-task');const input=elt('input');input.type='checkbox';input.checked=!!saved.done[t[0]];input.dataset.taskId=t[0];input.addEventListener('change',()=>{saved.done[t[0]]=input.checked;persist();render();});label.append(input);const cp=elt('span','checklist-task-copy');cp.append(elt('span','checklist-task-text',t[1]));if(t[2])cp.append(elt('span','checklist-task-help',t[2]));if(t[3])cp.append(elt('span','checklist-task-meta',t[3]));if(t[4]){let a=elt('a','checklist-task-link','查看官方規定 ↗');a.href=t[4];a.target='_blank';a.rel='noopener noreferrer';a.addEventListener('click',ev=>ev.stopPropagation());cp.append(a);}label.append(cp);if(cat.id==='custom'){let del=elt('button','checklist-task-remove','×');del.type='button';del.title='移除此自訂待辦';del.setAttribute('aria-label','刪除：'+t[1]);del.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();saved.custom=saved.custom.filter(x=>x.id!==t[0]);delete saved.done[t[0]];persist();render();});label.append(del);}body.append(label);}
 card.append(body);root.append(card);}
 summarize();if(focusId){const input=Array.from(root.querySelectorAll('[data-task-id]')).find(e=>e.dataset.taskId===focusId);if(input)input.focus({preventScroll:true});}
}
function countdown(){const diff=new Date('2027-06-12T00:00:00+08:00')-Date.now();const days=Math.ceil(diff/86400000);$('checklistCountdown').textContent=days>0?String(days).padStart(3,'0'):days===0?'TODAY':'✓';$('checklistCountdownText').textContent=days>0?'天後出發 · DAYS TO GO':days===0?'今天出發！':'旅行日期已過';}
$('checklistIncomplete').addEventListener('click',()=>{onlyPending=!onlyPending;$('checklistIncomplete').setAttribute('aria-pressed',onlyPending?'true':'false');if(onlyPending)categories.forEach(c=>expanded.add(c.id));render();});
$('checklistCustomForm').addEventListener('submit',ev=>{ev.preventDefault();const i=$('checklistCustomInput'),v=i.value.trim();if(!v)return;const id='u_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,9);saved.custom.push({id,text:v.slice(0,90)});i.value='';expanded.add('custom');persist();render();i.focus();});
$('checklistReset').addEventListener('click',()=>{if(!confirm('要清除所有已勾選的完成紀錄嗎？自訂待辦文字會保留。'))return;saved.done={};persist();render();});
$('checklistExport').addEventListener('click',()=>{const payload={format:'sapporo-checklist',version:1,trip:'2027-06-12',created:new Date().toISOString(),done:saved.done,custom:saved.custom};const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='札幌2027_行前準備清單.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
$('checklistImportBtn').addEventListener('click',()=>$('checklistImport').click());
$('checklistImport').addEventListener('change',async e=>{const f=e.target.files?.[0];if(!f)return;try{if(f.size>1000000)throw new Error('檔案過大');const obj=JSON.parse(await f.text());if(obj.format!=='sapporo-checklist'||obj.version!==1||!obj.done||typeof obj.done!=='object'||!Array.isArray(obj.custom))throw new Error('不是此網站的清單檔案');if(!confirm('要用匯入紀錄覆蓋目前清單勾選與自訂事項嗎？'))return;const allowed=new Set(categories.flatMap(c=>c.tasks.map(t=>t[0])));saved.custom=obj.custom.filter(x=>x&&typeof x.id==='string'&&x.id.startsWith('u_')&&typeof x.text==='string').slice(0,100).map(x=>({id:x.id.slice(0,80),text:x.text.slice(0,90)}));saved.custom.forEach(x=>allowed.add(x.id));saved.done={};Object.entries(obj.done).forEach(([id,v])=>{if(allowed.has(id)&&v===true)saved.done[id]=true;});persist();render();alert('行前準備清單已匯入。');}catch(err){alert('無法匯入：'+err.message);}finally{e.target.value='';}});
const carBtns=document.querySelector('.car-buttons');if(carBtns)carBtns.addEventListener('click',event=>{if(event.target.closest('[data-car]'))setTimeout(render,0);});
countdown();persist();render();
})();
