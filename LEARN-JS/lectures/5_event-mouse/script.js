let rectangle = document.querySelector('#rectangle');

/* rectangle.addEventListener('mousedown', function () {
  console.log('mousedown');
});
rectangle.addEventListener('mouseup', function () {
  console.log('mouseup');
});

rectangle.addEventListener('mouseenter', function () {
  console.log('mouseenter');
});

rectangle.addEventListener('mouseleave', function () {
  console.log('mouseleave');
});

rectangle.addEventListener('mousemove', function () {
  console.log('mousemove');
});
 */

// clientX , clientY (브라우저기준)
// rectangle.addEventListener('mousedown', function (event) {
//   console.log('clientX : ', event.clientX);
//   console.log('clientY : ', event.clientY);
// });

// pageX , pageY (해당 웹문서 전체페이지기준)
rectangle.addEventListener('mousedown', function (event) {
  // console.log('pageX : ', event.pageX);
  // console.log('pageY : ', event.pageY);
  console.log(event.target.getBoundingClientRect()); // 요소의 크기와 뷰포트로 부터 상대적인 위치를 반환
  // 요소의 크기와 위치 알고싶으면 사용
});

// 스크롤이 있을때 이야기가 달라짐

// circle
let body = document.querySelector('body');
let circle = document.querySelector('.circle');

body.addEventListener('click', function (event) {
  console.log('pageX : ', event.pageX);
  console.log('pageY : ', event.pageY);
  let div = document.createElement('div');
  div.classList.add('circle');
  div.style.left = event.pageX - 25 + 'px';
  div.style.top = event.pageY - 25 + 'px';

  body.appendChild(div);
});
