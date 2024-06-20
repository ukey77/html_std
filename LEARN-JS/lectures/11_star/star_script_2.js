let num = 5;

// for (let i = 1; i <= num; i++) {
//   let star = '';
//   star += '*'.repeat(i);
//   console.log(star);
// }

// for (let j = num; j >= 1; j--) {
//   let star = '';
//   star += '*'.repeat(j);
//   console.log(star);
// }

// for (let i = 1; i <= num; i++) {
//   let blnk = '';
//   let star = '';

//   for (let j = 1; j <= i * 2 - 1; j++) {
//     star += '*';
//   }
//   for (let k = num; k >= i; k--) {
//     blnk += '-';
//   }
//   console.log(blnk + star);
// }

for (let i = 0; i < num; i++) {
  let blnk = '';
  let star = '';
  for (let j = 0; j <= i * 2; j++) {
    if (i == 0 || j == 0 || j == i * 2) {
      star += '*';
    } else {
      star += ' ';
    }
  }
  for (let j = num; j >= i + 2; j--) {
    blnk += ' ';
  }
  console.log(blnk + star);
}
// i는 감소하는 중 5 4 3 2 1 0
// star도 감소해야함
// blnk 는 늘어나야함
for (let i = num - 1; i > 0; i--) {
  let blnk = '';
  let star = '';
  for (let j = 0; j < i * 2 - 1; j++) {
    if (i == num || i == 1 || j == 0 || j == i * 2 - 2) {
      star += '*';
    } else {
      star += ' ';
    }
  }
  for (let k = num; k >= i + 1; k--) {
    blnk += ' ';
  }
  console.log(blnk + star);
}

console.log('==============');

for (let i = 1; i <= num; i++) {
  let star = '*';
  let blnk = '';

  for (let j = num; j >= i; j--) {
    blnk += '-';
  }
  console.log(blnk + star.repeat(i));
}
console.log('==============');

for (let i = 1; i <= num; i++) {
  let star = '*';
  console.log(star.repeat(i));
}
