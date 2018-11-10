var list = document.getElementById('list');
var showItems = document.getElementById("showItems");
var clearItems = document.getElementById("clearItems");
var addItem = document.getElementById("addItem");

showItems.addEventListener('click', setValue);
clearItems.addEventListener('click', removeValue);
addItem.addEventListener('click', addNewItem);

//function to display the default value
function setValue() {
	for (let i = 0; i < localStorage.length; i++) {
		let storageElem = getStorage.call(i);
		let li = createLi(storageElem);
		li.addEventListener("click", setDone.bind(li, storageElem));
	}
};

//function to remove all item
function removeValue() {
	localStorage.clear();
	list.innerHTML = '';
};

//function to add new item
function addNewItem() {
	let inputValue = document.getElementById("input").value;
	if (inputValue !== '') {
		let newItem = {
			title: inputValue,
			done: false,
			key: localStorage.length
		};
		let li = createLi(newItem);
		setStorage(newItem);
		li.addEventListener("click", setDone.bind(li, newItem));
	}
};

function setDone(item) {
	item.done = !item.done;
	this.done = item.done;
	this.done ? this.classList.add('doneTask') : this.classList.remove('doneTask');
	updateStorageItem(item);
};

function createLi(elem) {

	let deleteButton = document.createElement('p');
	deleteButton.appendChild(document.createTextNode('X'));
	deleteButton.addEventListener('click', deleteItem.bind(deleteButton, elem));

	let li = document.createElement('li');
	li.appendChild(document.createTextNode(elem.title));
	li.appendChild(deleteButton);
	list.appendChild(li);
	return li;

};

function deleteItem(elem) {
	let parent = this.parentNode.parentNode;
	let child = this.parentNode;
	parent.removeChild(child);
	localStorage.removeItem(elem.key);
};

function setStorage(item) {
	localStorage.setItem(item.key, JSON.stringify(item));
};

function getStorage() {
	return JSON.parse(localStorage.getItem(this));
};

function updateStorageItem(item) {
	localStorage.removeItem(item.key);
	setStorage(item);
};