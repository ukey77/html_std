$(function () {

  // 1. slider
  let currentIdx = 0;
  let firstImg = $('.sliderWrap .slider').eq(0).clone(true); //첫번째이미지복사
  $('.sliderWrap').append(firstImg); // sliderWrap 넣기

  setInterval(function () {
    currentIdx++;
    $(".sliderWrap").animate({ marginTop: -350 * currentIdx + "px" }, 600); //marginTop은 height값을 줘야함 100% (X)


    if (currentIdx == 3) {
      setTimeout(function () {
        $(".sliderWrap").animate({ marginTop: 0 }, 0);
        currentIdx = 0;
      });
    };

  }, 3000);


  //2. nav
  // $('.nav>ul>li').mouseover(function(){
  //   $(this).children('ul').stop().show()
  //   $(this).siblings().children('ul').hide()
  // });
  $('.nav>ul>li').mouseover(function () {
    $(this).children('ul').stop().slideDown(300);
  });
  $('.nav>ul>li').mouseout(function () {
    $(this).children('ul').stop().slideUp(100);
  });

  // 3. popup
  $('.popup_btn').click(function () {
    $('.popup_view').show();
  });

  $('.popup_close').click(function () {
    $('.popup_view').hide();
  });

});