let inputBox = document.querySelector('#input-box');

// inputBox.addEventListener('keypress', function (event) {
//   console.log('keypress');
// });
// inputBox.addEventListener('keydown', function (event) {
//   console.log('keydown'); // 키보드가 눌러지는 순간
// });

// inputBox.addEventListener('keyup', function (event) {
//   console.log('keyup'); // 키보드가 눌렀다 떼어 올라오는 순간
// });

// event.key : 사용자가 누른 키 값을 반환
// event.keyCode : 사용자가 누른 키코드 (ASCII)값을 반환

// inputBox.addEventListener('keyup', function (event) {
//   console.log(event.key); // 키보드가 눌렀다 떼어 올라오는 순간
// });

// inputBox.addEventListener('keyup', function (event) {
//   console.log(event.keyCode); // 키보드가 눌렀다 떼어 올라오는 순간
// });

// inputBox.addEventListener('focus', function (event) {
//   console.log('focus'); // input 요소에 focus하면 이벤트 발생
// });

// inputBox.addEventListener('blur', function (event) {
//   console.log('blur'); // input 요소에 focus out되면 이벤트 발생
// });

// inputBox.addEventListener('change', function (event) {
//   console.log('change'); //input 요소 값이 바뀌면 event 발생
// });

// form event
// submit : 양식(form)이 제출하기 전에 발생하는 이벤트
// 주소 전송될 값을 유효성 체크할 때 사용

let img = document.querySelector('img');
img.addEventListener('error', function (event) {
  console.log('error');
  event.target.src = '../img/apple.jpg'; // 실패시 default 이미지
});
