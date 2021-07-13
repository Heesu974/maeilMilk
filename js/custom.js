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




//main-header 

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


//main-intro 

let i = 0, text;
text = "사소한 불편도 놓치지 않도록 매일 묻고 답하다"
const tab1 = document.querySelector('#labelTab1');
console.log(tab1)


function typing(e) {
    if (i < text.length) {

        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }

}
typing();


// // main-section-second-thumnail


const slideItems = document.getElementsByClassName('slideItem');
console.log(slideItems);
const slideItemsArr = Array.from(slideItems);
console.log(slideItemsArr);

const bigImg = document.getElementsByClassName('big');
console.log(bigImg)
const bigImgArr = Array.from(bigImg);
console.log(bigImgArr)

const subImg = document.getElementsByClassName('sub');
console.log(subImg);
const subArr = Array.from(subImg);
console.log(subArr);

for (let i = 0; i < subArr.length; i++) {
    let slideImages = subArr[i].getElementsByTagName('img');
    console.log(slideImages);
    let slideImagesArr = Array.from(slideImages);
    console.log(slideImagesArr);

    function thumbNailHandler(e) {
        const imgSrc = e.target.getAttribute('src');
        const BigImg = e.target.parentNode.previousElementSibling;
        console.log(imgSrc);

        console.log(e.target.parentNode.previousElementSibling);

        BigImg.innerHTML = "<img src=' " + imgSrc + "'/>";
    }

    for (let i = 0; i < slideImagesArr.length; i++) {
        slideImagesArr[i].addEventListener('click', thumbNailHandler);

    }

}






