// Slick slider


$(document).ready(function() {

    $("#slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
    });

});

//Form
/*Отправка данных формы по нажатию кнопки Enter: */
function submit_handler(form) {
 alert(form.email.value);
 return false;

}
