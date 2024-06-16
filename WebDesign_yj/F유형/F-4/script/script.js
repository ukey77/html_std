$(function () {

  // 1. slider
  let currendtIdx = 0;
  let firstImg = $('.sliderWrap .slider').eq(0).clone('true');

  $('.sliderWrap').append(firstImg);

  setInterval(function () {

    currendtIdx++;
    $('.sliderWrap').animate({ marginTop: -currendtIdx * 350 + 'px' }, 700);

    if (currendtIdx == 3) {
      setTimeout(function () {
        $('.sliderWrap').animate({ marginTop: 0 }, 0);
        currendtIdx = 0;
      }, 0);
    };
  }, 3000);


  //2. nav
  $('.nav>ul>li').mouseover(function () {
    $('.nav>ul>li').children('ul').stop().slideDown(300);
    $('#header').addClass('active')
  });

  $('.nav>ul>li').mouseout(function () {
    $('.nav>ul>li').children('ul').stop().slideUp(100);
    $('#header').removeClass('active');
  });


  //3. tabmenu
  const info_header = $('.info_header ul li');
  const info_cont = $('.info_cont div');

  info_cont.hide().eq(0).show();

  info_header.click(function () {
    let index = $(this).index();
    info_header.eq(index).addClass('on').siblings().removeClass('on');
    info_cont.eq(index).show().siblings().hide();
  });


  //4. popup
  $('.popup_btn').click(function () {
    $('.popup_view').show();
  });
  $('.popup_close').click(function () {
    $('.popup_view').hide();
  });



});