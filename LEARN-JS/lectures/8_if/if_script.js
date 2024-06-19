// 'use strict';

// let condition = 1;

// if (condition) {
//   console.log('true');
// }

// let input = prompt('수학점수를 입력해주세요');

// if (input >= 90) {
//   console.log('등급은 A');
// } else if (input >= 80) {
//   console.log('등급은 B');
// } else if (input >= 70) {
//   console.log('등급은 C');
// } else if (input >= 60) {
//   console.log('등급은 D');
// } else {
//   console.log('등급은 E');
// }

// let score = prompt('수학점수를 입력해주세요');
// let num = Math.floor(score / 10);
// switch (num) {
//   case 10:
//   case 9:
//     console.log('학점 : A');
//     break;
//   case 8:
//     console.log('학점 : B');
//     break;
//   case 7:
//     console.log('학점 : C');
//     break;
//   default:
//     console.log('학점: D');
// }

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    document.write(`${i}*${j}=${i * j} \t`);
    // document.write('<br>');
  }
  document.write('<br>');
}

let num = 15;
for (let i = 0; i <= num; i++) {
  let star = '';
  let blnk = '';
  for (let j = 0; j <= i * 2; j++) {
    star += '*';
  }
  for (let k = num; k >= i; k--) {
    blnk += '-';
  }
  document.write(blnk + star + '<br>');
}

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//초기화 조건식 표현식
// 초기화 : 단 한번만 수행
