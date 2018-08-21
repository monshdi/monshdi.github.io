$(function() {

	var nav = $('.mnu_line');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			nav.addClass('mnu_line_wh').fadeIn('slow');
		} else {
			nav.removeClass('mnu_line_wh');
		}
	});

});
