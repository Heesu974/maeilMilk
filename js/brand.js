AOS.init({

    offset: 200,
    duration: 1000,
    easing: 'ease-in-out-back',
    mirror: true,
    // debounceDelay: 50,



});





const brandBtns = document.querySelectorAll('.nav-brand-list li a');
console.log(brandBtns);
const brandBtnArr = Array.from(brandBtns);
console.log(brandBtnArr);

const cardLists = document.querySelectorAll('.card-list');
console.log(cardLists);
const cardListArr = Array.from(cardLists);
console.log(cardListArr);



brandBtnArr.forEach((brandBtn) => {

    $(brandBtn).click(function (e) {

        //Change brandBtn color on click
        console.log(e.target);
        let targetBtn = e.target;
        let ColoredBtn = brandBtnArr.find(brandBtn => brandBtn.classList.contains('color'));
        ColoredBtn.classList.remove('color');
        targetBtn.classList.add('color');

        //Change Section linked to brandBtn
        const targetAttr = targetBtn.getAttribute('data-brand');
        console.log(targetAttr);
        const connectedList = document.getElementById(targetAttr);
        console.dir(connectedList);

        let alreadyOpened = cardListArr.find(item => item.classList.contains('open'));
        alreadyOpened.classList.remove('open');


        connectedList.classList.add('open');
        AOS.refresh();





    });
});

const url = unescape(document.location.href);
console.log(url);

let pm = url.split('?');
console.log(pm);
//여기서 Array로 존재.

let targetPageValue = pm[1];
console.log(targetPageValue);

let getTargetIndex = pm[1].split('=');
console.log(getTargetIndex);
//(3) ["value", "milk", "milkBtn"]
let loadSection = getTargetIndex[1];
console.log(loadSection);

let loadBtn = getTargetIndex[2];
console.log(loadBtn);


function loadTargetPage() {
    //페이지 index 확인
    // alert(getTargetIndex[0] + "은" + getTargetIndex[1] + "입니다.");
    let alreadyOpened = cardListArr.find(item => item.classList.contains('open'));
    alreadyOpened.classList.remove('open');

    console.log(loadSection);

    const jesus = document.getElementById(loadSection);
    console.log(jesus);
    jesus.classList.add('open')

    let AlreadyColored = brandBtnArr.find(item => item.classList.contains('color'));
    AlreadyColored.classList.remove('color');

    const ohGod = document.getElementById(loadBtn);
    ohGod.classList.add('color');

    // const brandBtnsAttr = document.querySelectorAll('.nav-brand-list li a').getAttribute('data-brand');
    // console.log(brandBtnsAttr);
    // const BtnAttrArr = Array.from(brandBtnAttr);
    // console.log(BtnAttrArr);


}

window.addEventListener('load', loadTargetPage);

// let idx = param[1];
// $("ul li").eq(idx).css("display", "block");

