const x = document.querySelectorAll('input');
const sign = document.querySelector('button');
const output = document.querySelectorAll('footer > p');
const srchVal = document.getElementById('sc');
const myEm = document.getElementById('em');
const fa_color = document.getElementById('co');
const fa_con = document.getElementById('ma');
const x7 = document.querySelector("input[name='tf']:checked");


sign.addEventListener('click',function () {

    output[0].innerHTML = '아이디 : ' + x[0].value + '님 환영합니다';
    output[1].innerHTML = '비밀번호 : ' + x[1].value;
    output[2].innerHTML = '아이디 : ' + x[0].value + '/ 비번 :' + x[1].value;
    output[3].innerHTML = '검색 : ' + srchVal.value;
    output[4].innerHTML = '이메일 : ' + myEm.value;
    output[5].innerHTML = '선호색상 : ' + fa_color.value;
    output[6].innerHTML = '만족도 : ' + fa_con.value;
    output[7].innerHTML = '수신여부 : ' + x7.value

    for(let i=0; i<output.length;i++){
     output[i].style.border = '2px solid pink';
    };
});