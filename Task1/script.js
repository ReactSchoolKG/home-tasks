let body = document.getElementsByTagName('body');
body[0].addEventListener('click', getNumber, false);
function getNumber() {    
    let targetElement = event.target;
    if(targetElement.hasAttribute('class')) {
        makeRed.call(targetElement);
        console.log(targetElement.textContent);
    }
}
function makeRed() {
    // if (this.style.backgroundColor === 'red') {
    //     this.setAttribute('style', 'background-color: blue;');
    //     console.log(this);
    // }
    this.style.backgroundColor = 'red';
    
}