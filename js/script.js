
// popup
$(".popup>span").on("click", function () {
  $(".popup").css('display','none');
});

// 현재시간
$(()=>{function time() {
  let day = new Date();
  let now = day.toLocaleTimeString();
  document.querySelector("#time").innerHTML = now;
}
time();
setInterval(time, 1000);})

//main_slide
$(() => {
  let slide = $("#slides>li");
  let current = 0;
  let setIntervalID;
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

  function startSlider() {
    setIntervalID = setInterval(slideFn, 2500);};
  function stopSlider() {clearInterval(setIntervalID);};
    startSlider();
//슬라이드 플레이 버튼
$('.fa-play').on('click',function () {
  $('.fa-play').addClass('stop');
  $('.fa-stop').removeClass('stop');
  startSlider();
});

//슬라이드 바 멈춤 버튼
$('.fa-stop').on('click',function () {
  console.log('Stop button clicked, setIntervalID:', setIntervalID);
  $('.fa-stop').addClass('stop');
  $('.fa-play').removeClass('stop');
  stopSlider();

});


    // 슬라이드 버튼
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

    // 슬라이드 바
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
});

//exhbox1 slide
let exhswiper = new Swiper('.content1 .swiper', {
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  direction: getDirection(),
  navigation: {
    nextEl: '.exhbar .swiper-button-next',
    prevEl: '.exhbar .swiper-button-prev',
  },
  on: {
    resize: function () {
      exhswiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}
//배너 스와이프 버튼
$('.exhbar .swiper-button-pause').on('click', function () {
  $('.exhbar .swiper-button-pause').addClass('btnon');
  $('.exhbar .swiper-button-play').addClass('btnon');
  exhswiper.autoplay.stop();
});
$('.exhbar .swiper-button-play').on('click', function () {
  $('.exhbar .swiper-button-play').removeClass('btnon');
  $('.exhbar .swiper-button-pause').removeClass('btnon');
  exhswiper.autoplay.start();
});

  //exhbox2 swiper
$(()=>{
const Exhswiper = new Swiper('.exhbox2 .mySwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.exhbar2 .swiper-button-next',
    prevEl: '.exhbar2 .swiper-button-prev',
  },
  pagination: {
    el: ".exhbar2 .swiper-pagination",
    type: "fraction",
  },
});
})

  //exhbox3 swiper
$(()=>{
const Exhswiper = new Swiper('.exhbox3 .mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.exhbar3 .swiper-button-next',
    prevEl: '.exhbar3 .swiper-button-prev',
  },
  pagination: {
    el: ".exhbar3 .swiper-pagination",
    type: "fraction",
  },
});
})



//popupzone swiper
let swiper = new Swiper(".popupzone .mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
  pagination: {
    el: ".pop_pager .swiper-pagination",
    clickable: true,
  },
	navigation: {
	  nextEl: ".pop_pager .swiper-button-next",
	  prevEl: ".pop_pager .swiper-button-prev",
	},
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

});

  //스와이퍼 슬라이드 재생멈춤버튼

  $('.popupzone .swiper-stop').on('click',function () {
    $('.popupzone .swiper-stop').addClass('btnon');
    $('.popupzone .swiper-play').addClass('btnon');
    swiper.autoplay.stop();
  
  })
  $('.popupzone .swiper-play').on('click',function () {
  $('.popupzone .swiper-play').removeClass('btnon');
  $('.popupzone .swiper-stop').removeClass('btnon');
  swiper.autoplay.start();
  })
	

//photo gallery swiper slide
  $(()=>{
    const photoSwiper = new Swiper('.content4 .mySwiper', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.controls .swiper-button-next',
        prevEl: '.controls .swiper-button-prev',
      },
    });
    })



//탑버튼
$(()=>{
  $(function () {
    // Show/hide the footer button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.go-top').fadeIn(200);
      } else {
        $('.go-top').fadeOut(200);
      }
    });

    // Animate scrolling
    $('.go-top').click(function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 500, 'easeOutQuart');
    });
  });
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
