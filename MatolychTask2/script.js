function captureLog(e) {
    console.log(`Capturing phase: target: ${e.target.tagName}, currentTarget: ${e.currentTarget.tagName}`);
}

function bubbleLog(e) {
    console.log(`Bubbling phase: target: ${e.target.tagName}, currentTarget: ${e.currentTarget.tagName}`);
}

var div = document.querySelector("div");
div.addEventListener("click", captureLog, true);
div.addEventListener("click",
    e => {
        e.stopPropagation();
        bubbleLog(e);
    }
, false);

var p = document.querySelector("p");
p.addEventListener("click", captureLog, true);
p.addEventListener("click", bubbleLog, false);

var button = document.querySelector("button");
button.addEventListener("click", captureLog, true);
button.addEventListener("click", bubbleLog, false);

document.body.addEventListener("click", 
    e => {
        alert("Event on body");
    }
);