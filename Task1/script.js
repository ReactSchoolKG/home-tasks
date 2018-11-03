var bodyElem = document.getElementsByTagName('body')[0];

bodyElem.onclick = function(event) {
	if (event.target.nodeName != 'DIV') return;
	console.log(event.target.innerText);
}

bodyElem.onmousedown = function(event) {
	if (event.target.nodeName != 'DIV') return;
	onDrag.bind(event, event.target)();
}

function onDrag(elementToDrag) {

	var startX = this.clientX,
		startY = this.clientY;

	var origX = elementToDrag.style.left.slice(0, -2),
		origY = elementToDrag.style.top.slice(0, -2);

	var deltaX = startX - origX,
		deltaY = startY - origY;

	document.addEventListener("mousemove", moveHandler, true);
	document.addEventListener("mouseup", upHandler, true);

	function moveHandler(e) {
		elementToDrag.style.left = (e.clientX - deltaX) + "px";
		elementToDrag.style.top = (e.clientY - deltaY) + "px";
		elementToDrag.style.opacity = '0.5'
	}

	function upHandler(e) {
		document.removeEventListener("mouseup", upHandler, true);
		document.removeEventListener("mousemove", moveHandler, true);
		elementToDrag.style.opacity = '1'
	}
}