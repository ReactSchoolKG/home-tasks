let elems = document.querySelectorAll('div, p, button');
let body = document.querySelector("body");
let div = document.querySelector("div");

for (let i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", highlightThis, true);
  elems[i].addEventListener("click", highlightThis, false);
}

body.addEventListener("click", ()=>{alert("Event on body")}, false);
div.addEventListener("click", (event)=> event.stopPropagation());

function highlightThis(event){
    alert(`event on: ${this.tagName}, current target: ${event.target.tagName}`)
}
