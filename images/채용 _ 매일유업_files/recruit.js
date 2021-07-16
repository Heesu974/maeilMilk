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

const modalBtn = document.querySelector('#modalBtn');
console.log(modalBtn);
const modalTarget = document.querySelector('.modal');
console.log(modalTarget);
function modalOpenHandler() {
    modalTarget.classList.add('open');
};
function modalCloseHandler(e) {
    e.target.classList.remove('open');
};

modalBtn.addEventListener('click', modalOpenHandler);
modalTarget.addEventListener('click', modalCloseHandler);