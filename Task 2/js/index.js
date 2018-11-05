let elems = document.querySelectorAll('body, div, p, button');
let body = document.querySelector("body");
let div = document.querySelector("div");

(function() {
    elems.forEach(function(elem) {
        elem.addEventListener("click", getLogs, true);
        elem.addEventListener("click", getLogs, false);
    });
}
)();

function getLogs() {
    console.log(this.tagName);
}

div.addEventListener("click", (event)=>{
    event.stopPropagation();
    console.log("Target = " + event.target.tagName)
}
);

body.addEventListener("click", () => alert("Event on body"));

