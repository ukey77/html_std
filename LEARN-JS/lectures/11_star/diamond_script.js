'use strict';
// let num=5;

/* 
// 직사각형
for(let i=0; i<num; i++){
  let star='';
  for(let j=0; j<=i; j++){
    star+='*';
  }
  console.log(star);
}
 */

/* 
// 직사각형 repeat
for(let i=1; i<=num; i++){
  let star='';
  star += '*'.repeat(i);
  console.log(star)
}
 */

/* 
// 정삼각형
for(let i=0; i<num; i++){
  let star='';

  for(let k=num; k>i+1; k--){ 
    star +='-';
  }
  for(let j=0; j<=i*2; j++){
    star +='*';
  }
  console.log(star);
}
 */
/* 
// 거꾸로 삼각형
for(let i=0; i<num; i++){
  let star='';
  for(let j=0; j<=i-1; j++){ // 
    star +='-';
  }
  for(let k=num*2; k>i*2+1; k--){
    star+='*';
  }
  console.log(star);
} */

// 다이아몬드_방법1
/* 
// 상단피라미드
for(let i=0; i<num; i++){
  let star='';
  for(let j=num; j>i; j--){
    star+='-';
  }
  for(let k=0; k<=i*2; k++){
    star+='*';
  }
  console.log(star);
}
// 하단피라미드 - 2 (best)
for(let i=num-1; i>0; i--){
  let star ='';
  for(let k=num; k>=i;k--){
    star+='-';
  }
  for(let j=0; j<i*2-1; j++){
    star+='*';
  }
  console.log(star);
}
 */

//  하단 피라미드 -1
// for(let i=0; i<num; i++){
//   let star='';
//   for(let j=0;j<=i;j++){
//     star+='-';
//   }
//   for(let k=num*2; k>i*2+1;k--){
//     star+='*';
//   }
//   console.log(star)
// }

