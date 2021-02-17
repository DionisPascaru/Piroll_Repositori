$(document).ready(function () {
    // testimonial slider
    $('.testimonials').slick({
        dots: true,
        arrows: false,
        initialSlide: 1
    });

    $('.slick-dots button').text('');

    // clients slider
    $('.clients').slick({
        arrows: false,
        slidesToShow: 5,
        autoplay: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
});