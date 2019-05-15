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
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplaySpeed: 2000
    });

    $('.case_block_slider').slick({
        centerMode: true,
        centerPadding: '80px',
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
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
        portPageItem = document.querySelectorAll('.port-page_item'),
        modal = document.querySelector('.modal-video'),
        close = document.querySelector('.close-btn'),
        modalItem = document.querySelector('.modal-video_item'),
        logoPlay = document.querySelector('.logoPlay'),
        portPageVideos = ['https://www.youtube.com/embed/wayWEb7AgJc', 'https://www.youtube.com/embed/26miyYpNTIY', 'https://www.youtube.com/embed/4MnT9Wi787s', 'https://www.youtube.com/embed/58AH38Hm9Yw', 'https://www.youtube.com/embed/S_3xKVdJ8U0', 'https://www.youtube.com/embed/cPPqGKK8Wjo', 'https://www.youtube.com/embed/0fQdy_PTEI8', 'https://www.youtube.com/embed/Iox5gTj-bxo', 'https://www.youtube.com/embed/9z9NaNexWig', 'https://www.youtube.com/embed/JCNnZd4k3n0'],
        videos = ['https://www.youtube.com/embed/zM03_qdLJVc', 'https://www.youtube.com/embed/RozbzU0IILI', 'https://www.youtube.com/embed/YSXAiFWhWTs', 'https://www.youtube.com/embed/jAslx25Zy04', 'https://www.youtube.com/embed/pH5UejTobec', 'https://www.youtube.com/embed/Alj3VKS7Dac',  'https://www.youtube.com/embed/tVMi4TuLwXc'];

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

        for(let i = 0; i < portPageItem.length; i++){
            portPageItem[i].addEventListener('click', ()=> {
                modal.style.display = 'block';
                modal.style.zIndex = '1000000';
                modalItem.innerHTML = `<iframe src="${portPageVideos[i]}" width="100%" height="600px" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
                setTimeout(function(){
                    modal.classList.add('active-modal');
                    document.body.style.overflow = 'hidden';
                }, 100);
            });
        };

        if(logoPlay) {
            logoPlay.addEventListener('click', () => {
                modal.style.display = 'block';
                modal.style.zIndex = '1000000';
                modalItem.innerHTML = `	<iframe src="https://www.youtube.com/embed/QC1EdMkV9Iw" width="100%" height="600px" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
                setTimeout(function(){
                    modal.classList.add('active-modal');
                    document.body.style.overflow = 'hidden';
                }, 100);
            });
        }

})





// let slides = document.querySelectorAll('.case_block_slider_item'),
//     next = document.querySelector('.next'),
//     prev = document.querySelector('.prev'),
//     descr = document.querySelectorAll('.case_block_slider_item_descr'),
//     i = 0;
//     descr[i].style.opacity = '1';

//     if(!slides[i].classList.has('slic-active')){
//         this.style.transform = 'scale(0.6)';
//     }
//     next.onclick = function(){
//         slides[i].classList.remove('active_slide');
//         descr[i].style.opacity = '0';
//         next.style.display = 'block';
//         i++;
//         if (i >= slides.length){
//             i = 0;
//         }

       
//         slides[i].classList.add('active_slide');
//         descr[i].style.opacity = '1';
//     }
//     prev.onclick = function(){
//         slides[i].classList.remove('active_slide');
//         descr[i].style.opacity = '0';
//         i--;
//         if (i < 0){
//             i = slides.length - 1;
//         }
//         slides[i].classList.add('active_slide');
//         descr[i].style.opacity = '1';
//     }
    


