$(function() {

	$( () => {

		setInterval( () => {

			let p = $('.loader');

			p.css('opacity' , '0');
			p.css('zIndex', '0');

		}, 2000);
		
	});

	$('.work-button').click( () => {
		$('.change_work').fadeOut('slow');
		$('.make_dev').delay(800).fadeIn('slow');
	});

});
