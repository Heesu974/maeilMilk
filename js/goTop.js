//Go to Top Btn
$(window).scroll(function (e) {

    if ($(window).scrollTop() > 50) {
        $('header, .goTop, banner').addClass('active');
    } else {
        $('header, .goTop, banner').removeClass('active');
    }
})