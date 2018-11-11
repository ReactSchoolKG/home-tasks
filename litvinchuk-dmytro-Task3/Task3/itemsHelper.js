const itemsHelper = {
  list : document.getElementById("list"),

  items : [],

  fillWithItems : function(){
    this.items.push({
      title :'react',
      done : false
    });
    this.items.push({
      title :'angular',
      done : false
    });
    this.items.push({
      title :'pure js',
      done : false
    });
    let length = localStorage.length+3;
    for(let i = localStorage.length+1, j = this.items.length - 2; i <= length; i++, j++){
      this.items[j-1].id = i;
      localStorage.setItem('listEl' + JSON.stringify(i), JSON.stringify(this.items[j-1]));
    }
    this.repaint();
  },

  addItem : function(title){
    let item = {};
    localStorage.length === 0 ?
      item = {title: title, done: false, id : 1} :
      item = {title: title, done: false, id : localStorage.length+1};
    localStorage.setItem('listEl' + JSON.stringify(item.id), JSON.stringify(item));
    this.items.push(item);
    this.repaint();
  },

  removeItem: function(e,index) {
    e.stopPropagation();
    this.items.splice(index-1,1);
    let counter = 1;
    if(index !== localStorage.length){
      for (let i = 1; i <= localStorage.length; i++) {
        if (i !== index) {
          let item = JSON.parse(localStorage.getItem('listEl' + JSON.stringify(i)));
          item.id = counter;
          localStorage.setItem('listEl' + JSON.stringify(item.id), JSON.stringify(item));
          counter++;
        }
      }
      localStorage.removeItem('listEl' + JSON.stringify(localStorage.length));
    }
    else{
      localStorage.removeItem('listEl' + JSON.stringify(localStorage.length));
    }
    this.repaint();
  },

  repaint: function(){
    let fragment = document.createDocumentFragment();
    this.list.innerHTML = "";
    let i = 0;
    while(i < localStorage.length){
      let item = JSON.parse(localStorage.getItem('listEl' + JSON.stringify(i+1)));
      let self = this;
      let li = document.createElement('li');
      li.innerHTML = `${item.title} <button class="deleteButtons" onclick="itemsHelper.removeItem(event, ${item.id})">x</button>`;
      li.addEventListener('click',function(){
        self.item = item;
        (function() {
          event.stopPropagation();
          self.toggle(li,self.item.id);
        })();
      });
      if(item.done === true){li.style.textDecoration = "line-through"}
      fragment.appendChild(li);
      i++;
    }
    this.list.appendChild(fragment);
    if(itemsHelper.list.children.length > 0){
      itemsHelper.list.style.visibility = "visible";
    }
    else{
      itemsHelper.list.style.visibility = "hidden";
    }
  },

  clearStorage : function(){
    localStorage.clear();
    this.items.length = 0;
    this.repaint();
  },

  toggle(el,id){
    let item = JSON.parse(localStorage.getItem('listEl' + JSON.stringify(id)));
    item.done = !item.done;
    item.done === false ?
      el.style.textDecoration = "none"
      : el.style.textDecoration = "line-through";
    localStorage.setItem('listEl' + JSON.stringify(item.id), JSON.stringify(item));
  }

};