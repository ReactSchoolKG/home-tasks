
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
        let localStorageListArrayTemp = [];
        let localStorageListArray = localStorage.getItem('localStorageListArray');
        if(Array.isArray(localStorageListArray)) {
            let thisStr = JSON.stringify(this);
            localStorageListArrayTemp.push(thisStr);
        } else {
           localStorageListArrayTemp.push(localStorageListArray, JSON.stringify(this));          
           if(localStorageListArrayTemp[0] == '') {
            localStorageListArrayTemp = localStorageListArrayTemp.slice(1); 
           }
        }        
        localStorage.setItem('localStorageListArray', localStorageListArrayTemp);
    }

    displayListItem() {
        let newItem = document.createElement('li');
        newItem.setAttribute('class', 'todo-list-item');
        newItem.setAttribute('id', `id="${this.id}"`)
        newItem.innerHTML = `<div class="item-list-point"></div> I need to ${this.title}.<button class="delete-item-button"></button>`;
        if(this.done == true) {
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
        let localStorageListArray = localStorage.getItem('localStorageListArray');
        let tmp = [...localStorageListArray];
        console.log('tmp11111' + tmp);
        let filteredArray = localStorageListArray.filter(function(item) {
            return item.id != parentLiName;
        });
        localStorage.setItem('localStorageListArray', filteredArray);
    }
    
    makeDone() {
        if(event != undefined) {
            let evTarget = event.target;
            if(evTarget.tagName != 'BUTTON') {
                evTarget.classList.toggle('done');
                let doneLiId = evTarget.getAttribute('id').slice(4,-1);
                let localStorageListArray = localStorage.getItem('localStorageListArray');
                let tmp = localStorageListArray.split(',{');
                if(tmp[0] == '') {
                    tmp = tmp.slice(1);
                }
                let tmp2 = tmp.map(function(item){
                    if(item[0][0] == '{'){
                        return item;
                    } else {
                        return '{' + item;
                    }            
                });
                for(let item of tmp2) {
                    let obj = JSON.parse(item);
                    if (obj.id == doneLiId) {
                        if (obj.done == false) {
                            obj.done = true;
                        } else {
                            obj.done = false;
                        }
                        var tempObj = new ItemListObject (obj.title, obj.done, obj.id);
                        let filteredArray = tmp2.filter(function(item) {         
                            let obj = JSON.parse(item);
                            return obj.id != doneLiId;
                        });
                        localStorage.setItem('localStorageListArray', filteredArray);
                        tempObj.putInLocalStorage();
                    }
                } 
            }
        }
               
    }
}

getActualLS();


clearStorageButton.addEventListener('click', function() {
    let localStorageListArray = [];
    localStorage.setItem('localStorageListArray', localStorageListArray);
    // localStorage.clear();
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
        let localStorageListArray = localStorage.getItem('localStorageListArray');
        let tmp = localStorageListArray.split(',{');
        if(tmp[0] == '') {
            tmp = tmp.slice(1);
        }
        let tmp2 = tmp.map(function(item){
            if(item[0][0] == '{'){
                return item;
            } else {
                return '{' + item;
            }            
        });
        let filteredArray = tmp2.filter(function(item) {         
            let obj = JSON.parse(item);
            return obj.id != parentLiName;
        });
        localStorage.setItem('localStorageListArray', filteredArray);
    }
});

function putInLocalStorageMainList(list) { 
    let localStorageListArray = [];
    localStorage.setItem('localStorageListArray', localStorageListArray);
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
    if(localStorage.getItem('localStorageListArray') == undefined) {
        console.log('No');
        let localStorageListArray = [];
        localStorage.setItem('localStorageListArray', localStorageListArray);
    } else {
        let localStorageListArray = localStorage.getItem('localStorageListArray');
        let tmp = localStorageListArray.split(',{');
        if(tmp[0] == '') {
            tmp = tmp.slice(1);
        }
        let tmp2 = tmp.map(function(item){
            if(item[0][0] == '{'){
                return item;
            } else {
                return '{' + item;
            }            
        });
        for(let item of tmp2) {
            let tmp = JSON.parse(item);
            let itemListObject = new ItemListObject (tmp.title, tmp.done, tmp.id);
            
            itemListObject.displayListItem();
        }
    }
}




function deleteAllItems() {
   ulTodoList.innerHTML = '';  
}

function getLastId() {
    let actualID = 1;
    let localStorageListArray = localStorage.getItem('localStorageListArray');
    let tmp = localStorageListArray.split(',{');
    if(tmp[0] == '') {
        tmp = tmp.slice(1);
    }
    let tmp2 = tmp.map(function(item){
        if(item[0][0] == '{'){
            return item;
        } else {
            return '{' + item;
        }            
    });
    if(tmp2.length == 0) {
        return actualID;
    } else {
        for(let item of tmp2) {
            let obj = JSON.parse(item);
            if(obj != null) {                
                if(actualID <= obj.id) {
                    actualID = ++obj.id;
                }
            }          
        }
        return actualID;
    }
}
