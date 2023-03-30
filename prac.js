const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];
console.log(studentList[studentList.length - 1]);

for (let i = 0; i < studentList.length; i++) {
  if (studentList[i] === "이경택") {
    console.log(i + 1);
  } else {
    console.log("잘못찾음")
  }
}

function searching(array,name) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      console.log(i + 1);
    } else {
      console.log(`${name}아님`)
    }
  }
}
searching(studentList,"이경택");

const example = {
  order : 0,
  name : "강지민"
}




// 생성자 함수 방식
function makeConstruct(order, name){
  this.order = order;
  this.name = name;

  function order(order){
    if(typeof(order)==="number"){
      return this.order;
    }
  }
}



// 객체 리턴 방식
function makeObject (order, name){
  if(typeof(order) === "number"){
    return {
      order: order,
      name: name
    }
  }else{
    console.error("error");
  }
}

let a = makeObject(0, studentList[0]);
console.log(a);





class User {
  constructor(order, name){
    this.order = order;
    this.name = name;
  }
  set order(order){
    if(typeof(order)==="number"){
      this._order = order;
    }
  }
}

let test = [];
studentList.forEach((student, index)=>{
  test.push(new User(index, student))
})
