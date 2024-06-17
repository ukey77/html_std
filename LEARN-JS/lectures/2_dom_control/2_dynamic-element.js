// let li = document.createElement('li');
// li.textContent = '데드리프트';
// listUl.appendChild(li);

let listUl = document.querySelector('.list'); // ul
let addBtn = document.getElementById('button'); // 추가 btn
let addBeforeBtn = document.getElementById('before'); //앞에추가 btn
let target = document.getElementById('target'); // li요소

// 추가 btn 누르면 현재 input값이 li로 추가되는 코드
addBtn.addEventListener('click', function () {
  let cretLi = document.createElement('li');
  let iputTxt = document.querySelector('input');
  cretLi.textContent = iputTxt.value;
  listUl.appendChild(cretLi);
  iputTxt.value = '';
});
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
