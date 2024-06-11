/* 
// 1번
let lotto = []; // 배열 변수 생성
let ulList = document.getElementById('lotto');

for(let i=0;i<6;i++){
    let liList = document.createElement('li'); // li생성
    let num = Math.floor(Math.random()*45) + 1; // 1 ~ 45 정수 생성
    liList.innerHTML = num;
    ulList.appendChild(liList);
} */


    let lotto=[];
    let ulList = document.getElementById('lotto');

    for(let i=0; i<6; i++){
        let liList = document.createElement('li');
        let num = Math.floor(Math.random()*45)+1; // 1~45정수 생성

        for(let j in lotto){
            while(num==lotto[j]){
                num = Math.floor(Math.random()*45)+1;
            };
        };

        lotto.push(num);  //lotto배열에다 랜덤 num배열 넣기
        liList.innerText = num;
        liList.classList.add('num'+[num]);
        ulList.appendChild(liList);

    }