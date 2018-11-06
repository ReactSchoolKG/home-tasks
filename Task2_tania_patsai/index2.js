var elems = document.querySelectorAll('div,p,button');

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", show, true);
  elems[i].addEventListener("click", show, false);
}

function show(event) {
   alert("target = " + event.target.tagName + ", this = " + this.tagName);
}

document.body.addEventListener("click", function() {
    alert("Event on body")
});


