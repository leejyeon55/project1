//변수 초기화
const dep1=$('nav>.gnb>.main_nav>li');
const header=$('header');
const headerH=$('header').height();
//dep1 이벤트함수
dep1.on({
    mouseenter:function (){
    //dep1 중 마우스 올라간 this의 하위 ul 표시
        $(this).find('ul').show();
        let subH =$(this).find('ul').height();
        let newHeaderH=headerH + subH;
        header.stop().animate({height:newHeaderH})
        $('.after').addClass('on');
},
    mouseleave:function (){
        //dep1 하위 ul 모두 숨김
        dep1.find('ul').hide();
        header.stop().animate({height:headerH})
        $('.after').removeClass('on');
    }
})