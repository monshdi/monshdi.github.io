$(function() {

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('#item1').addClass('active')
		}
		else{
			$('#item1').removeClass('active')
		}
		if ($(this).scrollTop() >= 120) {
			$('#item1').removeClass('active')
			$('#item2').addClass('active')
		}
		else{
			$('#item2').removeClass('active')
		}
		if ($(this).scrollTop() >= 220) {
			$('#item2').removeClass('active')
			$('#item3').addClass('active')
		}
		else{
			$('#item3').removeClass('active')
		}
		if ($(this).scrollTop() >= 320) {
			$('#item3').removeClass('active')
			$('#item4').addClass('active')
		}
		else{
			$('#item4').removeClass('active')
		}
	});

});
