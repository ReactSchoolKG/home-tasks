let itemsHelper = {
  items: [],
  clearStorage() {
    localStorage.removeItem('items');
  },
  setItems(items) {
    this.items = items;
    localStorage.setItem('items', JSON.stringify(items));
    this.repaintList();
  },
  addItem(item) {
    this.items.push(item);
    this.setItems(this.items);
    this.repaintList();
  },
  fullFillRandomData() {
    this.items = [{
      id: 1,
      title: 'Learn JS',
      done: false
    }, {
      id: 2,
      title: 'Learn React',
      done: false
    }, {
      id: 3,
      title: 'Learn Angular',
      done: false
    }];
    this.setItems(this.items);
    this.repaintList();
  },
  repaintList() {
    let container = document.getElementById('todo-items');
    container.innerHTML = "";
    const fragment = document.createDocumentFragment();
    this.items.forEach(item => {
      let li = document.createElement('li');
      li.innerHTML = item.title;
      let btn = document.createElement('button');
      btn.innerHTML = 'X';
      let self = this;
      btn.onclick = function (e) {
        e.stopPropagation();
        self.items = self.items.filter(i => i.id !== item.id);
        self.setItems(self.items);
        self.repaintList();
      };
      li.appendChild(btn);
      li.className = item.done ? 'completed' : '';
      li.onclick = function () {
        this.classList.toggle('completed');
      };
      fragment.appendChild(li);
    });

    container.appendChild(fragment);
  }
};

