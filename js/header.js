// by click
let navBtns = document.querySelectorAll('.navBtn');
console.log(navBtns);
let navBtnArr = Array.from(navBtns);
console.log(navBtnArr);



const header = document.querySelector('header');





//by scroll
if (window.screen.width > 767) {
    window.addEventListener('scroll', (function () {
        scrollPos = docElem.scrollTop;
        console.log(scrollPos);
        console.log(goTopBtn);
        // goTopBtn.classList.add = (scrollPos > offset) ? 'active' : ''; 
        //이건 gotopbtn 자체가 클래스명으로 불러오기 때문에 클래스를 비워버리게돼서 아얘 없어짐.

        if (scrollPos >= 750) {

            header.classList.add('active');
            for (let i = 0; i < navBtnArr.length; i++) {
                navBtnArr[i].classList.add('active');

            }




        } else {

            header.classList.remove('active');

            for (let i = 0; i < navBtnArr.length; i++) {
                navBtnArr[i].classList.remove('active');

            }

        }

    }))
    function Jaebaldaela(e) {
        // scrollPos = '';
        // let ahahahah = navBtnArr.filter((item) => item.classList.contains('color'));
        // for (let i = 0; i < ahahahah.length; i++) {
        //     ahahahah[i].classList.remove('color');
        // }
        e.target.classList.add('color')

    }
    for (let i = 0; i < navBtnArr.length; i++) {
        navBtnArr[i].addEventListener('click', Jaebaldaela);
    }
    // window.addEventListener('scroll', ActiveHeaderHandler);
} else if (window.screen.width <= 767) {
    let ActivedNav = navBtnArr.filter((item) => item.classList.contains('active'));
    //reset from pc setting
    // window.addEventListener('load', function () {
    //     if (header.classList.contains('active')) {
    //         header.classList.remove('active');
    //     }
    //     if (ActivedNav) {
    //         for (let i = 0; i < navBtnArr.length; i++) {
    //             navBtnArr[i].classList.remove('active');

    //         }
    //     }

    // })



    //set mobile
    const UlElem = document.querySelector('header ul');

    const mobileBtn = document.querySelector('label.checkBtn');




    window.addEventListener('scroll', (function () {
        if (scrollPos >= 600) {
            header.classList.add('scrollActive');
            mobileBtn.classList.add('scrollActive');
        } else {
            header.classList.remove('scrollActive');
            mobileBtn.classList.remove('scrollActive');
        }


    }))
    mobileBtn.addEventListener('click', (function () {

        header.classList.toggle('mobileActive');
        UlElem.classList.toggle('mobileActive');
        for (let i = 0; i < navBtnArr.length; i++) {
            navBtnArr[i].classList.add('mobileActive');

        }



        navBtnArr.forEach((navBtnItem) => {
            $(navBtnItem).click(function (e) {
                header.classList.remove('mobileActive');
                UlElem.classList.remove('mobileActive');

            })
        })

    }))
}


const Sections = document.querySelectorAll('section');
const sectionArr = Array.from(Sections);
console.log(sectionArr);

let offset0 = sectionArr[0].offsetHeight;
console.log(offset0)
let offset1 = offset0 + sectionArr[1].offsetHeight;
console.log(offset1)
let offset2 = offset1 + sectionArr[2].offsetHeight + sectionArr[3].offsetHeight;
let offset3 = offset2 + sectionArr[4].offsetHeight;
console.log(offset3);
let offset4 = offset3 + sectionArr[5].offsetHeight;
console.log(offset4);
// const Footer = docElem.querySelector('footer');
// console.log(Footer)
// const footerHeight = Footer.offsetHeight;
// const LastHeight = footerHeight + sectionArr[5].offsetHeight;
// console.log(LastHeight);
// let totalPageHeight = document.body.scrollHeight;
// console.log(totalPageHeight);
// let scrollPoint = window.scrollY + window.innerHeight;
// console.log(scrollPoint)


//스크롤할 떄 navBtn 변하게 하는 함수
function ScrollColorHandler(e) {

    scrollPos = docElem.scrollTop;
    let jaebal = navBtnArr.find(item => item.classList.contains('color'));
    console.log(jaebal)

    if (scrollPos < offset0 && scrollPos < offset1) {

        if (jaebal) { jaebal.classList.remove('color'); }
        navBtnArr[0].classList.add('color');

    } else if (scrollPos > offset0 && scrollPos < offset1) {
        if (jaebal) { jaebal.classList.remove('color'); }
        navBtnArr[1].classList.add('color');


    } else if (scrollPos > offset1 && scrollPos < offset2) {
        if (jaebal) { jaebal.classList.remove('color'); }
        navBtnArr[2].classList.add('color');

    } else if (scrollPos > offset2 && scrollPos < offset3) {
        if (jaebal) { jaebal.classList.remove('color'); }
        navBtnArr[3].classList.add('color');

    } else if (scrollPos > offset3) {
        if (jaebal) { jaebal.classList.remove('color'); }
        navBtnArr[4].classList.add('color');
    }
}


window.addEventListener('scroll', ScrollColorHandler);
// } else if (scrollPos >= 4743 && window.innerHeight > LastHeight) {
//     navBtnArr[4].classList.add('color')
// }

// } else if (window.innerHeight > LastHeight) {
//     navBtnArr[4].classList.add('color');
//     console.log('왜 안돼')
// }




// else if (scrollPos > offset3 && scrollPos < sectionArr[4].offsetTop) {


//     if (jaebal) { jaebal.classList.remove('color'); }
//     navBtnArr[3].classList.add('color')

// } else {
//     if (jaebal) { jaebal.classList.remove('color'); }
// }




// window.onscroll = function () {
//     console.dir(window)
//     if ((scrollPoint + 1) == (totalPageHeight) && window.innerHeight > LastHeight) {
//         console.log('please')
//         console.log(scrollPoint)
//         console.log(totalPageHeight)
//         navBtnArr[4].classList.add('color')

//     }


// }


// }


//not Using-----------------------------------------------
// const Section = document.querySelector('#section-first');
// console.log(Section);

// let rect = Section.getBoundingClientRect();
// console.log(rect.top);



// let sectionSecond = document.getElementById('section-second');
// let sectionFourth = document.getElementById('section-fourth');

const offsetTopArr = [];
sectionArr.forEach((sectionItem) =>
    offsetTopArr.push(sectionItem.offsetTop));
// (6) [0, 750, 2316, 4706, 5238, 6750]


console.log(offsetTopArr);
console.log(sectionArr[0].offsetTop);
console.log(sectionArr[1].offsetTop);
console.log(sectionArr[2].offsetTop);
console.log(sectionArr[3].offsetTop);
console.dir(sectionArr[3]);
console.log(sectionArr[4].offsetTop);
console.log(sectionArr[5].offsetTop);

const offsetHeightArr = [];
sectionArr.forEach((sectionItem) =>
    offsetHeightArr.push(sectionItem.offsetHeight));
console.log(offsetHeightArr);
// (6) [750, 1566, 2417, 443, 1512, 400]

// const offsetBottomArr = offsetTopArr.map(function (item, i) {
//     return item + offsetHeightArr[i];
// })
const offsetBottomArr = [];
for (let i = 0; i < offsetTopArr.length; i++) {
    offsetBottomArr.push(offsetTopArr[i] + offsetHeightArr[i])
}




// for(var i = 0; i < array1.length; i++){
//     sum.push(array1[i] + array2[i]);
//  }

// console.log(offsetBottomArr)



// function addColorOnScroll() {
// }
// function removeColorOnScroll() {

// }

// let topPos2 = sectionSecond.offsetTop;
// console.log(typeof (topPos2));

// let topPos4 = sectionFourth.offsetTop;
// console.log(topPos4);

// let scrollPos = window.scrollTo;
// console.log(scrollPos);

// window.addEventListener('scroll', function () {
//     scrollPos = window.scrollY;

//     if (scrollPos == offsetTopArr[0]) {
//         let jaebal = navBtnArr.find(item => item.classList.contains('color'));
//         jaebal.classList.remove('color');
//         navBtnArr[0].classList.add('color');

//     }
//     else if (scrollPos > offsetHeightArr[0]) {
//         let jaebal = navBtnArr.find(item => item.classList.contains('color'));
//         jaebal.classList.remove('color');
//         navBtnArr[1].classList.add('color');

//     }
//     else if (scrollPos > 2236) {
//         let jaebal = navBtnArr.find(item => item.classList.contains('color'));
//         jaebal.classList.remove('color');
//         navBtnArr[2].classList.add('color');


//     }
//     else if (scrollPos > offsetHeightArr[0] + offsetHeightArr[1] + offsetHeightArr[2]) {
//         let jaebal = navBtnArr.find(item => item.classList.contains('color'));
//         jaebal.classList.remove('color');
//         navBtnArr[3].classList.add('color');

//     }
//     else if (scrollPos > offsetHeightArr[0] + offsetHeightArr[1] + offsetHeightArr[2] + offsetHeightArr[3]) {
//         let jaebal = navBtnArr.find(item => item.classList.contains('color'));
//         jaebal.classList.remove('color');
//         navBtnArr[4].classList.add('color');

//     }
// })


// window.addEventListener('scroll', function () {
//     scrollPos = window.scrollY;

//     for (let i = 0; i < navBtnArr.length; i++) {


//         const wow = navBtnArr.find(item => item.classList.contains('color'));

//         if (scrollPos >= offsetTopArr[0] && scrollPos <= offsetBottomArr[0]) {
//             wow.classList.remove('color');
//             navBtnArr[0].classList.add('color');
//         } else if (scrollPos >= offsetTopArr[1] && scrollPos <= offsetBottomArr[2]) {
//             wow.classList.remove('color');
//             navBtnArr[1].classList.add('color')
//         } else if (scrollPos >= offsetTopArr[2] && scrollPos <= offsetBottomArr[2]) {
//             wow.classList.remove('color');
//             navBtnArr[2].classList.add('color');
//         } else if (scrollPos >= offsetTopArr[2] && scrollPos <= offsetBottomArr[3]) {
//             wow.classList.remove('color');
//             navBtnArr[3].classList.add('color');

//         }
//         else if (scrollPos >= offsetTopArr[4] && scrollPos <= offsetBottomArr[4]) {
//             wow.classList.remove('color');
//             navBtnArr[4].classList.add('color');

//         }
//     }

// })




// const RectArr = [];

// for (let i = 0; i < sectionArr.length; i++) {
//     RectArr.push(sectionArr[i].getBoundingClientRect());
// }
// console.log(RectArr[1].top);
// const freezing = [];


// for (let i = 0; i < RectArr.length; i++) {
//     freezing.push(RectArr[i].top);
// };
// console.log(freezing);
//(6)[0, 750, 2236, 4676, 5277.1875, 7394.1875]
