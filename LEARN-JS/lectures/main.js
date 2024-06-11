let str = 'hello javascript';
let number = 123;

/* 
defer : HTML script link시 defer 넣는 이유는 나중에 설명!!

함수 : 코드를 편하게 재사용 하기 위하여 그룹화 한것

-호이스팅 가능

객체 : 
- 객체가 갖고있는 변수를 프로퍼티(속성)이라 함 (자주사용***)
- 객체는 변수, 함수 가질 수 있음

이벤트 
- HTML에서 발생할 사건을 브라우저에게 알려주는 것 (onclick)
*/


function sayHello(){
  console.log('hello1');
  console.log('hello2');
  console.log('hello3');
};

// sayHello();

let obj = {
  number : 30,
  sayHello: function(){
    console.log('obj > hello1');
    console.log('obj > hello2');
    console.log('obj > hello3');
  }
};

console.log(obj);
console.log(obj.sayHello);