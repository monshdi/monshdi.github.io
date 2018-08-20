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

$(".fancybox").fancybox();


  function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

$(".top_navigation ul a").mPageScroll2id();
$(".btn_scroll").mPageScroll2id();

$(".portfolio_item").each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".podrt_descr").attr("id", "work_" + i);
    });



});
