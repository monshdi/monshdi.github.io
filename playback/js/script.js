window.addEventListener("DOMContentLoaded", function(){

    // Модальное окно

    let portItem = document.querySelectorAll('.port_item'),
        modal = document.querySelector('.modal-video'),
        close = document.querySelector('.close-btn'),
        modalItem = document.querySelector('.modal-video_item'),
        logoPlay = document.querySelector('.logoPlay'),
        videos = ['https://www.youtube.com/embed/videoseries?list=PL5xZL4d1VH92pduqIFza2dhll41ypbtfp', 'https://www.youtube.com/embed/videoseries?list=PL5xZL4d1VH902G8fpYJoZ9QteSfCo6jKI', 'https://www.youtube.com/embed/videoseries?list=PL5xZL4d1VH92XZWPXqojokpGdlOPp3itG', 'https://www.youtube.com/embed/videoseries?list=PL5xZL4d1VH92NIKwD5W_Rx8ye5cU1KAmX', 'https://www.youtube.com/embed/videoseries?list=PL5xZL4d1VH92pduqIFza2dhll41ypbtfp', 'https://www.youtube.com/embed/videoseries?list=PL5xZL4d1VH90FgwFqUUyIod6zwB51_VjL',  ];

        logoPlay.addEventListener('click', () => {
            modal.style.display = 'block';
            modalItem.innerHTML = `	<iframe src="https://www.youtube.com/embed/QC1EdMkV9Iw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            setTimeout(function(){
                modal.classList.add('active-modal');
                document.body.style.overflow = 'hidden';
            }, 100);
        });

        close.addEventListener('click', ()=> {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            modal.classList.remove('active-modal');
        });

        for(let i = 0; i < portItem.length; i++){
            portItem[i].addEventListener('click', ()=> {
                modal.style.display = 'block';
                modalItem.innerHTML = `<iframe src="${videos[i]}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
                setTimeout(function(){
                    modal.classList.add('active-modal');
                    document.body.style.overflow = 'hidden';
                }, 100);
            });
        };
})

$(function(){

    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'linear'
    });

})