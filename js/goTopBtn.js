//Go to Top Btn
let docElem = document.documentElement;

console.log(docElem);

let goTopBtn = docElem.querySelector('.goTopBtn');

// const offset = 750;


let scrollPos = '';
let docHeihgt = '';

docHeihgt = Math.max(docElem.scrollHeight, docElem.offsetHeight);
//크롬과 파이어폭스에서와 값이 다르다. 
// 브라우저마다 높이 계산 방법이 다르기 때문에. 둘 중 큰 값을 적용

console.log(docHeihgt);
console.log(scrollPos);


navBtns = document.querySelectorAll('.navBtn');
navBtnArr = Array.from(navBtns);
console.log(navBtnArr);

// if (docHeihgt != 0) {
//     offset = docHeihgt / 6;
//     offset = 750;
//     offsetTopArr
//     (6) [0, 750, 2316, 4706, 5238, 6750]


// }

function ActiveGoTopHandler() {
    // offset = offsetTopArr[1];
    scrollPos = docElem.scrollTop;
    console.log(scrollPos);
    console.log(goTopBtn);
    if (screen.width > 767) {
        if (scrollPos >= 750) {
            goTopBtn.classList.add('active');

            for (let i = 0; i < navBtnArr.length; i++) {
                navBtnArr[i].classList.add('active');

            }




        } else {
            goTopBtn.classList.remove('active');

            for (let i = 0; i < navBtnArr.length; i++) {
                navBtnArr[i].classList.remove('active');
            }
        }

    } else if (screen.width <= 767) {
        if (scrollPos >= 100) {
            goTopBtn.classList.add('active');

            for (let i = 0; i < navBtnArr.length; i++) {
                navBtnArr[i].classList.add('active');

            }




        } else {
            goTopBtn.classList.remove('active');

            for (let i = 0; i < navBtnArr.length; i++) {
                navBtnArr[i].classList.remove('active');
            }
        }
    }

    // goTopBtn.classList.add = (scrollPos > offset) ? 'active' : ''; 
    //이건 gotopbtn 자체가 클래스명으로 불러오기 때문에 클래스를 비워버리게돼서 아얘 없어짐.



}
window.addEventListener('scroll', ActiveGoTopHandler);

















// function scrollToTop() {
//     const scrollInterval = setInterval(function () {
//         if (scrollPos != 0) {
//             window.scrollBy(0, -55);
//         } else {
//             clearInterval(scrollInterval);
//         }
//     }, 15);

// }

// goTopBtn.addEventListener('click', function (e) {
//     e.preventDefault();

//     scrollToTop();
// });



//Jquery
// $(window).scroll(function (e) {

//     if ($(window).scrollTop() > 50) {
//         $('header, .navBtn, .goTop').addClass('active');
//     } else {
//         $('header, .navBtn, .goTop').removeClass('active');
//     };
// });

