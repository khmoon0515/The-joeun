$(function(){

    //초수 제한 (변수로 설정하기)
    let duration = 300;

    //1번~4번째 버튼을 선택 후 애니매이션으로 컬러를 변경할때
    $('#buttons1 button:nth-child(-n+4)')
    .mouseenter(function(){
        //stop으로 애니메이트 중간을 멈추고 다음행동을 함
        $(this).stop(true).animate({
            'background-color' : 'green',
            'color' : 'white'
        },duration)        
    })
    // 마우스를 땠을때 다시 원래 컬러로 변경
    .mouseleave(function(){
        $(this).stop(true).animate({
            'background-color' : '#fff',
            'color' : '#ebc000'
        },duration)        
    })

    //5번~8번째 버튼에 마우스 오버했을때 보더값으로 테두리 모양을 만들때
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
    .mouseenter(function(){
        $(this).stop().animate({
            'border-width' : '10px',
            'color': 'purple'
        },duration,'easeInOutCubic')
    })
    .mouseleave(function(){
        $(this).stop().animate({
            'border-width' : '0',
            'color': '#ebc000'
        },duration,'easeInOutCubic')        
    })

    $('#buttons1 button:nth-child(n+9)')
    .mouseenter(function(){
        $(this).find('span').stop().animate({
            'width':'100%'
        },duration,'easeOutQuint')
    })
    .mouseleave(function(){
        $(this).find('span').stop().animate({
            'width':'0'
        },duration,'linear')
    })


    
})