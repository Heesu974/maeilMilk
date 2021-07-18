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