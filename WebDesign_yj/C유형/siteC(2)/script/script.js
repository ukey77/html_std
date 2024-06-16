$(function(){

  // 1. image slide
  let currnetIdx = 0;
  let firstImg = $('.slierWrap .slider').eq(0).clone('true');  //첫번째 이미지 복사

  $('.slierWrap').append(firstImg) //복사한 첫번째이미지 추가

  setInterval(function(){
    currnetIdx++; //index ++

    $('.slierWrap').animate({marginTop:-currnetIdx * 350 + 'px' },700)

    if(currnetIdx==3){
      setTimeout(function(){
        $('.slierWrap').animate({marginTop:0},0)
        currnetIdx=0;
      },0);
    };

  },3000);

  // 2. nav
  $('.nav>ul>li').mouseover(function(){
    $('.nav>ul>li>ul').stop().fadeIn(0);
    $('#main').addClass('on')
  });
  $('.nav>ul>li').mouseout(function(){
    $('.nav>ul>li>ul').stop().fadeOut(100);
    $('#main').removeClass('on')
  });




  // 3. popup
  $('.popup_btn').click(function(){
    $('.popup_view').show();
  });
  $('.popup_close').click(function(){
    $('.popup_view').hide();
  });























});