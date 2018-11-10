let body = document.querySelector('body');

body.addEventListener('click', getNumber);

function getNumber(event){
	if (event.target.classList.contains('item')) {
		console.log(event.target.innerHTML);
		randomColor.call(event.target);
	}
}

function randomColor(){
	this.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
}