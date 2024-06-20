// 테두리 빼고 속을 빈값으로 만드려면??
// 첫줄 아랫줄 출력
// 첫자리 끝자리 출력

// let num = prompt('숫자를 변경해주세요');
let num = 5;

//  직각삼각형
for (let i = 1; i <= num; i++) {
  let star = '';
  for (let j = 1; j <= i; j++) {
    if (i == 1 || i == num || j == 1 || j == i) {
      star += '*';
      5;
    } else {
      star += '-';
    }
  }

  document.write(star + '<br>');
}

// 피라미드
document.write('—––——–——–' + '<br>');

for (let i = 1; i <= num; i++) {
  let star = '';
  let blnk = '';
  for (let j = 1; j <= i * 2 - 1; j++) {
    if (i == 1 || i == num || j == 1 || j == i * 2 - 1) {
      star += '*';
    } else {
      star += '-';
    }
  }
  for (let k = num; k >= i; k--) {
    blnk += '\u00a0';
  }
  document.write(blnk + star + '<br>');
}

document.write('—––——–——–' + '<br>');

// 상단 피라미드 🔺
for (let i = 1; i <= num; i++) {
  let star = '';
  let blnk = '';
  for (let j = 1; j <= i * 2 - 1; j++) {
    if (i == 1 || j == 1 || j == i * 2 - 1) {
      star += '*';
    } else {
      star += '-';
    }
  }
  for (let k = num; k >= i; k--) {
    blnk += '\u00a0';
  }
  document.write(blnk + star + '<br>');
}
// 하단 피라미드 🔻
for (let i = num - 1; i >= 1; i--) {
  let blnk = '';
  let star = '';
  for (let j = num; j >= i; j--) {
    blnk += '\u00a0';
  }
  for (let k = 1; k <= i * 2 - 1; k++) {
    let h = k == 1 || k == i * 2 - 1;
    h ? (star += '*') : (star += '-');
  }
  document.write(blnk + star + '<br>');
}

// for (let i = 0; i <= num; i++) {
//   let star = '';

//   // for (let j = 0; j <= i; j++) {
//   //   star += ' ';
//   // }
//   for (let k = num * 2; k >= i * 2; k--) {
//     star += '*';
//   }
//   console.log(star);
// }

// function printDiamond(rows) {
//   if (rows % 2 === 0) {
//     rows++; // 홀수로 만들어줌
//   }
//   const midpoint = Math.floor(rows / 2); // 2
//   let diamond = '';

//   for (let i = 0; i < rows; i++) { //5까지
//     let spaces = Math.abs(midpoint - i); // 2/1/0
//     let stars = rows - 2 * spaces; // 5-2*2 = 1 , 5-2*1 = 3

//     // 공백 채우기
//     diamond += ' '.repeat(spaces);

//     // 별 채우기
//     diamond += '*'.repeat(stars);

//     // 줄 바꿈
//     diamond += '\n';
//   }

//   console.log(diamond);
// }

// // 예제: 5줄짜리 다이아몬드 출력
// printDiamond(5);

// prac 1
// let num2 = prompt('숫자입력');

// if (num2 % 2 == 0) {
//   // 만약 짝수라면
//   num2++; // 홀수로 만들어줌
// }

// let intNum = Math.floor(num2 / 2);
// let star = '';

// for (let i = 0; i < num2; i++) {
//   let blnk = Math.abs(intNum - i);
//   let diamond = num2 - 2 * blnk;

//   star += '-'.repeat(blnk);
//   for (let j = 0; j < diamond; j++) {
//     if (i == 0 || i == num2 - 1 || j == 0 || j == diamond - 1) {
//       star += '*';
//     } else {
//       star += '-';
//     }
//   }
//   star += '\n';
// }
// console.log(star);

// let num3 = 8;

// if (num3 % 2 == 0) {
//   num3++; // 7 >> 전체행수를 의미
// }
// let intNum = Math.floor(num3 / 2); //ceil을 하면 도로 짝수가 됨 floor로 선언
// // console.log(intNum);

// let star = '';

// for (let i = 0; i < num3; i++) {
//   let blnk = Math.abs(intNum - i); // 공백은 반복되어야함 3 2 1 0 1 2 3
//   let dia = num3 - 2 * blnk; // 1 3 5 7 5 3 1
//   star += '-'.repeat(blnk);
//   star += '*'.repeat(dia);
//   star += '\n';
// }

// console.log(star);
