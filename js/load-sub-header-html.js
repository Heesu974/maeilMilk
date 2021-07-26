const subHeader = document.querySelector('#sub-header');

async function load_subHeader() {
    subHeader.innerHTML = await (await fetch('sub-header.html')).text();
}

window.addEventListener('load', load_subHeader);