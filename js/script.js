//topbar
let topBar = $('.topbar');
let wrapH = $('.wrap').height();
let wH = $(window).height();

function getP(sct){
  let scrollRph = wrapH - wH;
  let scrollP = Math.floor((sct / scrollRph) * 100);
  render(scrollP);
};
function render(scrollP){
  if(scrollP >=100){
    scrollP = 100;
  }
  topBar.css('width',scrollP);
}
$(window).on('scroll',()=>{
  let sct = $(window).scrollTop();
  getP(sct);
})




// popup
$(".popup>span").on("click", function () {
  $(".popup").hide(500);
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

//로그인페이지
$(()=>{
  /* login */
const loginBtn = $('#login');
const logoutBtn = $('#logout');
logoutBtn.css('display', 'none');
function init() {
	if (!localStorage.getItem('user')) {
		localStorage.setItem('user', JSON.stringify({ id: 'test', password: '5246', isLoggedIn: false }));
	}
}

/* 로그인 */
function login() {
	let uid = $('#uid').val();
	let upw = $('#upw').val();
	let user = JSON.parse(localStorage.getItem('user'));
	if (uid === user.id && upw === user.password) {
		alert('로그인성공');
		$('.input_group,#login').css('display','none');
		logoutBtn.css('display','flex');
		$('.spotmenu>a:first-child').text('로그아웃');
		user.isLoggedIn=true;
		localStorage.setItem('user',JSON.stringify(user)); // user에 트루값이 들어옴
	} else {
		alert('아이디를 입력해주세요.');
	}
}
/* 로그아웃 */
function logout(){
 	let user = JSON.parse(localStorage.getItem('user'));
 	if (user.isLoggedIn) {
		alert('로그아웃 성공');
		user.isLoggedIn=false;
		localStorage.setItem('user',JSON.stringify(user));
		$('.input_group,#login').css('display','flex');
		logoutBtn.css('display','none');
 	}
}
/* 로그인/아웃 버튼 이벤트 핸들러 */
loginBtn.on('click', (e) => {
	e.preventDefault();
	login();
});
logoutBtn.on('click', (e) => {
	e.preventDefault();
	logout();
});
//logoutBtn.on('click', () => {});
/* 초기화 */
init();
})






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