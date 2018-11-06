document.body.addEventListener("click", function (event) {
	  if (event.target.nodeName == "DIV") {
		      console.log(event.target.textContent);
	  }
	  backColor.call(event.target);
});

function backColor() {
	    if (this.style.fontSize == '30px') {
		          this.style.fontSize = '14px';
	    } else {
		          this.style.fontSize = '40px';
	    }
}