$(function () {

  // 1. slider

  let currentIdx = 0;
  let firstImg = $('.sliderWrap .slider').eq(0).clone('true');
  $('.sliderWrap').append(firstImg);

  setInterval(function () {
    currentIdx++;
    $('.sliderWrap').animate({ marginTop: -currentIdx * 100 + 'vh' }, 700);

    if (currentIdx == 3) {
      setTimeout(function () {
        $('.sliderWrap').animate({ marginTop: 0 }, 0);
        currentIdx = 0;
      }, 0);
    };

  }, 3000);


  // 2.nav
  $('.nav>ul>li').mouseover(function () {
    $(this).children('ul').stop().slideDown(300);
  });
  $('.nav>ul>li').mouseout(function () {
    $(this).children('ul').stop().slideUp(100);
  });


  // 3. popup
  $('.popup_btn').click(function () {
    $('.popup_wrap').show();
  });
  $('.popup_close').click(function () {
    $('.popup_wrap').hide();
  });






});