const $popup = document.querySelector('#popup');

$popup.children[1].addEventListener('click',dat);

function dat(){
    $popup.style.display = 'none';
};

// mission
const open_btn = document.querySelector('footer');

// 1

open_btn.addEventListener('click',aul);

function aul(){
    $popup.style.display = 'block';
};


// 2

open_btn.addEventListener('click',function(){
    $popup.style.display = 'block';
});











