$(function() {

	setTimeout(function (){
		$('.login_wrap').css('top', '40px');
	},200);

	$('.btn-wh').click(function() {
		$('.login_wrap').removeClass('login_vis');
		$('.login_wrap').css('top', '40px');
	});
	$('.btn-close').click(function() {
		$('.login_wrap').css('top', '-1000px');
		$('.main_wrap').fadeIn(1200);
	});

	
	$('#task').click(function(){
		let topHead = $('#task h3').html();
		$('.top_head h1').append('<h1>' + topHead + '</h1> <br> <div class="btn-add">Еще задача</div>');
		$('.top_head').css("transform" , "scaleX(1)")
		$('.sel_wrap').fadeOut(500);

		$('.btn-add').click(function addTask() {
			$('.task_wrap_form').fadeIn(600);
		});
		
	})

	$('#work').click(function(){
		let topHead = $('#work h3').html();
		$('.top_head h1').append('<h1>' + topHead + '</h1>');
		$('.top_head').css("transform" , "scaleX(1)")
		$('.top_head').css('z-index', '999');
		$('.sel_wrap').fadeOut(500);
	});

	$('#calendar').click(function(){
		let topHead = $('#calendar h3').html();
		$('.top_head h1').append('<h1>' + topHead + '</h1>');
		$('.top_head').css("transform" , "scaleX(1)")
		$('.sel_wrap').fadeOut(500);
	});
	// Получение данных формы
	


	// Кнопка добавить действие

	$('.add-check').click(function(){
		$('.check_wrap_items').append('<input type="checkbox"> <input type="text" placeholder="Новое действие"> <br> ');
	});

	function createTask(){
		let nameTask = $('input[name="task-name"').val(),
			dateTask = $('input[name="task-data"').val();
		$('.task_wrap_items .row').append('<div class="col-md-4"><div class="tasc_card"><h2>' + nameTask +'</h2><b>до ' + dateTask + '</b></div></div>');

	}

	let taskButton = $('.ok_button');

	for(let i = 0; i < taskButton.length; i++){
		taskButton.click(function(event){
			$('.task_wrap_form').fadeOut(400);
			createTask();
		});
	};
	

});
