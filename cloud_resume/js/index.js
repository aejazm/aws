const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://qt4rtje2snajlu2vbfazwy2mzq0hjlmf.lambda-url.us-west-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views !!!`;
}

updateCounter();
