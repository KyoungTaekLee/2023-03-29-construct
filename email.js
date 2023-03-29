if(typeof(eamil)==="string" && Array.isArray(agreeEmailAddress)===true){
  Array.from(email).forEach((element)=>{
    if(element === '@'){
      console.log("이메일 형식이 맞음")

      let emailSplit = [];
      emailSplit = email.split('@');
      console.log(emailSplit);
    }
  })
}