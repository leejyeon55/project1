//현재시간

function time(){
    let day = new Date();
    let now = day.toLocaleTimeString();
    document.querySelector('#time').innerHTML=now;
};
time();
setInterval(time, 1000);



// nav
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

