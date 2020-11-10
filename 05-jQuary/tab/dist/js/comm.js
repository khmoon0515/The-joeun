$(function(){

    $('.tab').each(function(){

        //$(this) - 방금 내가 클릭한 탭네브 
        //안그러면 다같이 움지임 
        let $탭리스트 = $(this).find('.tab-nav'),
            탭링크 = $탭리스트.find('a'),
            $탭패널 = $(this).find('.tab-panel')

            $탭리스트.on('click', 'a', function(event){
            //링크 클릭시 기본동작 취소 
            event.preventDefault()

            let $this = $(this)
            //만약 이미 선택된 탭이라면 (on 클래스를 가지고 있다면)
            // $(this) = $('.tab-nav a')
            if ($this.parent().hasClass('.on')) {
                //아무작업도 하지말고 중지
                return
            }

            //모든 tab의 .on 삭제
            $('.tab-nav li').removeClass('.on')
            //방금 내가 클릭한 a 태그의 엄마에게 .on 붙임
            $(this).parent().addClass('.on')

            //모든 패널 안보이게
            $('.tab-panel').hide()

            //바음 내가 클릭한 a태그의 속성값(href)을 가진 패널 표시
            $($(this).attr('href'))


        })

        //첫번째 탭을 선택한 상태로
        $('.tab-nav a').eq(0).trigger('click')

    })

})