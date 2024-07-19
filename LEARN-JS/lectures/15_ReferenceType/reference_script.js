// let username = '유진';
// console.log(username);

// changeName(username);
// console.log(username);
// function changeName(name) {
//   name = '김유진';
// }

// let person = {
//   name: '유진',
//   age: 25,
// };
// changePersonName(person);
// console.log(person);
// function changePersonName(person) {
//   person.name = '홍길동';
//   person.age = 60;
// }

// let obj1 = {
//   name: '유진',
//   age: 25,
// };
// let obj2 = { ...obj1 };
// // obj2.name = '자바스크립트';
// // console.log(obj1);
// // console.log(obj2);

// let obj3 = Object.assign({}, obj1);
// obj3.name = '세번째';
// console.log(obj1);
// console.log(obj3);

//for...in
// 객체(object에 있는 키 항목들을 반복적으로 반환합니다.)
// const person = {
//   name: '유진',
//   age: 20,
//   hobby: '클라이밍',
// };

// for (let key in person) {
//   console.log(key);
// }

// 키 존재 여부 확인
// in operator - key in object

// const person = {
//   name: '유진',
// };
// console.log('name' in person); // true
// console.log('age' in person); // false

//Object.hasOwn()
// obj.hasOwnProperty()
const person = {
  name: '유진',
};
console.log(person.hasOwnProperty('name')); // true
console.log(Object.hasOwn(person, 'name')); //true
