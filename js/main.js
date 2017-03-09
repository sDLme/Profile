/**
 * Created by Marina on 05.02.2017.
 */

$(document).ready(function () {

            $(".tab-item").not(":first").hide();

            $(".site-nav-item").click(function() {
                $(".site-nav-item").removeClass("active").eq($(this).index()).addClass("active");
                $(".tab-item").hide().eq($(this).index()).fadeIn()
            }).eq(0).addClass("active");


    if ($(window).width()<=767) {
        $('.slide-nav').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: false,
            arrows: false
        });
    }


    $('.toggle-btn').on('click', function () {
        $('.profile-info-edit').toggleClass('display')
    });

    $('.btn-popup-show').on('click', function () {
        $('.edit-popup').removeClass('show-popup');
        $(this).parent().find('.edit-popup').addClass('show-popup')
    });

    $('.btn-popup-show').on('click', function () {
        $(this).parent().removeClass('show-popup')
    });

   // var valText = $(this).text()
   // $('.btn-popup-show').on('click', function () {
     //   $(this).parents('.address-item').find('.date').text(valText)
   // })
});
