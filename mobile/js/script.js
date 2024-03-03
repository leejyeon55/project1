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
		$('.ham_menu').addClass('move');
	});

	// xmark 클릭시 메뉴 사라짐
	$('.fa-xmark').on('click',function () {
		$('.ham_menu').removeClass('move');
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
	
	
	function startSlider() {
	  setIntervalID = setInterval(slide2Fn, 2500);};
	
	function stopSlider() {clearInterval(setIntervalID);};
	  startSlider();
	
	  //플레이버튼
	  $('#play').on('click',function () {
		$(this).hide(); 
		$('#stop').show(); 
		startSlider();
	  });
	  
	  // 멈춤 버튼
	  $('#stop').on('click',function () {
		$(this).hide(); 
		$('#play').show(); 
		stopSlider();
	  });
	
	  // 페이저버튼
	  pagerbtn.on('click',function () {
		const i = $(this).index();
		pagerbtn.removeClass('on');
		$(this).addClass('on');
		pagerMove(i);
	  });
	  function pagerMove(i) {
		let currentEl = slide2.eq(current);
		let nextEl = slide2.eq(i);
		currentEl.css({left:0}).stop().animate({left:'-100%'},500);
		nextEl.css({left:'100%'}).stop().animate({left:'0%'},500);
		current = i;
	  }
	
	});

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

