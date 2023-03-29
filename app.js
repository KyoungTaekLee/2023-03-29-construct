// const a = new Date();
// console.log(a.getFullYear());

// const b = {
//   year : 2023,
//   month : 3,
//   day : 29
// }

// console.log(b.year + "년도");

// function c(year2,month2,day2){
//     this.year = year2,
//     this.month = month2,
//     this.day = day2
// };

// const text = c(2023, 3, 29).year;
// console.log(text)

const fs = require('fs');

function user(id, pwd, email){
  this.id = id,
  this.pwd = pwd,
  this.email = email
}

const d = new user("a","2","naver");
const e = new user("b","3","google");

let names = ['a','b','c'];
let pwds = ['1','2','3'];
let emials =['naver','google','hello'];

let members = [];
for(let i = 0; i<3; i++){
  members.push(new user(names[i],pwds[i],emials[i]));
}

fs.writeFileSync("members.JSON",JSON.stringify(members, null, 2), "utf-8");

console.dir(members);