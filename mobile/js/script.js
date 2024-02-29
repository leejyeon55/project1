//현재시간

function time(){
    let day = new Date();
    let now = day.toLocaleTimeString();
    document.querySelector('#time').innerHTML=now;
};
time();
setInterval(time, 1000);

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