let itemsHelper = {
  items: [],
  setItems(items) {
      this.items = items;
      localStorage.setItem('items', JSON.stringify(this.items));
      this.repaintList();
  },

  addItem(item) {
      this.items.push(item);
      this.setItems(this.items);
      this.repaintList();
  },
  addUserItem() {
      let inputValue = document.getElementById("new-todo").value;
      if (inputValue !== '') {
          let newItem = {
              id: Date.now(),
              title: inputValue,
              done: false
          };
          this.addItem(newItem);
          this.repaintList();
      }
  },
  simulateData() {
      this.items = [{
          id: 1,
          title: 'Some task 1',
          done: false
      }, {
          id: 2,
          title: 'Some task 2',
          done: false
      }, {
          id: 3,
          title: 'Some task 3',
          done: false
      }];
      this.setItems(this.items);
      this.repaintList();
  },
  repaintList() {
      let container = document.getElementById('todo-items');
      container.innerHTML = "";
      const fragment = document.createDocumentFragment();
      this.items.forEach(item=>{
          let li = document.createElement('li');
          li.innerHTML = item.title;
          let btn = document.createElement('button');
          btn.innerHTML = 'Х';
          btn.style.marginLeft = "3vh";
          btn.onclick = e => {
              e.stopPropagation();
              this.items = this.items.filter(i=>i.id !== item.id);
              this.setItems(this.items);
              this.repaintList();
          };
          li.appendChild(btn);
          li.className = item.done ? "completed" : '';
          li.onclick = function() {
              this.classList.toggle('completed');
          }
          ;
          fragment.appendChild(li);
      }
      );

      container.appendChild(fragment);
  },
  clearStorage() {
    localStorage.removeItem('items');
  }
};
