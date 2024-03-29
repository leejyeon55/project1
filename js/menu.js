//딤dimm처리

const dep1 = $('.dep1');
const header = $('header');
const headerH = $('header').height();
dep1.on({
	mouseenter: function () {
		//dep1 하위 ul 모두 숨김
		dep1.find('ul').hide();
		//dep1 중 마우스 올라간 this의 하위 ul 표시
		let subH = $(this).find('ul').height();
		let newHeaderH = headerH + subH;
		header
			.find('.bg')
			.stop()
			.animate({ height: newHeaderH + 50 }, 500);
		$(this).find('ul').slideDown(500);
	},
	mouseleave: function () {
		//dep1 하위 ul 모두 숨김
		dep1.find('ul').hide();
		header.find('.bg').stop().animate({ height: 0 });
	},
});

header.on({
	mouseenter: function () {
		header.addClass('on');
		console.log(this);
	},
	mouseleave: function () {
		header.removeClass('on');
	},
});
