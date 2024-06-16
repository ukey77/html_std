$(function(){

  // slider
  let currentIdx=0;
  let firstImg=$('.sliderWrap .slider').eq(0).clone('true');
  $('.sliderWrap').append(firstImg);

  setInterval(function(){
    currentIdx++;
    $('.sliderWrap').animate({marginTop: -currentIdx * 350 + 'px'},750);

    if(currentIdx==3){
      setTimeout(function(){
        $('.sliderWrap').animate({marginTop:0},0);
        currentIdx=0;
      },0)
    }''

  },3000);


  // nav
  $('.nav>ul>li').mouseover(function(){
    $('.nav>ul>li>ul').stop().slideDown(300);
    $('#header').addClass('on');
  });

  $('.nav>ul>li').mouseout(function(){
    $('.nav>ul>li>ul').stop().slideUp(100);
    $('#header').removeClass('on');
  });


  // tabmenu
  const tabMenu = $('.info_header ul li');
  const tabCont = $('.info_cont div');

  tabCont.hide().eq(0).show();

  tabMenu.click(function(){
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