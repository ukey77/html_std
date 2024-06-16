$(function () {

  //1. tab menu (contents>info)
  $('.info_wrap .info-menu a').click(function () {
    let index = $(this).index();
    let info_cont = $('.info_wrap .info-cont').children();

    $(this).addClass('info_active').siblings().removeClass('info_active');
    info_cont.eq(index).show().siblings().hide();
  });

  
  //2. slider
  let currnetIdx = 0;
  let firstImg = $('.sliderWrap .slider').eq(0).clone('true');
  $('.sliderWrap').append(firstImg);

  setInterval(function () {
    currnetIdx++;
    $('.sliderWrap').animate({ marginLeft: -currnetIdx * 100 + '%' }, 800)

    if (currnetIdx == 3) {
      setTimeout(function () {
        $('.sliderWrap').animate({ marginLeft: 0 }, 0)
        currnetIdx = 0;
      }, 0);
    };
  }, 3000);


  // 3. nav
  $('.nav>ul>li').mouseover(function () {
    $('.nav>ul>li').children('ul').stop().slideDown(200);
    $('#header').addClass('active');
  });
  $('.nav>ul>li').mouseout(function () {
    $('.nav>ul>li').children('ul').stop().slideUp(100);
    $('#header').removeClass('active');
  });


  // 4. popup
  $('.popup-btn').click(function () {
    $('.popup_view').show();
  })

  $('.popup_close').click(function () {
    $('.popup_view').hide();
  })









});