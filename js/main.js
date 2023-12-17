;
(function ($) {
    'use strict';

    /*==============Amainginnerpage======*/
    function carosuelslider() {
        $('.Slide_ac').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            dots: false,
            autoplaySpeed: 3000,
            speed: 600,
            pauseOnHover: false,
            cssEase: 'linear',
            initialSlide: 1,
            infinite: true,
            arrows: true,
            centerMode: true,
            prevArrow: '.team_carosuel .previous',
            nextArrow: '.team_carosuel .next',
            centerPadding: '100px',
            responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerPadding: '0',

                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '0',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '0',
                    }
                },

                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0',
                    }
                },


            ]
        });
    }
    carosuelslider();

    /*----------------------------------------------------*/
    /*  Flexslider 
    /*----------------------------------------------------*/
    function flexSlider() {
        if ($('.projects_info').length) {
            // Responsive
            function getGridSize() {
                return (window.innerWidth < 400) ? 1 :
                    (window.innerWidth < 700) ? 2 :
                    (window.innerWidth < 1000) ? 3 :
                    (window.innerWidth < 1366) ? 3 : 4;
            };
            $('#slider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: true,
                touch: true,
            });
        };
    };
    flexSlider();

    function testimonialSlider() {
        if ($(".testimonial_info").length) {
            $('#sliders').flexslider({
                animation: "slide",
                directionNav: false,
                animationLoop: true,
                manualControls: ".flex-control-nav li",
                slideshow: true,
                touch: true,
            });
        };
    };
    testimonialSlider();

    /*--------- WOW js-----------*/
    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init()
    }
    wowAnimation()

})(jQuery)