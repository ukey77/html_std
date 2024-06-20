'use strict';
// 객체 리터럴 방식
// const person = {
//   name: '김유진',
//   age: 25,
// };
// console.log(person);

// 객체 생성자 방식
// const person = new Object();
// person.name = '김유진';
// person.age = 25;
// console.log(person);

const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  Interests: ['music', 'health'],
  hello: function () {
    alert('Hello');
  },
  greeting: function () {
    alert('Hi');
  },
  hobby: {
    name: 'programing',
    alert: function () {
      alert('programing');
    },
  },
};

// 일반 배열 접근법 (.으로 연결)
// console.log(person);
// console.log(person.name); // (2) ['Bob', 'Smith']
// console.log(person.name[0]); // Bob
// person.hello(); // *괄호!!
// console.log(person.hobby.name); // programing
// person.hobby.alert();

// 배열접근법 2 [대괄호사용]
console.log(person['name']); // (2) ['Bob', 'Smith']
console.log(person['hobby']['name']); // programing
console.log(person['Interests'][1]); // health
// person['hello'](); // 함수호출
