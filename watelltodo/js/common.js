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
		$('.top_head h1').append('<h1>' + topHead + '</h1>');
		$('.top_head').css("top" , "0px")
		// $('.top_line').css({"background" : "#369EBE" , "transition" : "2s"});
		$('.sel_wrap').fadeOut('slow');
	});
	$('#work').click(function(){
		let topHead = $('#work h3').html();
		$('.top_line').append('<div class="top_head"><h1>' + topHead + '</h1></div>')
		$('.top_line').css({"background" : "#369EBE" , "transition" : "2s"});
		$('.sel_wrap').fadeOut('slow');
	});
	$('#calendar').click(function(){
		let topHead = $('#calendar h3').html();
		$('.top_line').append('<div class="top_head"><h1>' + topHead + '</h1></div>')
		$('.top_line').css({"background" : "#369EBE" , "transition" : "2s"});
		$('.sel_wrap').fadeOut('slow');
	});

});
