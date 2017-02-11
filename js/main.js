// Slick slider


$(document).ready(function() {

    $("#slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        cssEase: 'linear',
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev slick-arrow">Previous</button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow">Next</button>',
    });

});
