window.onload = function() {

	var items = document.querySelectorAll('.container .circle');

	for(var i = 0; i < items.length; i++){
  		items[i].onclick = function(){
   		console.log(this.innerText)
  		}
	}

}