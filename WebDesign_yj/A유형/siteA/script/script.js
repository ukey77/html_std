$(function(){

    // // 1. slider 작업
  let currentIdx=0;

  setInterval(function(){
    let nextIdx = (currentIdx + 1) % 3

    $('.sliderWrap .slider').eq(currentIdx).fadeOut();
    $('.sliderWrap .slider').eq(nextIdx).fadeIn();

    currentIdx=nextIdx;
  },3000);


    // 2. nav작업
    $('.nav>ul>li').mouseover(function(){
      $(this).children('ul').stop().slideDown(300)
    });

    $('.nav>ul>li').mouseout(function(){
      $(this).children('ul').stop().slideUp(200)
    });

    // 3. info 탭메뉴작업
    const tabBtn = $('.infoWrap>div')//주의
    const tabmenu = $('.info_menu>a')//주의
    $('.infoWrap').hide().first().show();

    tabmenu.click(function(){
      const idx = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      tabBtn.eq(idx).show().siblings().hide()
    })

    // 4. popup작업
    $('.popup-btn').click(function(){
      $('.popup-view').show()
    });
    $('.popup-close').click(function(){
      $('.popup-view').hide()
    });

});