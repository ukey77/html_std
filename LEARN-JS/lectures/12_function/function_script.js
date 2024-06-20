// 함수 선언식
function sayHello() {
  console.log('이름과 나이는 홍길동입니다.');
  console.log('이름 : 홍길동 , 나이 : 25살');
}

// 함수표현식
const sayHello2 = function () {
  console.log('이름과 나이는 홍길동입니다.');
  console.log('이름 : 홍길동 , 나이 : 25살');
};

/* 

파라미터
괄호()안에 파라미터 (또는 매개변수)를 선언하여, 함수 호출 시 값을 전달 할 수 있습니다.


function sayHello3(name, age) {
  console.log('이름과 나이를 출력합니다.');
  console.log(`이름은 : ${name}, 나이는 : ${age}`);
}
sayHello3('김유진', 25);
// 이름과 나이를 출력합니다.
// function_script.js:22 이름은 : 김유진, 나이는 : 25
*/

// return

// function sum(num1 = 1, num2 = 2) {
//   // 값을 할당하지 않으면 default값으로 설정됨
//   console.log(num1); // 할당O ->  5
//   console.log(num2); // 할당X -> default 값인 2
//   return num1 + num2;
// }

// let result = sum(5);
// console.log(result); // 7

// 함수 스코프
// function aFunc() {
//   let name = '김유진';
//   let age = 20;
//   function bFunc() {
//     let job = '개발자';
//     console.log(`bFunc name : ${name}`); // 자식은 부모 껏을 사용할 수 있지만
//     console.log(`bFunc age : ${age}`);
//     console.log(`bFunc job : ${job}`);
//     console.log('---');
//   }
//   bFunc();
//   console.log(`aFunc name : ${name}`);
//   console.log(`aFunc age : ${age}`);
//   console.log(`aFunc job : ${job}`); // 부모는 자식꺼 사용불가 이미 자식블록에서 선언된거라 바깥으로 가지고 나올 수 가 없음
// }
// aFunc();

// // 익명함수
// let fruits = ['사과', '바나나', '배'];
// fruits.forEach(function (item) {
//   console.log(item);
// });

// // 즉시실행함수

// (function apple() {
//   console.log('사과를 줄게🍎');
// })();

// // 함수를 ()괄호로 묶고 ()괄호 한번 더 삽입하면 즉시실행함수가 됨

//화살표 함수
// const f1 = function () {
//   return 'hello';
// };
// const f1_2 = () => 'hello';
// console.log(f1_2());

// const f2 = function (name) {
//   return `hello ${name}`;
// };
// const f2_2 = (name) => `hello ${name}`;
// console.log(f2_2('유진'));

// const f3 = function (a, b) {
//   return a + b;
// };
// const f3_2 = (a, b) => a + b;
// console.log(f3_2(1, 2));

// let btn = document.querySelector('button');
// btn.addEventListener("click",function(){
//   // 콜백함수 입니다.
// })

// /*
// addEventListener() : 함수 호출 후 다시 콜백함수 (function(){...})가 호출됩니다.
// */

// let fruits = ['사과','바나나','딸기'];
// fruits.forEach((item, index)=>{
//   // 콜백함수
// })

// function forEach(func){

//   // 함수 내부에서 매개변수로 입력받은 함수를 다시 호출
//   func()
// }

let fruits = ['사과', '바나나', '딸기'];
fruits.forEach(printItem);

function printItem(item, index) {
  console.log(item, index);
}
