//Go to Top Btn


$(window).scroll(function (e) {

    if ($(window).scrollTop() > 50) {
        $('header, .navBtn, .goTop').addClass('active');
    } else {
        $('header, .navBtn, .goTop').removeClass('active');
    };
});

