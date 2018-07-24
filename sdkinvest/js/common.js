$(function() {

	// Custom JS

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    autoplay:true,
    nav:true,
    navText:["Предыдущая", "Следующая"],
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



});
