$(function(){

    // Меню
    $(window).scroll(function(){
		let scrollDo = $(window).scrollTop();
		if (scrollDo > 150 ) {
			$('.top-line').css('background-color', '#000');
		} else {
            $('.top-line').css('background-color', 'rgba(0,0,0,0.2)');
        };
    });

    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.case-slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $(".form_top").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
    });
    
    let scrollBtn = $('.scroll');

	scrollBtn.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop : $(this.hash).offset().top - 240
		}, 800)
	});

})

window.addEventListener("DOMContentLoaded", function(){

    // Модальное окно

    let portItem = document.querySelectorAll('.port_item'),
        modal = document.querySelector('.modal-video'),
        close = document.querySelector('.close-btn'),
        modalItem = document.querySelector('.modal-video_item'),
        logoPlay = document.querySelector('.logoPlay'),
        videos = ['https://www.youtube.com/embed/zM03_qdLJVc', 'https://www.youtube.com/embed/RozbzU0IILI', 'https://www.youtube.com/embed/YSXAiFWhWTs', 'https://www.youtube.com/embed/jAslx25Zy04', 'https://www.youtube.com/embed/pH5UejTobec', 'https://www.youtube.com/embed/Alj3VKS7Dac',  'https://www.youtube.com/embed/tVMi4TuLwXc'];

        logoPlay.addEventListener('click', () => {
            modal.style.display = 'block';
            modal.style.zIndex = '1000000';
            modalItem.innerHTML = `	<iframe src="https://www.youtube.com/embed/QC1EdMkV9Iw" width="100%" height="600px" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
            setTimeout(function(){
                modal.classList.add('active-modal');
                document.body.style.overflow = 'hidden';
            }, 100);
        });

        close.addEventListener('click', ()=> {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            modal.classList.remove('active-modal');
            modalItem.innerHTML = '';
        });

        for(let i = 0; i < portItem.length; i++){
            portItem[i].addEventListener('click', ()=> {
                modal.style.display = 'block';
                modal.style.zIndex = '1000000';
                modalItem.innerHTML = `<iframe src="${videos[i]}" width="100%" height="600px" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
                setTimeout(function(){
                    modal.classList.add('active-modal');
                    document.body.style.overflow = 'hidden';
                }, 100);
            });
        };
})





let slides = document.querySelectorAll('.case_block_slider_item'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.prev'),
    descr = document.querySelectorAll('.case_block_slider_item_descr'),
    i = 0;
    descr[i].style.opacity = '1';

    next.onclick = function(){
        slides[i].classList.remove('active_slide');
        descr[i].style.opacity = '0';
        next.style.display = 'block';
        i++;
        if (i >= slides.length){
            i = 0;
        }

       
        slides[i].classList.add('active_slide');
        descr[i].style.opacity = '1';
    }
    prev.onclick = function(){
        slides[i].classList.remove('active_slide');
        descr[i].style.opacity = '0';
        i--;
        if (i < 0){
            i = slides.length - 1;
        }
        slides[i].classList.add('active_slide');
        descr[i].style.opacity = '1';
    }
    


