var div = document.querySelector('div');
var p = document.querySelector('p');
var button = document.querySelector('button');

function addListeners (element) {
	element.addEventListener("click", logEvent, false);	
	element.addEventListener("click", logEvent, true);
	
};

function logEvent (event) {
	console.log("target = " + event.target.tagName + ", this=" + this.tagName);
}

addListeners (div);
addListeners (p);
addListeners (button);
