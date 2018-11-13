var body = document.querySelector("body");
body.onclick = function(event) {
	console.log("target = " + event.target.tagName + ", this=" + this.tagName);
};
