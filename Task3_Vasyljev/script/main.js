
let todoListArray = [{
    title: 'homework',
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

getActualLS();

clearStorageButton.addEventListener('click', function() {
    localStorage.clear();
    deleteAllItems();
});


displayDefaultListButton.addEventListener('click',function(){   
    putInLocalStorageMainList(todoListArray);    
});

addNewItemButton.addEventListener('click', function() {
    let currId = getLastId();
   let itemObject = {
        title: newItemInput.value,
        done: false,
        id: currId
    }
    putInLocalStorage(itemObject);
    let itemNameinLS = itemObject.title + itemObject.id; 
    console.log(itemNameinLS); 
    displayListItem(takeFromLocalStorage(itemNameinLS));
});

ulTodoList.addEventListener('click', function() {
    if(event.target.getAttribute('class') == 'delete-item-button') {
        deleteItem();
    }
});


function putInLocalStorageMainList(list) { 
    localStorage.clear();
    deleteAllItems();   
    if(Array.isArray(list)) {
        for(let i = 0; i < list.length; i++) {
            putInLocalStorage(list[i]);
            let itemNameinLS = list[i].title + list[i].id;  
            displayListItem(takeFromLocalStorage(itemNameinLS));          
        }
    }    
}

function displayListItem(item) {    
    let newItem = document.createElement('li');
    newItem.setAttribute('class', 'todo-list-item');
    newItem.setAttribute('id', `id="${item.title}${item.id}"`)
    newItem.innerHTML = `<div class="item-list-point"></div> I need to ${item.title}<button class="delete-item-button"></button>`;
    if(item.done == true) {
        newItem.classList.add('done');     
    } else {
        newItem.classList.remove('done'); 
    }
    ulTodoList.appendChild(newItem);
    newItem.classList.add('added');
    newItem.addEventListener('click', makeDone);
} 

function putInLocalStorage(list) {
    let listString = JSON.stringify(list);
    let namePlusId = list.title + list.id;
    localStorage.setItem(namePlusId, listString);
    console.log(localStorage.getItem(namePlusId));
}

function takeFromLocalStorage(name) {
    let listItem = localStorage.getItem(name);
    let itemObject = JSON.parse(listItem);
    return itemObject;
}

function getActualLS() {
    for(let item in localStorage) { 
       let obj = takeFromLocalStorage(item);
       if(obj != null) {           
            displayListItem(obj); 
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

function deleteItem() {
    // event.stopPropagation();
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

function makeDone() {
    if(event.target.tagName != 'BUTTON') {
        let doneLi = event.target;
        doneLi.classList.toggle('done');
        doneLiName = doneLi.getAttribute('id').slice(4,-1);
        let doneLiObj =  takeFromLocalStorage(doneLiName);
        if (doneLiObj.done == false) {
            doneLiObj.done = true;
        } else {
            doneLiObj.done = false;
        }
        putInLocalStorage(doneLiObj); 
    }
       
    
}

