



if(typeof(eamil)==="string" && Array.isArray(agreeEmailAddress)===true){
  Array.from(email).forEach((element)=>{
    if(element === '@'){
      console.log("이메일 형식이 맞음")

      let emailSplit = [];
      emailSplit = email.split('@');
      console.log(emailSplit);
      agreeEmailAddress.filter((element)=>{
        if(element === emailSplit[1]){
          console.log("이메일 도메인이 일치합니다");
          return true;
        }else{
          console.error("이메일 도메인이 일치하지 않습니다")
        }
      })
    }
  })
}