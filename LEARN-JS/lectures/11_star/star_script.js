'use strict';
/*
 *****
 *****
 *****
 *****
 *****
 */

let num = 5;

// for (let i = 1; i <= num; i++) {
//   let star = '';
//   for (let j = 1; j <= num; j++) {
//     star += '*';
//   }
//   document.write(star + '<br>');
// }

/*
 *
 **
 ***
 ****
 *****
 */

for (let i = 1; i <= num; i++) {
  let star = '';
  for (let j = 1; j <= i; j++) {
    star += '*';
  }
  document.write(star + '<br>');
}

document.write('—––——–——–' + '<br>');

/*
 *****
 ****
 ***
 **
 *
 */

for (let i = 1; i <= num; i++) {
  let star = '';
  for (let j = num; j >= i; j--) {
    star += '*';
  }
  document.write(star + '<br>');
}

/*
 ----*
 ---**
 --***
 -****
 *****
 */
document.write('—––——–——–' + '<br>');

for (let i = 1; i <= num; i++) {
  let star = '';
  let blnk = '';
  for (let j = 1; j <= i; j++) {
    star += '*';
  }
  for (let k = num; k >= i + 1; k--) {
    blnk += '\u00a0';
  }
  document.write(blnk + star + '<br>');
}

// for (let i = 1; i <= num; i++) {
//   let star = '';
//   let blnk = '';
//   for (let j = 1; j <= i; j++) {
//     blnk += '\u00a0';
//   }
//   for (let k = num; k >= i + 1; k--) {
//     star += '*';
//   }
//   document.write(blnk + star + '<br>');
// }

document.write('—––——–——–' + '<br>');

for (let i = 1; i <= num; i++) {
  let star = '';
  let blnk = '';
  for (let j = 1; j <= i * 2 - 1; j++) {
    star += '*';
  }
  for (let k = num; k >= i; k--) {
    blnk += '\u00a0';
  }
  document.write(blnk + star + '<br>');
}

for (let i = num - 1; i >= 1; i--) {
  let blnk = '';
  let star = '';
  for (let j = num; j >= i; j--) {
    blnk += '\u00a0';
  }
  for (let k = 1; k <= i * 2 - 1; k++) {
    star += '*';
  }
  document.write(blnk + star + '<br>');
}

document.write('—––——–——–' + '<br>');

for (let i = 1; i <= num; i++) {
  let star = '';
  let blnk = '';
  for (let j = 1; j <= i * 2 - 1; j++) {
    star += '*';
  }
  for (let k = num; k >= i; k--) {
    blnk += '\u00a0';
  }
  document.write(blnk + star + '<br>');
}
