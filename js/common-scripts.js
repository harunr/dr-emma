
(function($){
	$(function(){



        

        $('.hamburger').click(function (e) {
            $('body').addClass('navshown')
            e.preventDefault()
            $(".navigatiion-wrap").fadeToggle()
            $('.navigatiion-close').click(function () {
                $(".navigatiion-wrap").fadeOut()
                $('body').removeClass('navshown')
            })

        });

        
        if ($('.hero-item-wrap').length) {
            $('.hero-item-wrap').slick({
                arrows:false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2500,
                speed: 700,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode: false,
                focusOnSelect: true,
                fade: true
            })

            $(window).on('resize', function () {
                $('.hero-item-wrap').slick('resize');
            });
        }
        
        
        if($(window).width() < 769){
            if ($('.sponsor-item-wrap').length) {
                $('.sponsor-item-wrap').marquee({
                    direction: 'left',
                    duration: 50000,
                    gap: 0,
                    delayBeforeStart: 0,
                    duplicated: true,
                    startVisible: true
                });
            }

        }
        
        
        
            if ($('.content-item-wrap').length) {
                $('.content-item-wrap').slick({
                    arrows:true,
                    infinite: true,
                    autoplay: false,
                    autoplaySpeed: 1500,
                    speed: 700,
                    navigation:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                    centerMode: false,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 769,
                            settings: 'unslick'
                        }
                    ]
                })

                $(window).on('resize', function () {
                    $('.content-item-wrap').slick('resize');
                });
            }

        
        
        
        if ($('.product-gallery-item-wrap').length) {
            $('.product-gallery-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 2000,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.product-gallery-item-wrap').slick('resize');
            });
        }
        
        
        
        
        if ($('.cta-item-wrap').length) {
            $('.cta-item-wrap').slick({
                arrows:false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }
                    },

                ]
            });

            $(window).on('resize', function () {
                $('.cta-item-wrap').slick('resize');
            });
        }
        
		
	})// End ready function.
   
    
    if ($('.article-slider-item-wrap').length) {
        $('.article-slider-item-wrap').slick({
            arrows:true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 1500,
            speed: 700,
            navigation:false,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots:false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: false,
                        speed: 1500,
                        swipe: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        speed: 1500,
                        swipe: true,
                    }
                },

            ]
        })

        $(window).on('resize', function () {
            $('.article-slider-item-wrap').slick('resize');
        });
    }
    
    

	

})(jQuery)

var mac = 0;
if (navigator.userAgent.indexOf('Mac') > 0) {
    mac = 1;
} else {
    mac = 0;
}
if (1 == mac) {
    $('body').addClass('mac-os');
} else {
    $("body").addClass('win-os');
}