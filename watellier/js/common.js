$(function() {

	$('.step_choose').click(function (event) {
		$('.step_on').removeClass('active')
		var num = $(this).attr('data-num');
		$('#step' + num).addClass('active')
	});
	

});
