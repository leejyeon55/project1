//현재시간
$(()=>{function time(){
    let day = new Date();
    let now = day.toLocaleTimeString();
    document.querySelector('#time').innerHTML=now;
};
time();
setInterval(time, 1000);
});

//main_slide
$(() => {
	let slide = $("#slides>li");
	let current = 0;
	let setIntervalID;
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

// ham nav
$(()=>{
	// 햄버거메뉴 클릭시 메뉴 등장
	$('.fa-bars').on('click',function () {
		$('.ham').addClass('move');
		$('.black').addClass('in');
	});

	// xmark 클릭시 메뉴 사라짐
	$('.fa-xmark').on('click',function () {
		$('.ham').removeClass('move');
		$('.black').removeClass('in');
	});
	const hamDep2 = $('.ham .dep2');
	hamDep2.hide();
	$('.ham .ham_menu .dep1').on('click', function (e) {
		e.preventDefault();
		let tg = $(this);
		tg.find('.dep2').slideToggle(500);
	});
});

//exh1 swiper slide
let exhswiper = new Swiper('.content1 .swiper', {
	slidesPerView: 2,
	loop: true,
	spaceBetween: 20,
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
	var direction = window.innerWidth <= 425 ? 'vertical' : 'horizontal';
  
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


  //exh2 swiper
  $(()=>{
	const Exhswiper = new Swiper('.content2 .mySwiper', {
	  slidesPerView: 2,
	  spaceBetween: 20,
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
	const Exhswiper = new Swiper('.content3 .mySwiper', {
	  slidesPerView: 2,
	  spaceBetween: 25,
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
    const photoSwiper = new Swiper('.content6 .mySwiper', {
      slidesPerView: 2,
      spaceBetween: 25,
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


//pc로 이동
const pc = $('.pc');
		let pcEvent = 0;
		pc.on('click',function (e) {
			e.preventDefault();
			pcEvent = 1;
			pageChage(pcEvent);
		});
		function pageChage(pcEvent) {
			if (Math.floor(window.devicePixelRatio) > 2 || pcEvent > 0) {
				location.href = "../index.html";
			}
		};
		console.log(pc);

