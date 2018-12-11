$(document).ready(function () {
    var doesAnimate = false;
    var lastScrollTop = 0;
    var scrolled = false;

    $('header').css('height', $(window).height() + 'px');

    $(window).resize(function () {
        $('header').css('height', $(window).height() + 'px');
    });

    $('.content-skill').mouseenter(function (e) {
        $(this).find('.overlay').css('opacity', '1');
        $(this).find('.laying').css('opacity', '0.4');
        var x = $(this).find('.hover-detail').text();
        if (x == "INTERMEDIATE") {
            $(this).find('.hover-detail').css('font-size', '1.5em');
        }
    });

    $('.content-skill').mouseleave(function (e) {
        $(this).find('.overlay').css('opacity', '0');
        $(this).find('.laying').css('opacity', '0');
    });

    $("#arrowBtn").click(function () {
        $('html').animate({
            scrollTop: $(".skill-set-section").offset().top,
        }, 1000, function () {
            animateIn();

        });
        doesAnimate = true;
    });

    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (doesAnimate == false) {
            if (st > lastScrollTop) {
                // downscroll code
                if (!doesAnimate) {
                    if (!scrolled) {
                        animateIn();
                        scrolled = true;
                    }
                }
            } else {
                // upscroll code
            }
            lastScrollTop = st;
        }
    });
});
