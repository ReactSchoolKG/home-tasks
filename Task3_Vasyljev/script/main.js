
let todoListArray = [{
    title: 'do my homework',
    done: false,
    id: 1
},
{
    title: 'clean the room',
    done: false,
    id: 2
},
{
    title: 'buy bread',
    done: false,
    id: 3
},
{
    title: 'learn Front-end',
    done: false,
    id: 4
}];

let ulTodoList = document.getElementById('todo-list');
let newItemInput = document.getElementById('new-item-input');
let addNewItemButton = document.getElementById('add-new-item-button');
let displayDefaultListButton = document.getElementById('default-list');
let clearStorageButton = document.getElementById('clear-localstorage');

class ItemListObject {
    constructor(title, done, id) {
        this.title = title;
        this.done = done;
        this.id = id;
    }

    putInLocalStorage() {
        let namePlusId = this.title + this.id;
        localStorage.setItem(namePlusId, JSON.stringify(this));
        console.log(localStorage.getItem(namePlusId));
    }

    displayListItem() {
        let newItem = document.createElement('li');
        newItem.setAttribute('class', 'todo-list-item');
        newItem.setAttribute('id', `id="${this.title}${this.id}"`)
        newItem.innerHTML = `<div class="item-list-point"></div> I need to ${this.title}.<button class="delete-item-button"></button>`;
        if(this.done == true) {
            console.log('true');
            newItem.classList.add('done');     
        } else {
            newItem.classList.remove('done'); 
        }
        ulTodoList.appendChild(newItem);
        newItem.classList.add('added');
        newItem.addEventListener('click', this.makeDone);
    }

    deleteItem() {
        let deleteButtun = event.target;
        parentLi = deleteButtun.parentNode;
        parentLi.classList.add('deleted');
        parentLiName =  parentLi.getAttribute('id').slice(4,-1);
        parentUl = parentLi.parentNode;   
        setTimeout(function() {
            parentUl.removeChild(parentLi);
        }, 400);
        localStorage.removeItem(parentLiName);
    }
    
    makeDone() {
        if(event != undefined) {
            let evTarget = event.target;
        if(evTarget.tagName != 'BUTTON') {
            evTarget.classList.toggle('done');
            let doneLiName = evTarget.getAttribute('id').slice(4,-1);
            let doneLiObj =  takeFromLocalStorage(doneLiName);
            if (doneLiObj.done == false) {
                doneLiObj.done = true;
            } else {
                doneLiObj.done = false;
            }
            let tempObj = new ItemListObject (doneLiObj.title, doneLiObj.done, doneLiObj.id);
            tempObj.putInLocalStorage(); 
        }
        }
               
    }
}

getActualLS();

clearStorageButton.addEventListener('click', function() {
    localStorage.clear();
    deleteAllItems();
    
});

displayDefaultListButton .addEventListener('click',function(){   
    putInLocalStorageMainList(todoListArray);    
});

addNewItemButton.addEventListener('click', function() {
    let itemObject = new ItemListObject(newItemInput.value, false, getLastId());
    itemObject.putInLocalStorage();
    itemObject.displayListItem();
});

ulTodoList.addEventListener('click', function() {
    if(event.target.getAttribute('class') == 'delete-item-button') {
        let deleteButtun = event.target;
        parentLi = deleteButtun.parentNode;
        parentLi.classList.add('deleted');
        parentLiName =  parentLi.getAttribute('id').slice(4,-1);
        parentUl = parentLi.parentNode;   
        setTimeout(function() {
            parentUl.removeChild(parentLi);
        }, 400);
        localStorage.removeItem(parentLiName);
    }
});

function putInLocalStorageMainList(list) { 
    localStorage.clear();
    deleteAllItems();   
    if(Array.isArray(list)) {
        for(let i = 0; i < list.length; i++) {
            let itemListObject = new ItemListObject (list[i].title, list[i].done, list[i].id);
            itemListObject.putInLocalStorage();
            itemListObject.displayListItem();          
        }
    }    
}

function getActualLS() {
    for(let item in localStorage) {
        let obj = takeFromLocalStorage(item);
        if(obj != null && obj.title != undefined) {
            let itemListObject = new ItemListObject (obj.title, obj.done, obj.id);
            itemListObject.displayListItem();
       }
    }
}

function deleteAllItems() {
   ulTodoList.innerHTML = '';  
}

function getLastId() {
    let actualID = 1;
    if(localStorage.length == 0) {
        return actualID;
    } else {
        for(let item in localStorage) {
            let obj = takeFromLocalStorage(item);
            if(obj != null) {                
                if(actualID <= obj.id) {
                    actualID = ++obj.id
                }
            }          
        }
        return actualID;
    }
}

function takeFromLocalStorage(name) {
    let listItem = localStorage.getItem(name);
    let itemObject = JSON.parse(listItem);
    return itemObject;
}