$(function(){

  // 1. 슬라이드

  let currentIdx = 0;
  let firstImg = $('.sliderWrap .slider').eq(0).clone('true'); // 첫번째 이미지 슬라이드 복사

  $('.sliderWrap').append(firstImg); //sliderWrap에 추가

  setInterval(function(){
    currentIdx++;
    $('.sliderWrap').animate({marginLeft:-currentIdx * 100 + "%"},700);

    if(currentIdx==3){

      setTimeout(function(){
        $('.sliderWrap').animate({marginLeft:0},0);
        currentIdx=0;
      },0);
    };
  },3000);

  // 2. nav
  $('.nav>ul>li').mouseover(function(){
    $(this).children('ul').stop().slideDown(300);

  });
  $('.nav>ul>li').mouseout(function(){
    $(this).children('ul').stop().slideUp(300);
  });


  // 3. popup
  $('.popup_btn').click(function(){
    $('.popup_view').show();
  });

  $('.popup_close').click(function(){
    $('.popup_view').hide();
  });









});