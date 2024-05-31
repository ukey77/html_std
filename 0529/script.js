// alert('하이');

// 팝업창 닫기
const $popup = document.querySelector('#popup');

$popup.children[1].addEventListener('click', dat);

function dat() {
    $popup.style.display = 'none';
};

// 팝업창 열기
const open_btn = document.querySelector('footer');

open_btn.addEventListener('click', aul);

function aul() {
    $popup.style.display = 'block';
};


// 메뉴1 > 서브메뉴1-2 클릭시 변경 (2)
const subMenu = document.querySelector('.subMenu').children[1];

subMenu.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
    this.style.textDecoration='none';
    this.style.color='white';
});


const popup2 = document.getElementById('popup');
// popup2.addEventListener('click',function(){
//     this.style.background='tomato';
// });

popup2.addEventListener('click',tomato);

function tomato(){
    this.style.background='tomato';
};


const subMenu3 = document.querySelectorAll('.subMenu')[2];

subMenu3.children[2].addEventListener('click',gold);

function gold(){
    subMenu3.children[2].style.background='gold';
}