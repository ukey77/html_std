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
let num = 0;
const sliderWrap = document.querySelector('.sliderWrap');
const sliderCopy = document
  .querySelector('.sliderWrap')
  .children[0].cloneNode(true);
sliderWrap.appendChild(sliderCopy);

setInterval(function () {
  let repeatNum = num % 4; // 0 1 2 3

  sliderWrap.style.marginLeft = repeatNum * -100 + '%';

  if (repeatNum === 3) {
    repeatNum = 0;
  }
  num++;
}, 2000);
