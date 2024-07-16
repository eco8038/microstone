// 휴대폰 번호 입력 부분
function changePhone1(){
    const phone1 = document.getElementById("phone1").value // 010
    if(phone1.length === 3){
        document.getElementById("phone2").focus();
    }
}
function changePhone2(){
    const phone2 = document.getElementById("phone2").value // 010
    if(phone2.length === 4){
        document.getElementById("phone3").focus();
    }
}
function changePhone3(){
    const phone3 = document.getElementById("phone3").value // 010
    if(phone3.length === 4){
    document.getElementById("sendMessage").focus();
    document.getElementById("sendMessage").setAttribute("style","background-color:yellow;")
    document.getElementById("sendMessage").disabled = false;
    }
}

let processID = -1;

const getToken = () => {

// 직책 선택 확인
if(area === "직책을 선택하세요."){
    document.getElementById("positionError").innerHTML="직책을 선택해주세요."
    check = false
    }else{
    document.getElementById("positionError").innerHTML=""
    }

  // 비밀번호 확인
    if(password !== passwordCheck){
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
    check = false
    }else{
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    }

    if(password===""){
    document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
    check = false
    }else{
    //document.getElementById("passwordError").innerHTML=""
    }
    if(passwordCheck===""){
    document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
    check = false
    }else{
    //document.getElementById("passwordCheckError").innerHTML=""
    }
    
    //비동기 처리이벤트
    setTimeout(function() {
    alert("가입이 완료되었습니다.")
    },0);
    }