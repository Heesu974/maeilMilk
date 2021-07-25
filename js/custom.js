
// trigger
// $('.trigger').click(function () {
//     $(this).toggleClass('active');
//     $('.gnb').toggleClass('active')
// })
// $('.gnb a').click(function () {
//     $('.gnb, .trigger').removeClass('active')
// })


//main-intro 
const labels = document.querySelectorAll('.introLabels');
const labelArr = Array.from(labels);
console.log(labelArr);


labelArr.forEach((labelBtn) => {
    $(labelBtn).click(function (e) {
        let AlreadyColored = labelArr.find(item => item.classList.contains('color'));
        if (AlreadyColored) {
            AlreadyColored.classList.remove('color');
        };


        e.target.classList.add('color');
    })
})




//main-intro __매일유업

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
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 320,
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






// const urlNot = document.location.href;
// console.log(urlNot);
// const url = unescape(document.location.href);
// console.log(url);


