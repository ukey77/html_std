'use strict';

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let fruits = ['사과', '바나나', '딸기', '포도'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//for ... in

let person = {
  name: '홍길동',
  age: 24,
  job: '개발자',
};
// let key = prompt('어떤 값을 입력할까요? 키를 입력해주세요');
// console.log(person[key]); // 대괄호 안에 key명

let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
  let key = keys[i];
  console.log(person[key]);
}

console.log('====');
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

console.log('====');

let fruits = ['사과', '바나나', '딸기', '포도'];

for (let i of fruits) {
  console.log(i);
}
