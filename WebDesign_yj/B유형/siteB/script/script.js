$(function(){

  // 1. image slide

  let currentIdx = 0;
  let firstImg = $('.sliderWrap .slider').eq(0).clone('True');
  $('.sliderWrap').append(firstImg); // sliderWrap에 복사한 첫번째 이미지 추가
  // 반복작업
  setInterval(function(){
    currentIdx++
    $('.sliderWrap').animate({marginLeft : - currentIdx * 100 + '%'},700)

    // 초기화
    if(currentIdx==3){
      setTimeout(function(){
        $('.sliderWrap').animate({marginLeft :0},0)
        currentIdx=0;
      });
    };
  },3000);


  // 2. nav
    
  $('.nav>ul>li').mouseover(function(){
    $('.nav>ul>li>ul').stop().slideDown(200);
    $('#header .container').addClass('on');
  });
  $('.nav>ul>li').mouseout(function(){
    $('.nav>ul>li>ul').stop().slideUp(200);
    $('#header .container').removeClass('on');
  });


  //3. popup

  $('.popup_btn').click(function(){
    $('.popup_view').show();
  });

  $('.popup_close').click(function(){
    $('.popup_view').hide();
  })




});