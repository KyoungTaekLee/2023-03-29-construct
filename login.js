// 1. 객체 리터럴, 정적인 key, value 작성
const staticObjectLiteral = {
  id : "kongukjae",
  password : "1234",
  email : "kongukjae@gmail.com"
}
console.log(staticObjectLiteral);
//2. 객체 리터럴, 동적인 key, value 작성
const initializeObjectLiteral = {};
initializeObjectLiteral.id = "kongukjae";
initializeObjectLiteral.password = "1234";
initializeObjectLiteral.email = "kongukjae@gmail.com";
console.log(initializeObjectLiteral);
//3. 내장 객체 생성자 함수 활용 동적인 key, value 작성
const initializeObjectConstructor = new Object();
initializeObjectConstructor.id = "kongukjae";
initializeObjectConstructor.password = "1234";
initializeObjectConstructor.email = "kongukjae@gmail.com";
console.log(initializeObjectConstructor);
//4. 생성자 함수 활용 정적인 key, value 작성
class ConstructionObject {
  constructor(id,password,email) {
    this.id = id;
    this.password = password;
    this.email = email;
  }
  //setter 에 의해 '데이터타입'을 원하는 것만 받을 수 있도록 '제한'을 걸 수 있다.
  set id(value) {
    if(typeof (value) === "string") {
      this._id = value;
    }
  }
  set password(value) {
    if(typeof (value) === "string") {
      this._password = value;
    }
  }
  set email(value) {
    if(value.includes("@")) {
      this._email = value;
    }
  }
}
const makeInstance = new ConstructionObject("kongukjae","1234","kongukjae@gmail.com");
console.log(makeInstance);
//5. 단순히 객체를 리턴하는 함수
function returnObject (id, password, email) {
  let objectValue = {
    id : id,
    password : password,
    email : email
  }
  return objectValue;
}
const returnObjectValue = returnObject("kongukjae","1234","kongukjae@gmail.com");
console.log(returnObjectValue);
//6.class 작성법을 지원하기 전 생성자 함수 제작 방식
function oldSchoolConstructor(id, password, email) {
  this.id = id;
  this.password = password;
  this.email = email;
}
const oldScholInstance = new oldSchoolConstructor("kongukjae","1234","kongukjae@gmail.com");
console.log(oldScholInstance);