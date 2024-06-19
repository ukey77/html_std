const title = document.getElementById('title');
// console.log(title);
title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item');
// console.log(items[0]);

let liList = document.getElementsByTagName('li');
// console.log(liList);

title.textContent = '운동';
title.innerHTML = '<span>운동@@@</span>';

console.log(title.innerHTML);

let input = document.querySelector('input');

input.setAttribute('placeholder', '헬스 운동 입력 바람!');
input.removeAttribute('placeholder');
input.setAttribute('required', '');
input.removeAttribute('required');

let helloItem = document.querySelector('.hello');

// console.log(helloItem);
// helloItem.style.color = '#fff';
// helloItem.style.backgroundColor = 'black';

helloItem.classList.add('light', 'one'); // 한번에 연결 가능 <p class="hello light one">안녕하세요</p>
//helloItem.classList.remove('light', 'one', 'hello'); // 한번에 삭제  <p class="">안녕하세요</p>가능

let targetRm = document.getElementById('target-remove');
targetRm.addEventListener('click', function () {
  let targetLi = document.querySelector('.item');
  targetLi.remove();
});
