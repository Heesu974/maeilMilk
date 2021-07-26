//load-footer 
const footer = document.querySelector('#footer');

async function load_footer() {
    footer.innerHTML = await (await fetch('footer.html')).text();
}

window.addEventListener('load', load_footer);

//load-goTop 
// let goTopBtn = document.querySelector('#goTopBtn');


// async function load_goTopBtn() {
//     goTopBtn.innerHTML = await (await fetch('goTopBtn.html')).text();
// }

// window.addEventListener('load', load_goTopBtn);



// jQuery쓰면 이렇게
//     / $(document).ready(function () {

//         $("#footer").load("footer.html");

//     });