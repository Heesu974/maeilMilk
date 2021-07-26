

recruitUrl = unescape(document.location.href);
console.log(recruitUrl);

LinkElem = recruitUrl.split('?');
console.log(LinkElem);
//여기서 Array로 존재.

getPageTarget = LinkElem[2];
console.log(getPageTarget);


getSubHeader = document.querySelector('#sub-header');
console.dir(getSubHeader);


getBody = document.querySelector('#getBody')

async function load_getPolicy2() {
    getBody.innerHTML = await (await fetch('recruit-policy-2-container.html')).text();
}

function load_recruitUrl() {
    if (getPageTarget) {
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
    load_getPolicy2();


}
window.addEventListener('load', load_recruitUrl);
