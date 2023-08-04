$(function () {
    $('.mainItem .inner .item_box').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('#video_box').YTPlayer({
        videoURL: '7NgY6GwZWEQ',
        containment: '#mainVideo',
        autoPlay: true,
        showControls: false,
    });
    $('.mainProduct .inner .Pd_box').slick({
        arrows: false,
        slidesToShow: 3,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            }
        ]
    });
    $('.mopen').on('click', function () {
        $('.m_h_bottom').toggleClass('on')
    })

})