'use strict';

// nav
const mainList = document.querySelectorAll('nav>ul');
const subList = document.querySelectorAll('nav>ul>li>ul');

// a에 hover하면 하단 메뉴 보여지기
mainList.forEach(function (item, index) {
  item.addEventListener('mouseenter', function () {
    subList.forEach(function (item) {
      item.style.display = 'block';
    });
  });
});

// ul mouseleave하면 다시 하단 메뉴 사라지기
const ul = document.querySelector('ul');
ul.addEventListener('mouseleave', function () {
  subList.forEach(function (item) {
    item.style.display = 'none';
  });
});

// slide img
const sliderWrap = document.querySelector('.sliderWrap');
const sliderCopy = sliderWrap.children[0].cloneNode(true);
sliderWrap.appendChild(sliderCopy);

let num = 0;
setInterval(function () {
  num++;

  sliderWrap.style.marginLeft = -num * 100 + '%';
  sliderWrap.style.transition = 1 + 's';
  if (num === 3) {
    setTimeout(function () {
      num = 0;
      sliderWrap.style.transition = 0 + 's';
      sliderWrap.style.marginLeft = 0;
    }, 2000);
  }
}, 3000);
