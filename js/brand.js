AOS.init({

    offset: 200,
    duration: 1000,
    easing: 'ease-in-out-back',
    mirror: true,
    // debounceDelay: 50,



});


// const brandBtns = document.querySelectorAll('.nav-brand-list li a');
// console.log(brandBtns);
// const brandBtnArr = Array.from(brandBtns);
// console.log(brandBtnArr);

// const cardLists = document.querySelectorAll('.card-list');
// console.log(cardLists);
// const cardListArr = Array.from(cardLists);
// console.log(cardListArr.length);

// brandBtnArr.forEach((brandBtn) => {
//     $(brandBtn).click(function (e) {

//         console.log(e.target);
//         const targetAttr = e.target.getAttribute('data-brand');
//         console.log(targetAttr);
//         const connectedList = document.getElementById(targetAttr);
//         console.dir(connectedList);
//         const alreadyOpened = cardListArr.find(item => item.classList.contains('open'));

//         alreadyOpened.classList.remove('open');


//         connectedList.classList.add('open');
//         AOS.refresh();



//     });
// });








// for (let i =0; i<cardListArr.length; i++)




// let findOpenTarget = cardListArr.find(item => item.classList.contains('open'));
// localStorage.setItem('CardListKey', cardListArr.outerHTML);
// let storedOpenTarget = localStorage.getItem('CardListKey');
// console.log(localStorage.getItem('CardListKey'));


// cardListArr.forEach((cardListItem) => {
//     localStorage.setItem('key', cardListItem);
// })
// console.log(localStorage);




// if (storedOpenTarget === undefined) {
//     console.log(cardListArr[0])
//     cardListArr[0].classList.add('open')
// }


//ORIGINAL
// brandBtnArr.forEach((brandBtn) => {
//     $(brandBtn).click(function (e) {

//         console.log(e.target);
//         const targetAttr = e.target.getAttribute('data-brand');
//         console.log(targetAttr);
//         const connectedList = document.getElementById(targetAttr);
//         console.dir(connectedList);
//         const alreadyOpened = cardListArr.find(item => item.classList.contains('open'));

//         alreadyOpened.classList.remove('open');


//         connectedList.classList.add('open');
//         AOS.refresh();



//     });
// });




// ###let's try this

// localStorage = null {
//     first section will have class open;
// }
// click, one of the rest section,
//     first section will gonna eliminate own class open.
// at the same TimeRanges.
// clicked target will have class open.
