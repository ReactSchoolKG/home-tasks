var lastPressed;

document.body.addEventListener("click",
    (event) => {
        lastPressed = event.target.textContent;
        logLastPressed();        
    }
);

function logLastPressed() {
    console.log(this.lastPressed);
}