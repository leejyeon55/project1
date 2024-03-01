// popup
$(".popup>span").on("click", function () {
  $(".popup").hide(500);
});

// 현재시간

function time() {
  let day = new Date();
  let now = day.toLocaleTimeString();
  document.querySelector("#time").innerHTML = now;
}
time();
setInterval(time, 1000);

//main_slide
$(() => {
  let slide = $("#slides>li");
  let current = 0;
  const prev = $('.controls>img[alt=prev]');
  const next = $('.controls>img[alt=next]');
  const pager = $('.pager li');

  function slideFn() {
    let prev = slide.eq(current);
    move(prev, "0%", "-100%");

    //바 버튼 
    let prevPage = pager.eq(current);
    prevPage.removeClass("on");

    current++;
    if (current == slide.length) {
      current = 0;
    }
    let next = slide.eq(current);
    move(next, "100%", "0%");
    //바 버튼 
    let nextPage = pager.eq(current);
    nextPage.addClass("on");
  }
  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 1000, "easeOutCubic");
  }

  let setIntervalID;

  function timer() {
    setIntervalID = setInterval(function () {
      slideFn();
    }, 2500);
  }
  $(".banner").on({
    // 여러개의 이벤트(.on)를 실행할때는 {키:값,키:값,} 사용
    mouseenter: function () {
      clearInterval(setIntervalID);
    },
    mouseleave: function () {
      timer();
    },
  });
    next.on('click',function () {
    let prev = slide.eq(current); 
    move(prev,'0%','-100%');
    
    //바 버튼 추가
    let prevPage = pager.eq(current);
    prevPage.removeClass("on");  

    current++;
   
    if(current == slide.length){ 
        current = 0;
    }
    let next = slide.eq(current); 
    move(next,'100%','0%');

    //바 버튼추가
    let nextPage = pager.eq(current);
    nextPage.addClass("on"); 

    });
    prev.on('click',function () {
    let prev = slide.eq(current); 
    move(prev,'0%','100%');

    //바 버튼 추가
    let prevPage = pager.eq(current);
    prevPage.removeClass("on");  

    current--; // 1씩 감소
   
    if(current == -slide.length){ 
        current = 0;
    }
    let next = slide.eq(current); 
    move(next,'-100%','0%');

    //바 버튼 추가
    let nextPage = pager.eq(current);
    nextPage.addClass("on"); 

    });

    pager.on('click',function () {
      const i = $(this).index();
      pager.removeClass('on');
      $(this).addClass('on');
      pagerMove(i);
    });

    function pagerMove(i) {
      let currentEl = slide.eq(current);
      let nextEl = slide.eq(i);
      currentEl.css({left:0}).stop().animate({left:'-100%'},500);
    nextEl.css({left:'100%'}).stop().animate({left:'0%'},500);
    current = i;
    }

//슬라이드 멈춤 버튼
let stopbtn = $('.bar_btn i');
stopbtn.eq(0).on('click',function () {
  stopbtn.addClass("stop");
  stopbtn.eq(1).removeClass("stop");
});

//슬라이드 플레이 버튼
let playbtn = $('.bar_btn i');
playbtn.eq(1).on('click',function () {
playbtn.addClass("stop");
playbtn.eq(0).removeClass("stop");
});


});


// exhbox3 slide
$(()=>{
  const prev = $('.exhbar3>.fa-chevron-left');
  const next = $('.exhbar3>.fa-chevron-right');
  let exh3Slide = $(".exhibit3>li");
  let idxNum = 0;
  function exh3SlideFn() {
    let prev = exh3Slide.eq(idxNum);
    move(prev, "0%", "-100%");


    idxNum++;
    if (idxNum == exh3Slide.length) {
      idxNum = 0;
    }
    let next = exh3Slide.eq(idxNum);
    move(next, "100%", "0%");
  }
  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 1000);
  }

  //클릭시
  next.on('click',function () {
    let prev = exh3Slide.eq(idxNum); 
    move(prev,'0%','-100%');
    exh3Slide.eq(idxNum).addClass('on');
    // exh3Slide.css('opacity','1');
    idxNum++;
   
    if(idxNum == exh3Slide.length){ 
      idxNum = 0;
    }
    let next = exh3Slide.eq(idxNum); 
    exh3Slide.eq(idxNum).addClass('on');
    move(next,'100%','0%');

    });
    prev.on('click',function () {
    let prev = exh3Slide.eq(idxNum); 
    move(prev,'0%','100%'); 
    exh3Slide.addClass('on');
    // exh3Slide.css('opacity','1');
    idxNum--; // 1씩 감소
   
    if(idxNum == -exh3Slide.length){ 
      idxNum = 0;
    }
    let next = exh3Slide.eq(idxNum); 
    move(next,'-100%','0%');

    });



});

//popupzone slide
$(()=>{
let pagerbtn = $('.pop_pager>li');
let slide2 = $('#slide>li');
let current = 0 ;

function slide2Fn() {
  let prev = slide2.eq(current);
  move(prev, "0%", "-100%");
  slide2.addClass("on");

  //바 버튼 
  let prevPage = pagerbtn.eq(current);
  prevPage.removeClass("on");

  current++;
  if (current == slide2.length) {
    current = 0;
  }
  let next = slide2.eq(current);
  move(next, "100%", "0%");
  //바 버튼 
  let nextPage = pagerbtn.eq(current);
  nextPage.addClass("on");
}

function move(tg,start,end){
    tg.css('left',start).animate({left:end},1000)
};


setInterval(
    function(){
        slide2Fn();
    },2500
);


});




//모바일로 이동
const moblie = $(".moblie");
let moblieEvent = 0;

moblie.on("click", function (e) {
  e.preventDefault();
  mobileEvent = 1;
  pageChage(mobileEvent);
});
function pageChage(mobileEvent) {
  if (window.devicePixelRatio > 1 || mobileEvent > 0) {
    location.href = "./mobile/index.html";
  }
}
console.log(moblie);
