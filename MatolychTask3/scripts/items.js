class Items {
    constructor(list) {
        this._list = list;

        let items = JSON.parse(localStorage.getItem("items"));
        if (items === null) {
            items = [];
        }
        this._items = items;

        localStorage.setItem("items", JSON.stringify(this._items));
        
        this._items.forEach(item => {
            this.render(item);    
        });
    }

    add(title) {
        let item = {
            id: this._items.length + 1,
            title,
            done: false
        };
        this._items.push(item);

        localStorage.setItem("items", JSON.stringify(this._items));
    
        this.render(item);
    }

    remove(index) {
        this._items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(this._items));
        this._list.removeChild(this._list.children[index]);
    }

    complete(index) {
        this._items[index].done = !this._items[index].done;
        localStorage.setItem("items", JSON.stringify(this._items));
        this._list.children[index].classList.toggle("done");
    }

    render(item) {
        let li = document.createElement("li");
        let title = document.createTextNode(item.title);
        li.appendChild(title);
        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", e => {
            e.stopPropagation();
            this.remove(Array.prototype.indexOf.call(this._list.children, e.target.parentElement));
        });
        deleteButton.style.margin = "3px";
        li.appendChild(deleteButton);
        if (item.done) {
            li.classList.add("done");
        }
        li.addEventListener("click", e => {
            this.complete(Array.prototype.indexOf.call(this._list.children, e.target));
        });
        this._list.appendChild(li);
    }

    clear() {
        this._items.length = 0;
        localStorage.setItem("items", JSON.stringify(this._items));
        while(this._list.firstChild) {
            this._list.removeChild(this._list.firstChild);
        }
    }
}