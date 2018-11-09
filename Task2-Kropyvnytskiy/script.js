var body = document.getElementsByTagName('body')[0],
	elems = document.querySelectorAll('div,p,button');
	
elems.forEach(function(elem) {
	elem.addEventListener("click", getElem, true);
	elem.addEventListener("click", getElem, false);
});

body.addEventListener("click", addEventOnBody);

function getElem() {
	console.log(this.tagName);
}

function addEventOnBody(event){
	console.log("Target element: ", event.target.tagName);
	if (event.target.tagName == 'BODY') {
		alert("Event on body");
	}
}