window.onload = function () {

	// const items = [{
	//     title: 'Learn JS',
	//     done: false,
	//     key: 0
	// }, 
	// {
	//     title: 'Learn React',
	//     done: false,
	//     key: 1
	// }, 
	// {
	//     title: 'Learn Angular',
	//     done: false,
	//     key: 2
	// }];

	var todolist = [];
	if (localStorage.getItem('todo') != undefined) {
		todolist = JSON.parse(localStorage.getItem('todo'));
		out();
	}

	document.getElementById('add').onclick = function () {
		var d = document.getElementById('in').value;
		var temp = {};
		temp.todo = d;
		temp.click = false;
		var i = todolist.length;
		todolist[i] = temp;
		out();
		localStorage.setItem('todo', JSON.stringify(todolist));
	}

	function out() {
		var out = '';
		for (var key in todolist) {
			if (todolist[key].click == true) {
				out += '<input type="button" value="x"> ';
			} else {
				out += '<input type="button" value="x"> ';
			}
			out += todolist[key].todo + '<br>';
		}
		document.getElementById('out').innerHTML = out;
	}
}