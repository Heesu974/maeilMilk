const clock = document.querySelector('#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');

    const minutes = String(date.getMinutes()).padStart(2, '0');

    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();

setInterval(getClock, 1000);

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 10
    });
}

const modalBtns = document.querySelectorAll('.modalBtn');
console.log(modalBtns);
const modalBtnArr = Array.from(modalBtns);
console.log(modalBtnArr);
const modals = document.querySelectorAll('.modal');
console.log(modals);
const modalArr = Array.from(modals);
const closeBtns = document.querySelectorAll('.fas');
const closeBtnArr = Array.from(closeBtns);

modalBtnArr.forEach((modalBtn) => {
    $(modalBtn).click(function (e) {
        e.preventDefault();
        console.log(e.target);
        let targetAttr = e.target.getAttribute('data-alt');
        console.log(targetAttr);

        const modalTarget = modalArr.find(item => item.classList.contains(targetAttr));
        console.log(modalTarget);
        modalTarget.classList.add('open');
    });
});
modalArr.forEach((modal) => {
    $(modal).click(function (e) {
        console.log(e.target);
        e.target.classList.remove('open');
    });
});
closeBtnArr.forEach((closeBtn) => {
    $(closeBtn).click(function () {
        const findTargetModal = modalArr.find(item => item.classList.contains('open'));
        console.log(findTargetModal);
        findTargetModal.classList.remove('open');
    })
})
