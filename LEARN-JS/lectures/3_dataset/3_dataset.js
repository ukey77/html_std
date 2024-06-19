let h2 = document.querySelector('h2');
let fruitName = document.querySelectorAll('h2');
h2.dataset.example = 'This is dataset'; // 변경
console.log('h2.dataset.example :', h2.dataset.example); // h2.dataset.example : hello

let $li = document.querySelectorAll('li'); // li요소
let addimg = document.querySelector('img'); // 추가되는 곳

// $li.forEach(function (item, index) {
//   item.addEventListener('click', function () {
//     // addimg.src = item.dataset.img;
//     addimg.setAttribute('src', item.dataset.img);
//     fruitName[2].textContent = $li[index].innerText;
//   });
// });

$li[0].addEventListener('click', selectItem);
$li[1].addEventListener('click', selectItem);
$li[2].addEventListener('click', selectItem);

function selectItem(event) {
  addimg.setAttribute('src', event.target.dataset.img);
  fruitName[2].textContent = event.target.textContent;
}
