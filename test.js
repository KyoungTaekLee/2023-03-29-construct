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

fs.writeFileSync("members.JSON",JSON.parse(members, null, 2), "utf-8");