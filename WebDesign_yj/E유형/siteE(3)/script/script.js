$(function () {

  // 1. slider
  // let currentIdx = 0;
  // let firstImg = $('.sliderWrap .slider').eq(0).clone('true');
  // $('.sliderWrap').append(firstImg);

  // setInterval(function () {
  //   currentIdx++;
  //   $('.sliderWrap').animate({ marginLeft: -currentIdx * 100 + '%' }, 700);

  //   if (currentIdx == 3) {
  //     setTimeout(function () {
  //       $('.sliderWrap').animate({ marginLeft: 0 }, 0);
  //       currentIdx = 0;
  //     }, 0);
  //   };

  // }, 3000);

  // 2. slider

  let currnetIdx = 0;

  setInterval(function(){
    let nextIdx = (currnetIdx+1) % 3; 


    $('.sliderWrap .slider').eq(currnetIdx).fadeOut(300)
    $('.sliderWrap .slider').eq(nextIdx).fadeIn(300);

    currnetIdx=nextIdx;

  },3000)


  //2. nav
  $('.nav>ul>li').mouseover(function () {
    $(this).children('ul').stop().slideDown(300);
  });
  $('.nav>ul>li').mouseout(function () {
    $(this).children('ul').stop().slideUp(100);
  });


  //3. popup
  $('.popup_btn').click(function () {
    $('.popup_view').show()
  });

  $('.popup_close').click(function () {
    $('.popup_view').hide()
  });



















});