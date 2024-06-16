$(function(){
  // 1. slider
  let currentIdx = 0;
  let firstImg = $('.sliderWrap .slider').eq(0).clone('true');
  $('.sliderWrap').append(firstImg);

  setInterval(function(){
    currentIdx++;
     $('.sliderWrap').animate({marginLeft : -currentIdx * 100 + '%'},700);

     if(currentIdx==3){
      setTimeout(function(){
        $('.sliderWrap').animate({marginLeft :0},0);
        currentIdx=0;
      },0);
     };
  },3000);

  // 2. nav
  $('.nav>ul>li').mouseover(function(){
    $(this).children('ul').stop().slideDown(300);
  });
  $('.nav>ul>li').mouseout(function(){
    $(this).children('ul').stop().slideUp(100);
  });


  // 3. tabmenu
  const tabBtn =  $('.info_header ul li');
  const tabCont = $('.info_cont article');
  tabCont.hide().eq(0).show();

  tabBtn.click(function(){
    let index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    tabCont.eq(index).show().siblings().hide();
  });


  // 4. popup
  $('.popup_btn').click(function(){
    $('.popup_view').show();
  });
  $('.popup_close').click(function(){
    $('.popup_view').hide();
  });


});