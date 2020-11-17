$(function(){

  $('.nav-foot li').eq(0).addClass('on')

  //.nav-foot li를 클릭했을때
  $('.nav-foot li').click(function(event){
    //링크기능삭제
    event.preventDefault()

    $('.nav-foot li').removeClass('on')
    $(this).addClass('on')
  })
})