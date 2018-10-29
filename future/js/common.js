
$(function() {

	$('.portfolio_block').on('mousewheel', function(event) {
});

	$(window).scroll(function(){
		if ($(this).scrollTop() >= $('.portfolio_block').offset().top + 0) {
			$('#item1').addClass('active');
		}
		else{
			$('#item1').removeClass('active')
		}
		if ($(this).scrollTop() >= $('.portfolio_block').offset().top + 110) {
			$('#item1').removeClass('active')
			$('#item2').addClass('active')
		}
		else{
			$('#item2').removeClass('active')
		}
		if ($(this).scrollTop() >= $('.portfolio_block').offset().top + 210) {
			$('#item2').removeClass('active')
			$('#item3').addClass('active')
		}
		else{
			$('#item3').removeClass('active')
		}
		if ($(this).scrollTop() >= $('.portfolio_block').offset().top + 310) {
			$('#item3').removeClass('active')
			$('#item4').addClass('active')
		}
		else{
			$('#item4').removeClass('active')
		}
	});

});
