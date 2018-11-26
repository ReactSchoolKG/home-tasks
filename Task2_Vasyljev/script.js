let bodyBlock = document.getElementsByTagName('body')[0];
let divBlock = document.getElementsByTagName('div')[0];
let pBlock = document.getElementsByTagName('p')[0];
let buttonBlock = document.getElementsByTagName('button')[0];

bodyBlock.addEventListener('click', alertMessage, false);
divBlock.addEventListener('click', capturingFunction, true);
divBlock.addEventListener('click', bubblingFunction, false);
pBlock.addEventListener('click', capturingFunction, true);
pBlock.addEventListener('click', bubblingFunction, false);
buttonBlock.addEventListener('click', capturingFunction, true);
buttonBlock.addEventListener('click', bubblingFunction, false);

function capturingFunction() {
    let eventTarget = event.target;
    console.log(`This is Capture! Event target: ${eventTarget.getAttribute('id')}, this: ${this.getAttribute('id')}`);
}

function bubblingFunction() {
    let eventTarget = event.target;
    if(this == divBlock) {
        event.stopPropagation();
    }
    console.log(`This is Bubbling! Event target: ${eventTarget.getAttribute('id')}, this: ${this.getAttribute('id')}`);
}

function alertMessage() {
    
    alert('Event on body!');
}
