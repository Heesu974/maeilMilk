

let recruitUrl = unescape(document.location.href);
console.log(recruitUrl);

let LinkElem = recruitUrl.split('?');
console.log(LinkElem);
//여기서 Array로 존재.

let getPageTarget = LinkElem[2];
console.log(getPageTarget);


let getSubHeader = document.querySelector('#sub-header');
console.dir(getSubHeader);


let getBody = document.querySelector('#getBody')

async function load_getPolicy1() {
    getBody.innerHTML = await (await fetch('recruit-policy-1-container.html')).text();
}

function load_recruitUrl() {
    if (getPageTarget == 'recruit') {
        getSubHeader.innerHTML = `
        <header>
<a href="recruit.html"><img src="images/maeil_logo.png" alt=""></a>
</header>
<hr class="headerHr">`

    } else {
        getSubHeader.innerHTML = `
        <header>
<a href="index.html"><img src="images/maeil_logo.png" alt=""></a>
</header>
<hr class="headerHr">`
    }
    load_getPolicy1();


}
window.addEventListener('load', load_recruitUrl);
