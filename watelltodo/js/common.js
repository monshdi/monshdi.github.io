$(function() {

	$('.btn-wh').click(function() {
		// $('.login_wrap').removeClass('login_vis');
		$('.login_wrap').css('top', '40px');
	});
	$('.btn-close').click(function() {
		$('.login_wrap').css('top', '-1000px');
	});

	
	$('#task').click(function(){
		let topHead = $('#task h3').html();
		$('.top_head h1').delay(5000).fadeIn().append('<h1>' + topHead + '</h1>');
		$('.top_head').css("transform" , "scaleX(1)")
		$('.sel_wrap').fadeOut(500);
	});
	$('#work').click(function(){
		let topHead = $('#work h3').html();
		$('.top_head h1').append('<h1>' + topHead + '</h1>');
		$('.top_head').css("transform" , "scaleX(1)")
		$('.sel_wrap').fadeOut(500);
	});
	$('#calendar').click(function(){
		let topHead = $('#calendar h3').html();
		$('.top_head h1').append('<h1>' + topHead + '</h1>');
		$('.top_head').css("transform" , "scaleX(1)")
		$('.sel_wrap').fadeOut(500);
	});

});
