window.addEventListener('DOMContentLoaded', function(){
	// Аккордеон
	let acc = document.getElementsByClassName('accordeon'),
		accContent = document.querySelectorAll('.tech_wrap_block_item_descr'),
		arrow = document.getElementsByClassName('arrow_button');
		

	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener('click', function(){
			accContent[i].classList.toggle('active_descr');
			arrow[i].classList.toggle('active_arrow');
		})
	};
	// Раскрытие
	let showBtn = document.getElementsByClassName('service_btn'),
	 	hideContent = document.getElementsByClassName('service_content_hide');

	 	for (let i = 0; i < showBtn.length; i++) {
	 		showBtn[i].addEventListener('click', function(){
	 			hideContent[i].classList.add('active_content');
	 			setTimeout(function(){
	 				hideContent[i].classList.remove('active_content');
	 			}, 6000);
		 	});
		 }





});