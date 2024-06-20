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

// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   Interests: ['music', 'health'],
//   hello: function () {
//     alert('Hello');
//   },
//   greeting: function () {
//     alert('Hi');
//   },
//   hobby: {
//     name: 'programing',
//     alert: function () {
//       alert('programing');
//     },
//   },
// };
/* 
// .점 표기법
console.log(person);
console.log(person.name); // (2) ['Bob', 'Smith']
console.log(person.name[0]); // Bob
person.hello(); // *괄호!!
console.log(person.hobby.name); // programing
person.hobby.alert();

// [괄호표기법]
console.log(person['name']); // (2) ['Bob', 'Smith']
console.log(person['hobby']['name']); // programing
console.log(person['Interests'][1]);
person['hello'](); // 함수호출
person['hobby']['alert'](); // 함수호출
 */

// function printPerson(name, age, hobby) {
//   console.log(
//     `제 이름은 ${name}이며, 나이는 ${age}살 입니다. 그리고 취미는 ${hobby}입니다.`
//   );
// }

// printPerson('유진', '25', '클라이밍');

// function printPerson(person) {
//   console.log(
//     `제 이름은 ${person.name}이며, 나이는 ${person.age}살 입니다. 그리고 취미는 ${person.hobby}입니다.`
//   );
// }
// const person = {
//   name: '김유진',
//   age: 25,
//   hobby: '헬스',
// };
// printPerson(person);

// 구조분해할당
// 디스트럭처링 문법은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식입니다.

const person = {
  name: '유진',
  age: 25,
  hobby: '클라이밍',
};

// const { name, age, hobby } = person; // 배열 처럼 순서만 맞추는게 아닌 key값을 맞춰야함
// console.log(name); // 유진

// // 구조분해할당 - 함수에서 객체 개별 속성을 받을 때
function printPerson({ name, age, hobby }) {
  console.log(
    `제 이름은 ${name}이며, 나이는 ${age}살 입니다. 그리고 취미는 ${hobby}입니다.`
  );
}

printPerson(person);

// 팩토리함수
// 자바스크립트로 프로그래밍을 하다보면 같은 유형의 객체를 여러번 생성해야하는 일이 생길 수 있음

// 같은 유형의 객체를 반복해서 생성

// const person1 = {
//   name: '유진',
//   age: 25,
//   hobby: '클라이밍',
// };

// const person2 = {
//   name: '길동',
//   age: 35,
//   hobby: '축지법',
// };
// 값은 다르지만 프로퍼티가 같은!!

function createPerson(name, age, hobby) {
  return {
    name: name,
    age: age,
    hobby: hobby,
  };
}

// const person1 = createPerson('유진', 25, '클라이밍');
// const person2 = createPerson('길동', 35, '축지법');
// const person3 = createPerson('윤복', 33, '풍속화');

// 객체를 반환하는 함수 (return을 객체로 한다!)

/* 
단축 속성명(Shorthand property names)
단축 속성명이란 객체를 정의할 때 객체의 Key와 Value값이 같을 시,
Key = Value일 때 각 값을 반복해서 표기하지않고 한번만 표현하는 방식

function createPerson(name, age, hobby) {
  return {
    name,
    age,
    hobby,
  };
}
*/

// class 간단
// ES5에선 class 생성시 이런 방식으로 사용함
// function Person(name, age, hobby) {
//   // 객체생성함수는 함수첫글자를 대문자로 함(그냥규칙)
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }

// const person1 = new Person('홍길동', '15', '축지법');
// console.log(person1);

// ES6 (class 개념이 등장하면서 더 직관적인 활용이 가능해짐)
// class Person {
//   constructor(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//   }
// }

// const person1 = new Person('홍길동', '15', '축지법');
// console.log(person1);
