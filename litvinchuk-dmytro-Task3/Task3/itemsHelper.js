const itemsHelper = {
  list : document.getElementById("list"),

  items : JSON.parse(localStorage.getItem("items")) || [],

  fillWithItems : function(){
    this.items.push({
      title :'react',
      done : false,
      id : this.items.length+1
    });
    this.items.push({
      title :'angular',
      done : false,
      id : this.items.length+1
    });
    this.items.push({
      title :'pure js',
      done : false,
      id : this.items.length+1
    });
    localStorage.setItem("items", JSON.stringify(this.items));
    this.repaint();
  },

  addItem : function(title){
    let item = {};
    this.items.length === 0 ?
      item = {title: title, done: false, id : 1} :
      item = {title: title, done: false, id : this.items.length+1};
    this.items.push(item);
    localStorage.setItem("items", JSON.stringify(this.items));
    this.repaint();
  },

  removeItem: function(e,index) {
    e.stopPropagation();
    this.items.splice(index-1,1);
    let counter = index;
    for (let i = index; i <= this.items.length; i++) {
        let item = this.items[i-1];
        item.id = counter;
        counter++;
    }
    localStorage.setItem("items", JSON.stringify(this.items));
    this.repaint();
  },

  repaint: function(){
    let fragment = document.createDocumentFragment();
    this.list.innerHTML = "";
    let i = 0;
    while (i < this.items.length) {
      let item = this.items[i];
      let self = this;
      let li = document.createElement('li');
      li.innerHTML = `${item.title} <button class="deleteButtons" onclick="itemsHelper.removeItem(event, ${item.id})">x</button>`;
      li.addEventListener('click', function () {
        self.item = item;
        (function () {
          event.stopPropagation();
          self.toggle(li, self.item.id);
        })();
      });
      if (item.done === true) {
        li.style.textDecoration = "line-through"
      }
      fragment.appendChild(li);
      i++;
    }
    this.list.appendChild(fragment);
    if (itemsHelper.list.children.length > 0) {
      itemsHelper.list.style.visibility = "visible";
    }
    else {
      itemsHelper.list.style.visibility = "hidden";
    }
  },

  clearStorage : function(){
    localStorage.clear();
    this.items.length = 0;
    this.repaint();
  },

  toggle(el,id){
    let item = this.items[id-1];
    item.done = !item.done;
    item.done === false ?
      el.style.textDecoration = "none"
      : el.style.textDecoration = "line-through";
    localStorage.setItem("items", JSON.stringify(this.items));
  }

};