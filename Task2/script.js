let bodyBlock = document.getElementsByTagName('body');
let divBlock = document.getElementsByTagName('div');
let pBlock = document.getElementsByTagName('p');
let buttonBlock = document.getElementsByTagName('button');

bodyBlock[0].addEventListener('click', alertMessage, false);
divBlock[0].addEventListener('click', getInfoOne, true);
divBlock[0].addEventListener('click', getInfoTwo, false);
pBlock[0].addEventListener('click', getInfoOne, true);
pBlock[0].addEventListener('click', getInfoTwo, false);
buttonBlock[0].addEventListener('click', getInfoOne, true);
buttonBlock[0].addEventListener('click', getInfoTwo, false);

function getInfoOne() {
    let eventTarget = event.target;
    console.log(`This is Capture! Event target: ${eventTarget.getAttribute('id')}, this: ${this.getAttribute('id')}`);
}

function getInfoTwo() {
    let eventTarget = event.target;
    if(this == divBlock[0]) {
        event.stopPropagation();
    }
    console.log(`This is Bubbling! Event target: ${eventTarget.getAttribute('id')}, this: ${this.getAttribute('id')}`);
}

function alertMessage() {
    
    alert('Event on body!');
}
