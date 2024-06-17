let btn1 = document.getElementsByClassName('btn1');
let btn2 = document.getElementsByClassName('btn2');

btn1[0].onclick = function () {
  alert('hello 프로퍼티리스너');
};

// btn2[0].addEventListener('click', function () {
//   alert('하이하이');
// });

// btn2[0].addEventListener('click', Helloevent1);
// function Helloevent1() {
//   alert('addEvent');
// }

// btn2[0].removeEventListener('click', Helloevent1);

btn2[0].addEventListener('click', function (e) {
  console.log('event', e);

  // console.log(e.screenY);
});
