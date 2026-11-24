// Reads regular closing days from a free-text hours string such as
// "11:00–19:00；週四休", "週一–五休" or "第 1・3・5 週二休".
// Returns 'closed' when the venue is regularly closed on that weekday,
// 'maybe' when it closes only on some weeks (第 N 週X休), otherwise null.
(function(root){
 'use strict';
 const DAYS='日一二三四五六';
 const TRIP_START_WEEKDAY=6; // 2027-06-12 is a Saturday.
 function expand(spec){
  const out=new Set();
  for(const part of spec.split(/[・、]/)){
   const range=part.split(/[–-]/);
   if(range.length===2){
    let a=DAYS.indexOf(range[0]),b=DAYS.indexOf(range[1]);
    if(a<0||b<0)continue;
    for(let i=a;;i=(i+1)%7){out.add(i);if(i===b)break;}
   }else{
    const i=DAYS.indexOf(part);
    if(i>=0)out.add(i);
   }
  }
  return out;
 }
 function closedStatus(hours,weekday){
  const text=String(hours||'');
  const re=/(第[\d\s・、–-]+)?週([一二三四五六日](?:[・、–-][一二三四五六日])*)休/g;
  let result=null,m;
  while((m=re.exec(text))){
   if(!expand(m[2]).has(weekday))continue;
   if(!m[1])return 'closed';
   result='maybe';
  }
  return result;
 }
 function tripWeekday(dayIndex){return (TRIP_START_WEEKDAY+dayIndex)%7;}
 const api={closedStatus,tripWeekday};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
 root.HokkaidoClosedDay=api;
})(typeof window!=='undefined'?window:globalThis);
