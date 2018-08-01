$(function() {

	// Custom JS
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    dots:false,
    autoplay:true,
    autoplayTimeout:7000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

$(".btn_scroll").mPageScroll2id();

});
