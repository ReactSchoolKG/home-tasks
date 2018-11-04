var bodyElem = document.getElementsByTagName('body')[0];

bodyElem.addEventListener("click", clickElem);
bodyElem.addEventListener("mousedown", dragElem);

function clickElem(event){
	if (event.target.nodeName != 'DIV') return;
	console.log(event.target.innerText);
}

function dragElem(event){
	if (event.target.nodeName != 'DIV') return;
	onDrag.bind(event.target, event)();
}

//Drag & Drop function
function onDrag(e) {
	var dragElem = this;

	var startX = e.clientX,
		startY = e.clientY;

	var origX = dragElem.style.left.slice(0, -2),
		origY = dragElem.style.top.slice(0, -2);

	var deltaX = startX - origX,
		deltaY = startY - origY;

	document.addEventListener("mousemove", moveHandler, true);
	document.addEventListener("mouseup", upHandler, true);

	function moveHandler(e) {
		dragElem.style.left = (e.clientX - deltaX) + "px";
		dragElem.style.top = (e.clientY - deltaY) + "px";
		dragElem.style.opacity = '0.5'
	}

	function upHandler() {
		document.removeEventListener("mouseup", upHandler, true);
		document.removeEventListener("mousemove", moveHandler, true);
		dragElem.style.opacity = '1'
	}
}