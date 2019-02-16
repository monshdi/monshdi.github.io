$(function() {

	$( () => {

		setInterval( () => {

			let p = $('.loader');

			p.css('opacity' , '0');
			p.css('zIndex', '-100');

		}, 2000);
		
	});

	$('.work-button').click( () => {
		$('.change_work').fadeOut('slow');
		$('.make_dev').delay(800).fadeIn('slow');
	});


	// Калькулятор
	let calc = document.getElementsByClassName('calc-items')[0],
			blocksNum = document.getElementById('blocks-num'),
			sliderNum = document.getElementById('slider-num'),
			modalNum = document.getElementById('modal-num'),
			calcNum = document.getElementById('calc-num'),
			totalValue = document.getElementById('total');


	const LAND = 3000,
				BLOCKSCOUNT = 500,
				SLIDERCOUNT = 500,
				MODALCOUNT = 500,
				CALCCOUNT = 1000;

				totalValue.value = LAND;

	calc.addEventListener('change', () => {
		total = LAND + (BLOCKSCOUNT * blocksNum.value) + (SLIDERCOUNT * sliderNum.value) + (MODALCOUNT * modalNum.value) + (CALCCOUNT * calcNum.value);
		totalValue.value = total;
	});


});