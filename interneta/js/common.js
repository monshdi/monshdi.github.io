$(document).ready(function() {

if(screen.width > 992) {
	$(".top_line").animated("fadeInDown", "fadeOutDown");
	$(".top_logo").animated("fadeInDown", "fadeOutDown");
	$(".head_text h1").animated("fadeIn", "fadeOut");
	$(".head_text strong").animated("fadeIn", "fadeOut");
	$(".head_text p").animated("fadeIn", "fadeOut");
	$(".left_about").animated("slideInLeft", "fadeOut");
	$(".right_wrap").animated("slideInLeft", "fadeOut");
	$(".left_wrap").animated("slideInUp", "fadeOut");
	$(".right_about").animated("fadeIn", "fadeOut");
	}
if(screen.width> 128){
	$(".top_line").animated("fadeIn", "fadeOut");
	$(".top_logo").animated("fadeIn", "fadeOut");
	$(".head_text h1").animated("fadeIn", "fadeOut");
	$(".head_text strong").animated("fadeIn", "fadeOut");
	$(".head_text p").animated("fadeIn", "fadeOut");
	$(".left_about").animated("fadeIn", "fadeOut");
	$(".right_wrap").animated("fadeIn", "fadeOut");
	$(".left_wrap").animated("fadeIn", "fadeOut");
	$(".right_about").animated("fadeIn", "fadeOut");
}

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		autoHeight : true
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});

$(window).load(function() {

	$(".transition-loader").delay(400).fadeOut("slow");
	$(".transition-loader_inner").fadeOut();  
});
