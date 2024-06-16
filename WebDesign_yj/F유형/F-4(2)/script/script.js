$(function () {

  // 1. slider 가로방향
  // let currentIdx = 0;
  // let firstImg = $('.sliderWrap .slider').eq(0).clone('true');

  // $('.sliderWrap').append(firstImg);

  // setInterval(function () {
  //   currentIdx++;
  //   $('.sliderWrap').animate({ marginLeft: -currentIdx * 100 + "%" }, 700);

  //   if (currentIdx == 3) {
  //     setTimeout(function () {
  //       $('.sliderWrap').animate({ marginLeft: 0 }, 0);
  //       currentIdx = 0
  //     }, 0)
  //   };
  // }, 3000);



  // 1-2 slider 세로

  // let currentIdx = 0;
  // let firstSlide = $('.sliderWrap .slider').eq(0).clone('true');

  // $('.sliderWrap').append(firstSlide);

  // setInterval(function(){
  //   currentIdx++;
  //   $('.sliderWrap').animate({marginTop: -currentIdx * 350 + 'px' },700);

  //   if(currentIdx==3){
  //     setTimeout(function(){
  //       $('.sliderWrap').animate({marginTop: 0},0);
  //       currentIdx=0;
  //     },0)
  //   };

  // },3000)

  // 1-3. fadeIn/Out Slider
  
  let currentIdx = 0

  setInterval(function(){
    let nextIdx = (currentIdx+1) % 3;

    $('.sliderWrap .slider').eq(currentIdx).fadeOut()
    $('.sliderWrap .slider').eq(nextIdx).fadeIn()


  currentIdx = nextIdx

  },3000)



















  // 2. nav

  $('.nav>ul>li').mouseover(function () {
    $('.nav>ul>li>ul').stop().slideDown(300);
    $('#header').addClass('on');
  });
  $('.nav>ul>li').mouseout(function () {
    $('.nav>ul>li>ul').stop().slideUp(100);
    $('#header').removeClass('on');
  });


  // 3. tabmenu

  const tabBtn = $('.info_header ul li');
  const tabCont = $('.info_cont div');

  tabCont.hide().eq(0).show();

  tabBtn.click(function () {
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