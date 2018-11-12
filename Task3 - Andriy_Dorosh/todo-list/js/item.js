let itemsHalper = {
	items: [],
	defaultData(){
		this.items = [
			{
				id: 1,
				title: 'Angular',
				done: false
			},
			{
				id: 2,
				title: 'React',
				done: false
			},
			{
				id: 3,
				title: 'JS',
				done: false
			},
			{
				id: 4,
				title: 'NodeJS',
				done: false
			}
		]
	},
	addData(data){
		this.items = data;
		this.renderData();
	},
	initStorage(){
		this.defaultData();
		localStorage.setItem('items', JSON.stringify(this.items));
		this.renderData();
		this.saveIdInStorage();
	},
	clearStorage(){
		localStorage.clear();
		this.items = [];
		this.renderData();
	},
	saveIdInStorage() {
		let id = this.items.length;
		id++;
		localStorage.setItem('id', JSON.stringify(id));
	},
	addNewItem(data){
		this.items.push(data);
		localStorage.setItem('items', JSON.stringify(this.items));
		this.saveIdInStorage();
		this.renderData(data);
	},
	renderData(){
		let self = this;
		let fragment = document.createDocumentFragment();
		let ul = document.querySelector('.list-container');
		ul.innerHTML = '';
		this.items.forEach((item,index)=>{
			let li = document.createElement('li');
			li.innerHTML = item.title;
			li.className = item.done ? 'item done' : 'item';

			let checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.setAttribute('data-id',item.id);
			item.done ? checkbox.setAttribute("checked",true) : checkbox.removeAttribute("checked");

			checkbox.addEventListener('change', function(event) {
				self.items.forEach((item, index) => {
					if (item.id == this.getAttribute('data-id')) {
						item.done = !item.done;
						this.parentNode.classList.toggle('done');
					}
				});
				localStorage.setItem('items', JSON.stringify(self.items));
			});

			li.appendChild(checkbox);

			let btn = document.createElement('button');
			btn.innerHTML = 'Delete';
			btn.setAttribute('data-id',item.id);

			btn.addEventListener('click', function(){
				var id;
				self.items.forEach((item, index) => {
					if (item.id == this.getAttribute('data-id')) {
						id = index;
						ul.removeChild(ul.childNodes[index]);
					}
			
				});
				self.items.splice(id,1);
				localStorage.setItem('items', JSON.stringify(self.items));
			});

			li.appendChild(btn);

			fragment.appendChild(li);
		});

		ul.appendChild(fragment);
	}
}