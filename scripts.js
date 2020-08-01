// adding join-us button in the nav-bar

$(function() {
    var header = $(".join-us-nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 420) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

});

if (document.readyState == 'complete')
{
    AOS.refresh();
}


/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
