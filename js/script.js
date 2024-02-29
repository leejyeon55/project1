// popup
$('.popup>span').on('click',function () {
    $('.popup').hide(500);
});


// 현재시간

function time(){
    let day = new Date();
    let now = day.toLocaleTimeString();
    document.querySelector('#time').innerHTML=now;
};
time();
setInterval(time, 1000);

//slide1
let slide = $('#slides>li');
let idx = 0 ;
slide.each((i,o)=>{
    $(o).css('left', i * 100 + '%');
});
function slideFn(){
 let prev=slide.eq(idx);
 move(prev,0,'-100%');
idx++;
if(idx == slide.length){
    idx = 0;
};
let next = slide.eq(idx);
move(next,"100%",0);
console.log(idx);
};

function move(tg,start,end){
    tg.css('left',start).animate({left:end},1000)
};

setInterval(
    function(){
        slideFn();
    },2500
);


//slide2
let slide2 = $('#slide>li');
let current = 0 ;
slide2.each((a,b)=>{
    $(b).css('left', a * 100 + '%');
});
function slide2Fn(){
 let prev=slide2.eq(current);
 move(prev,0,'-100%');
 current++;
if(current == slide2.length){
    current = 0;
};
let next = slide2.eq(current);
move(next,"100%",0);
console.log(current);
};

function move(tg,start,end){
    tg.css('left',start).animate({left:end},1000)
};

setInterval(
    function(){
        slide2Fn();
    },2500
);

//모바일로 이동
const moblie = $('.moblie');
		let moblieEvent = 0;
		function pageChage(mobileEvent) {
			if (window.devicePixelRatio > 1 || mobileEvent > 0) {
				location.href = './mobile/index.html';
			}
		}
		mobile.on('click', function (e) {
			e.preventDefault();
			mobileEvent = 1;
			pageChage(mobileEvent);
		});
        console.log(moblie);
