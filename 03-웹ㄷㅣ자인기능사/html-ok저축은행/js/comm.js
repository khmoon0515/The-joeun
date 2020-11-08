// 준비이벤트
$(function () {
    // 명령문

    // tap 
    // tap섹션을 클릭했을때 없어졌다가 탭을 다시 클릭시 보여지고 싶을때 
    $(".tap section").click(function () {
        $(".tap section").removeClass("on")
        $(this).addClass("on")
    })

    // madal
    // 모달 창 열기
    $(".col2 img").click(function () {
        $("#modal").show()
    })
    // 모달창 닫기
    $("#modal button").click(function () {
        $("#modal").hide()
    })

    // slide
    let now = 1,  //현재 보여지는 이미지를 now 변수에 지정 
       width = 100;  // 이미지의 가로사이즈를 width변수에 지정

    setInterval(function () {

        // if(조건){참일경우 실행문}else{거짓일 경우}
        //첫번째 두번째 이미지일 경우
        if(now<3){
            $(".slide ul").animate({
                left : (width * now* (-1)) + '%'
            })
            now++ //now  = now+1 (결론 2>3>4 ...계속 늘어남 )  

        }else{
            $('.slide ul').animate({left :0})
            now = 1

        }



    },3000) // 3초마다 실행하기



})