alert('연결되지롱 😆');
// 팝업창 닫기
const $popup = document.querySelector('#popup');

$popup.children[1].addEventListener('click', dat);

function dat() {
    $popup.style.display = 'none';
};

// 팝업창 열기
const open_btn = document.querySelector('footer');

open_btn.addEventListener('click', aul);

function red() {
    $popup.style.display = 'block';
};

/* 
// 메뉴1 > 서브메뉴1-2 클릭시 변경 (1)
const subMenu = document.querySelector('.subMenu').children[1];

subMenu.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
    this.style.textDecoration='none';
    this.style.color='white';
});

 */



// 메뉴1 > 서브메뉴1-2 클릭시 변경 (2)
const subMenu = document.querySelector('.subMenu').children[1];
function red(){
    subMenu.style.backgroundColor = 'red';
};

