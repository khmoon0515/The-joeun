$(function(){
    $('#typo')
    .mouseenter(function(){
        $(this).css({'background-color' : 'purple'})
        $('h1').css({'color': 'purple'})
    })
    //마우스가 떠나면 원래상태로 변경 
    .mouseleave(function(){
        $(this).css({'background-color' : ''})
        $('h1').css({'color': ''})
    })



})