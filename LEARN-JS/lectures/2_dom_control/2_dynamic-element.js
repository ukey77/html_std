// let li = document.createElement('li');
// li.textContent = '데드리프트';
// listUl.appendChild(li);

let listUl = document.querySelector('.list'); // ul
let addBtn = document.getElementById('button'); // 추가 btn
let addBeforeBtn = document.getElementById('before'); //앞에추가 btn
let target = document.getElementById('target'); // li요소

// 추가 btn 누르면 현재 input값이 li로 추가되는 코드
/* addBtn.addEventListener('click', function () {
  let cretLi = document.createElement('li');
  let iputTxt = document.querySelector('input');
  cretLi.textContent = iputTxt.value;
  listUl.appendChild(cretLi);
  iputTxt.value = '';
}); */

// 앞에추가 btn 누르면 현재 input값이 스쿼드 상단으로 추가되는 코드
addBeforeBtn.addEventListener('click', function () {
  let cretLi = document.createElement('li');
  let iputTxt = document.querySelector('input');
  cretLi.textContent = iputTxt.value;
  listUl.insertBefore(cretLi, target);
  iputTxt.value = '';
});

let removeTargetBtn = document.querySelector('#targetRm');

// 타깃제거 btn 누르면 '스쿼트'요소가 제거됨
removeTargetBtn.addEventListener('click', function () {
  target.remove();
});

// 추가 btn 클릭시 li와 btn 요소 함께 생성

addBtn.addEventListener('click', function () {
  // btn 생성
  let creatBtn = document.createElement('button'); // 버튼요소 생성
  // creatBtn.classList.add('removeBtn'); // 클래스 추가 방법 1
  creatBtn.setAttribute('class', 'removeBtn'); //  // 클래스 추가 방법 2
  creatBtn.type = 'button'; // 버튼요소의 type 설정
  creatBtn.textContent = 'X'; // 버튼요소의 text 설정
  creatBtn.addEventListener('click', removeParentNode);

  // li 생성
  let cretLi = document.createElement('li'); // li요소 생성
  let iputTxt = document.querySelector('input'); // input요소 가져오기
  cretLi.textContent = iputTxt.value; // li의 text에 input요소 value 값 대입
  cretLi.appendChild(creatBtn); // li에 버튼요소 삽입
  listUl.appendChild(cretLi); // ul에 li 삽입

  iputTxt.value = ''; // 추가된 후 input 값 초기화
  iputTxt.focus(); // input박스에 focus놓기
});

//X버튼 클릭시 해당 부모인 li 요소가 삭제
let removeBtn = document.querySelector('.removeBtn'); // li요소의 X버튼

removeBtn.addEventListener('click', removeParentNode);

function removeParentNode(event) {
  event.target.parentNode.remove();
  let iputTxt = document.querySelector('input');
  iputTxt.focus();
}
