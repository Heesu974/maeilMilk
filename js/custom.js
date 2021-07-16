$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('header, .goTop, banner').addClass('active');
    } else {
        $('header, .goTop, banner').removeClass('active');
    }
})



// trigger
$('.trigger').click(function () {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active')
})
$('.gnb a').click(function () {
    $('.gnb, .trigger').removeClass('active')
})





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

// main-section-second-slick js
$('.myslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: '.arrow_prev',
    nextArrow: '.arrow_next',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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



//section-fourth

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



//main-section-first

const modalBtns = document.querySelectorAll('.modalBtn');
console.log(modalBtns);
const modalBtnArr = Array.from(modalBtns);
console.dir(modalBtnArr);
const modal = document.querySelectorAll('.modal');
console.log(modal);
const modalArr = Array.from(modal);
console.dir(modalBtnArr);
const modalAttr = modalBtnArr.filter(item => item.getAttribute('data-alt'));
console.log(modalAttr);
const closeBtns = document.querySelectorAll('.fa-times-circle');
const closeBtnArr = Array.from(closeBtns);


function modalOpenHandler(e) {
    e.preventDefault();
    let targetAttr = e.target.getAttribute('data-alt');

    const modalTarget = modalArr.find(item => item.classList.contains(targetAttr));


    modalTarget.classList.add('open');

    return (modalTarget);
}
function modalCloseHandler(e) {
    console.log(e.target);
    e.target.classList.remove('open');
}

for (let i = 0; i < modalBtnArr.length; i++) {

    modalBtnArr[i].addEventListener('click', modalOpenHandler);
}

for (let i = 0; i < modalArr.length; i++) {
    modalArr[i].addEventListener('click', modalCloseHandler);
}
closeBtnArr.forEach((closeBtn) => {
    $(closeBtn).click(function () {
        const findTargetModal = modalArr.find(item => item.classList.contains('open'));
        findTargetModal.classList.remove('open');
    });
});
