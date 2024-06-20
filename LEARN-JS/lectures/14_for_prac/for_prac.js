// // 1번예제
let total = 5;
// for (let i = 1; i <= total; i++) {
//   let num = '';
//   for (let k = total; k > i; k--) {
//     num += ' ';
//   }
//   for (let j = 1; j <= i * 2 - 1; j++) {
//     num += i;
//   }
//   console.log(num);
// }

// // 2번예제
// let alph = ['A', 'B', 'C', 'D', 'E'];
// let alLen = alph.length;

// for (let i = 0; i < alLen; i++) {
//   let result = '';
//   for (let k = alLen; k > i; k--) {
//     result += ' ';
//   }
//   for (let j = 0; j <= i * 2; j++) {
//     result += alph[i];
//   }
//   console.log(result);
// }

/*
 *********
 *******
 *****
 ***
 *
 ***
 *****
 *******
 *********
 */

// for (let i = 1; i < 3; i++) {
//   for (let i = total; i > 0; i--) {
//     let star = '';
//     for (let j = 1; j <= i * 2 - 1; j++) {
//       star += '*';
//     }
//     console.log(star);
//   }

//   for (let i = 0; i < total; i++) {
//     let star = '';
//     for (let j = 0; j <= i * 2; j++) {
//       star += '*';
//     }
//     console.log(star);
//   }
// }

// 다이아몬드

// for (let i = 0; i < total; i++) {
//   let star = '';
//   for (let k = total; k >= i + 1; k--) {
//     star += '*';
//   }
//   for (let j = 0; j <= i * 2; j++) {
//     star += '•';
//   }
//   for (let k = total; k >= i + 1; k--) {
//     star += '*';
//   }
//   console.log(star);
// }

// for (let i = total - 1; i > 0; i--) {
//   let star = '';
//   for (let k = total; k >= i; k--) {
//     star += '*';
//   }
//   for (let j = 1; j < i * 2; j++) {
//     star += '•';
//   }
//   for (let k = total; k >= i; k--) {
//     star += '*';
//   }
//   console.log(star);
// }

//'hello world' 뒤집기

let str = 'hello world';
let to = str.length - 1;
let result = '';
for (let i = 0; i <= to; i++) {
  result += str[to - i];
}
console.log(result.toLocaleUpperCase());
