document.addEventListener('DOMContentLoaded', function(){
	let items = JSON.parse(localStorage.getItem('items')) || [];
	itemsHalper.addData(items);
});

let initBtn = document.querySelector('.btn-init');
let clearBtn = document.querySelector('.btn-clear');
let addBtn = document.querySelector('.btn-new-item');


addBtn.addEventListener('click', function(){
	let id = parseInt(JSON.parse(localStorage.getItem('id')));
	let data = {
		id: id,
		title: document.querySelector('.field-new-item').value  || 'empty title',
		done: false
	}
	itemsHalper.addNewItem(data);
	document.querySelector('.field-new-item').value  = '';
});
initBtn.addEventListener('click', function(){
	itemsHalper.initStorage();
});

clearBtn.addEventListener('click', function(){
	itemsHalper.clearStorage();
});

