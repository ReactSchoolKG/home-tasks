let bodyBlock = document.getElementsByTagName('body');
let divBlock = document.getElementsByTagName('div');
let pBlock = document.getElementsByTagName('p');
let buttonBlock = document.getElementsByTagName('button');

bodyBlock[0].addEventListener('click', alertMessage, false);
divBlock[0].addEventListener('click', capturingFunction, true);
divBlock[0].addEventListener('click', bubblingFunction, false);
pBlock[0].addEventListener('click', capturingFunction, true);
pBlock[0].addEventListener('click', bubblingFunction, false);
buttonBlock[0].addEventListener('click', capturingFunction, true);
buttonBlock[0].addEventListener('click', bubblingFunction, false);

function capturingFunction() {
    let eventTarget = event.target;
    console.log(`This is Capture! Event target: ${eventTarget.getAttribute('id')}, this: ${this.getAttribute('id')}`);
}

function bubblingFunction() {
    let eventTarget = event.target;
    if(this == divBlock[0]) {
        event.stopPropagation();
    }
    console.log(`This is Bubbling! Event target: ${eventTarget.getAttribute('id')}, this: ${this.getAttribute('id')}`);
}

function alertMessage() {
    
    alert('Event on body!');
}
