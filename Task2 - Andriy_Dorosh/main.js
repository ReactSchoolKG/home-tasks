let elements = document.querySelectorAll('.elem');
let body = document.querySelector('body');


function addEvents(){
	elements.forEach( (item) => {
		item.addEventListener('click',itemCallback, true);
		item.addEventListener('click',function($event) {
			itemCallback($event,true)
		}, false);
	});
	body.addEventListener('click',function(){
		alert('It is body!');
	}, false)
}

addEvents();


function itemCallback(event){
	if (arguments.length > 1 && event.currentTarget.tagName == 'DIV') {
		event.stopPropagation();
	}
	console.log(`target: ${event.target.tagName}`);
	console.log(`currentTarget: ${event.currentTarget.tagName}`);
}