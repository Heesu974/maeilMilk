$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('header, .goTop, banner').addClass('active');
    } else {
        $('header, .goTop, banner').removeClass('active');
    }
})


// slick js
$('.myslider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// trigger
$('.trigger').click(function () {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active')
})
$('.gnb a').click(function () {
    $('.gnb, .trigger').removeClass('active')
})


//section-first 

const item = document.querySelectorAll('.item');
console.log(item);
const itemArr = Array.from(item);
console.log(itemArr);

function slideUpHandler(e) {
    console.log(e.target.next);
    e.target.classList.add('active');
}
function slideDownHandler(e) {
    console.log(e.target.next);
    e.target.classList.remove('active');
}
for (let i = 0; i < itemArr.length; i++) {
    itemArr[i].addEventListener('mouseenter', slideUpHandler)
}
for (let i = 0; i < itemArr.length; i++) {
    itemArr[i].addEventListener('mouseleave', slideDownHandler)
}

//section-second 

const newsCard = document.getElementsByClassName('news-card');
console.log(newsCard);
const newsCardArr = Array.from(newsCard);
console.log(newsCardArr);

function changeColorHandler(e) {

    e.target.classList.add('fill');
}
function changeColorHandler2(e) {

    e.target.classList.remove('fill');
}

for (let i = 0; i < newsCardArr.length; i++) {
    newsCardArr[i].addEventListener('mouseenter', changeColorHandler);
}
for (let i = 0; i < newsCardArr.length; i++) {
    newsCardArr[i].addEventListener('mouseleave', changeColorHandler2);
}




