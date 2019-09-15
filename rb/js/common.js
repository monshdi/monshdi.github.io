$(function() {

	$(window).scroll(function(){
		let scrollDo = $(window).scrollTop();
		if (scrollDo > 350 && scrollDo < 3500) {
			$('.callback-btn').addClass('active-btn');
		} else {
			$('.callback-btn').removeClass('active-btn');
		}
	})

	let scrollMnu = $('.scroll');

	scrollMnu.click(function(e){
			e.preventDefault();
			$('body, html').animate({
				scrollTop : $(this.hash).offset().top - 80
			}, 600)
	})

});
