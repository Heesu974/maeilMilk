//Go to Top Btn
const docElem = document.documentElement;
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

// if (docHeihgt != 0) {
//     offset = docHeihgt / 6;
//     offset = 750;
//     offsetTopArr
//     (6) [0, 750, 2316, 4706, 5238, 6750]


// }

function ActiveHandler() {
    // offset = offsetTopArr[1];
    scrollPos = docElem.scrollTop;
    console.log(scrollPos);
    console.log(goTopBtn);
    // goTopBtn.classList.add = (scrollPos > offset) ? 'active' : ''; 
    //이건 gotopbtn 자체가 클래스명으로 불러오기 때문에 클래스를 비워버리게돼서 아얘 없어짐.
    if (scrollPos >= 750) {
        goTopBtn.classList.add('active');
        header.classList.add('active');
        for (let i = 0; i < navBtnArr.length; i++) {
            navBtnArr[i].classList.add('active');

        }




    } else {
        goTopBtn.classList.remove('active');
        header.classList.remove('active');
        for (let i = 0; i < navBtnArr.length; i++) {
            navBtnArr[i].classList.remove('active');
        }
    }


}

window.addEventListener('scroll', ActiveHandler);

if (screen.width > 1300) {
    function ScrollColorHandler() {
        if (scrollPos < sectionArr[1].offsetTop) {


            navBtnArr[0].classList.add('color');

        } else {
            navBtnArr[0].classList.remove('color');
        }
        if (scrollPos > sectionArr[1].offsetTop && scrollPos < sectionArr[2].offsetTop) {
            navBtnArr[1].classList.add('color');
        }
        else {
            navBtnArr[1].classList.remove('color');
        }

        if (scrollPos > sectionArr[2].offsetTop && scrollPos < sectionArr[4].offsetTop) {
            navBtnArr[2].classList.add('color');
        }
        else {
            navBtnArr[2].classList.remove('color');
        }

        //////////////

        if (scrollPos > sectionArr[4].offsetTop && scrollPos < 5058) {
            navBtnArr[3].classList.add('color');
            console.log('hi')
        }
        else {
            navBtnArr[3].classList.remove('color');
        }

        if (scrollPos >= 5058) {
            navBtnArr[4].classList.add('color');
        }
        else {
            navBtnArr[4].classList.remove('color');
        }
    }

} else if (screen.width > 1023) {
    function ScrollColorHandler() {
        if (scrollPos < sectionArr[1].offsetTop) {


            navBtnArr[0].classList.add('color');

        } else {
            navBtnArr[0].classList.remove('color');
        }
        if (scrollPos > sectionArr[1].offsetTop && scrollPos < sectionArr[2].offsetTop) {
            navBtnArr[1].classList.add('color');
        }
        else {
            navBtnArr[1].classList.remove('color');
        }

        if (scrollPos > sectionArr[2].offsetTop && scrollPos < sectionArr[4].offsetTop) {
            navBtnArr[2].classList.add('color');
        }
        else {
            navBtnArr[2].classList.remove('color');
        }

        //////////////

        // if (scrollPos > sectionArr[4].offsetTop && scrollPos < 5162) {
        //     navBtnArr[3].classList.add('color');

        // }
        // else {
        //     navBtnArr[3].classList.remove('color');
        // }
        // if (scrollPos >= 5162) {
        //     navBtnArr[4].classList.add('color');
        // }
        // else {
        //     navBtnArr[4].classList.remove('color');
        // }
    }

} else if (screen.width > 767) {
    function ScrollColorHandler() {
        if (scrollPos < sectionArr[1].offsetTop) {


            navBtnArr[0].classList.add('color');

        } else {
            navBtnArr[0].classList.remove('color');
        }
        if (scrollPos > sectionArr[1].offsetTop && scrollPos < sectionArr[2].offsetTop) {
            navBtnArr[1].classList.add('color');

        }
        else {
            navBtnArr[1].classList.remove('color');
        }

        if (scrollPos > sectionArr[2].offsetTop && scrollPos < sectionArr[4].offsetTop) {
            navBtnArr[2].classList.add('color');
        }
        else {
            navBtnArr[2].classList.remove('color');
        }

        //////////////

        if (scrollPos > sectionArr[4].offsetTop && scrollPos < 5000) {
            navBtnArr[3].classList.add('color');
            console.log(sectionArr[4].offsetHeight)
        }
        else {
            navBtnArr[3].classList.remove('color');
        }
        if (scrollPos > 5000) {
            navBtnArr[4].classList.add('color');

        }
        else {
            navBtnArr[4].classList.remove('color');
        }
    }
}








// let jaebal = 0;
//         for (let i = 0; i < sectionArr.length; i++) {
//             console.log(sectionArr.length);
//             if (i === 3) {
//                 continue;
//             }
//             jaebal = i;
//             if (i > 3) { jaebal -= 1 };
//             if (scrollPos > sectionArr[i].offsetTop && scrollPos < sectionArr[i + 1].offsetTop) {
//                 navBtnArr[jaebal].classList.add('color');

//             } else {
//                 navBtnArr[jaebal].classList.remove('color');
//             }
//         }

////////////////////////////////

// if (scrollPos < sectionArr[1].offsetTop) {


//     navBtnArr[0].classList.add('color');

// } else {
//     navBtnArr[0].classList.remove('color');
// }
// if (scrollPos > sectionArr[1].offsetTop && scrollPos < sectionArr[2].offsetTop) {
//     navBtnArr[1].classList.add('color');
// }
// else {
//     navBtnArr[1].classList.remove('color');
// }
// if (scrollPos > sectionArr[2].offsetTop && scrollPos < sectionArr[3].offsetTop) {
//     navBtnArr[2].classList.add('color');
// }
// else {
//     navBtnArr[2].classList.remove('color');
// }
// if (scrollPos > sectionArr[2].offsetTop && scrollPos < sectionArr[4].offsetTop) {
//     navBtnArr[2].classList.add('color');
// }
// else {
//     navBtnArr[2].classList.remove('color');
// }


//매일뉴스 부분 

// if (scrollPos > sectionArr[4].offsetTop && scrollPos < 5160) {
//     navBtnArr[3].classList.add('color');
// }
// else {
//     navBtnArr[3].classList.remove('color');
// }
// if (scrollPos >= 5160) {
//     navBtnArr[4].classList.add('color');
// }
// else {
//     navBtnArr[4].classList.remove('color');
// }




function testHandler() {

    console.log(sectionArr);
    console.log(sectionArr[0].offsetTop);
    console.log(sectionArr[1].offsetTop);
    console.log(sectionArr[2].offsetTop);
    console.log(sectionArr[3].offsetTop);
    console.dir(sectionArr[3]);
    console.log(sectionArr[4].offsetTop);
    console.log(sectionArr[5].offsetTop);


    // const offsetTest = [];
    // sectionArr.forEach((i) => {
    //     offsetTest.push(i.offsetTop);
    // })
    // console.log(offsetTest);

    // (6) [0, 750, 2236, 3226, 3795, 5912]

    // const offsetTopArr = [];
    // sectionArr.forEach((sectionItem) =>
    //     offsetTopArr.push(sectionItem.offsetTop));

    // console.log(offsetTopArr);
}







window.addEventListener('scroll', ScrollColorHandler);
window.addEventListener('scroll', testHandler);









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

