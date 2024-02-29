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