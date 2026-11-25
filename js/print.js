(() => {
 'use strict';

 function dayMarkup(index){
  const day=getDay(index);
  const stops=day.stops.map(([time,title,detail])=>
   `<li><time>${clean(time)}</time><div><strong>${clean(title)}</strong><p>${clean(detail)}</p></div></li>`).join('');
  return `<article class="print-day">
   <header><span>DAY ${index+1} · ${clean(dates[index])}</span><span>${clean(day.transport)}</span></header>
   <h2>${clean(day.title)}</h2>
   <p class="print-desc">${clean(day.desc)}</p>
   <ol>${stops}</ol>
   <p class="print-note"><b>注意事項</b> ${clean(day.note)}</p>
  </article>`;
 }

 function budgetMarkup(){
  const perPerson=document.getElementById('perCost').textContent;
  const total=document.getElementById('allCost').textContent;
  const parts=[...document.querySelectorAll('#budgetParts > div')].map(row=>{
   const [label,amount]=[...row.children].map(child=>clean(child.textContent));
   return `<li><span>${label}</span><b>${amount}</b></li>`;
  }).join('');
  return `<section class="print-budget"><header><h2>旅費預算</h2></header>
   <div class="print-budget-total"><div><small>每人平均估算旅費</small><strong>${clean(perPerson)}</strong></div><div><small>全團預算</small><strong>${clean(total)}</strong></div></div>
   <ul>${parts}</ul>
  </section>`;
 }

 function removePrintDocument(){
  delete document.body.dataset.printMode;
  document.getElementById('printDocument')?.remove();
 }

 function printTrip(allDays){
  removePrintDocument();
  const content=document.createElement('section');
  content.id='printDocument';
  const scope=allDays?'完整七天':'當日行程';
  const indexes=allDays?dates.map((_,index)=>index):[state.day];
  const rental=state.car===0?'全程大眾運輸':`租車 ${state.car} 天`;
  content.innerHTML=`<header class="print-cover">
   <h1>札幌・北海道旅行手帖</h1>
   <p>2027 · ${scope} · ${clean(variations[state.plan].label)} · ${rental}</p>
   <p class="print-cover-note">行程與金額為規劃參考，請於出發前確認營業時間、交通與訂房。</p>
  </header>${indexes.map(dayMarkup).join('')}${allDays?budgetMarkup():''}`;
  document.body.append(content);
  document.body.dataset.printMode='trip';
  window.print();
 }

 document.getElementById('printPage').addEventListener('click',()=>printTrip(false));
 document.getElementById('printAllPage').addEventListener('click',()=>printTrip(true));
 window.addEventListener('afterprint',removePrintDocument);
})();
