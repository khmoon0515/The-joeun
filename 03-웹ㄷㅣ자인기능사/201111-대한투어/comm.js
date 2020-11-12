$(function(){

    let now = 1,
        width = 100;

    setInterval(function () {

        if(now<3){
            $(".slide ul").animate({
                left : (width * now* (-1)) + '%'
            })
            now++ 

        }else{
            $('.slide ul').animate({left :0})
            now = 1

        }

    },3000)


    $(".tap section").click(function (){
        $(".tap section").removeClass("on")
        $(this).addClass("on")
    })

    $(".col2 img").click(function () {
        $("#modal").show()
    })
    $("#modal button").click(function () {
        $("#modal").hide()
    })


})