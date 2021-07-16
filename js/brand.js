AOS.init({
    offset: 200,
    duration: 1000,
    easing: 'ease-in-out-back',


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
    $(brandBtn).click(function addHandler(e) {

        console.log(e.target);
        const targetAttr = e.target.getAttribute('data-brand');
        console.log(targetAttr);
        const conectedList = document.getElementById(targetAttr);
        console.log(conectedList);
        const alreadyOpened = cardListArr.find(item => item.classList.contains('open'));
        alreadyOpened.classList.remove('open', 'aos-animate');
        conectedList.classList.add('open');


    })
})

// AOS.init({
//     once: true,
//     easing: 'ease-in-out'
// });
// var iconButton = $("button");
// iconButton.on("click", function () {
//     $(iconButton).removeClass('aos-animate');
//     setTimeout(function () {
//         $(iconButton).addClass('aos-animate');
//     }, 400);
// });