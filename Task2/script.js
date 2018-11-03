let divBlock = document.getElementsByTagName('div');
let pBlock = document.getElementsByTagName('p');
let buttonBlock = document.getElementsByTagName('button');
divBlock[0].addEventListener('click', getInfoOne, true);
divBlock[0].addEventListener('click', getInfoTwo, false);
pBlock[0].addEventListener('click', getInfoOne, true);
pBlock[0].addEventListener('click', getInfoTwo, false);
buttonBlock[0].addEventListener('click', getInfoOne, true);
buttonBlock[0].addEventListener('click', getInfoTwo, false);
function getInfoOne() {
    eventTarget = event.target;
    console.log(`This is Capture! Event target: ${eventTarget}, this: ${this}`);
}

function getInfoTwo() {
    eventTarget = event.target;
    console.log(`This is Bubbling! Event target: ${eventTarget}, this: ${this}`);
}
