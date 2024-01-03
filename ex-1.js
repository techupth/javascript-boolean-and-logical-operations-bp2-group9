let isOver18 = true ;
let hasCriminalBlacklist =  true;


// James status is !hasCriminalBlacklist and isOver18

 let JamesCriminalStatus = !hasCriminalBlacklist   // James ไม่เคยมีประวัติอาขญากรรม
 let isAllow = isOver18 || !(JamesCriminalStatus)  // isOver18 = True = สามารถเข้างานได้,ผู้ร่วมงานต้องตรงข้ามกับการเข้าร่วมงาน

console.log(isAllow); // true
