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

putInLocalStorageMainList(todoListArray);



function putInLocalStorageMainList(list) {
    if(Array.isArray(list)) {
        for(let i = 0; i < list.length; i++) {
            putInLocalStorage(list[i]);            
        }
    }
}

function displayListItem(item) {
    let newItem = document.createElement('li');
    newItem.setAttribute('class', 'todo-list-item');
    newItem.setAttribute('id', `id="${item.title}${item.id}"`)
    newItem.innerHTML = `<div class="item-list-point"></div> I need to ${list[i].title}<button class="delete-item-button"></button>`;
    ulTodoList.appendChild(newItem);
} 

            

function putInLocalStorage(list) {
    let listString = JSON.stringify(list);
    let namePlusId = list.name + list.id;
    localStorage.setItem(namePlusId, listString);
    console.log(localStorage.getItem(namePlusId));
}

function takeFromLocalStorage(name) {
    let listItem = localStorage.getItem(name);
    let itemObject = JSON.parse(listItem);
    return itemObject;
}