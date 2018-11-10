let ul = document.getElementById('ourList');
let fragment;
let liList;
let showAll = document.getElementById('showAll');
let clearAll = document.getElementById('clearAll');
let addElem = document.getElementById('addElem');
let addElemInput = document.getElementById('addElemInput');
showAll.onclick = function (event) {
    item.getItems();
    if (fragment) {
        ul.innerText = '';
    }
    getItemsFromStorageToUl();
    onLiClickEvent();
};
clearAll.onclick = function (event) {
    localStorage.removeItem(item.getKey());
    window.location.reload();
};
document.addEventListener("DOMContentLoaded", function (event) {
    getItemsFromStorageToUl();
    onLiClickEvent();
});

addElem.onclick = function (event) {
    let items = JSON.parse(localStorage.getItem(item.getKey()));
    let max = -Infinity;
    if(items){
        for (let id of items) {
            if(id.id > max){
                max = id.id;
            }
        }
        max+=1;
        items.push({title:addElemInput.value || "Without title",done:false,id:max});
        let parsedItems = JSON.stringify(items);
        localStorage.setItem(item.getKey(), parsedItems);
        window.location.reload();
    }else{
        let items = [];
        items.push({title:addElemInput.value  || "Without title",done:false,id:1});
        let parsedItems = JSON.stringify(items);
        localStorage.setItem(item.getKey(), parsedItems);
        window.location.reload();
    }
};

function getItemsFromStorageToUl() {
    fragment = document.createDocumentFragment();
    let items = JSON.parse(localStorage.getItem(item.getKey()));
    if (items) {
        items.forEach(function (item) {
            let li = document.createElement('li');
            li.textContent = item.title;
            if (item.done) {
                li.style.textDecoration = "line-through";
            }
            fragment.appendChild(li);
            let btn = document.createElement('button');
            btn.setAttribute("id", item.id);
            btn.innerText = `Delete ${item.title}`;
            fragment.appendChild(btn);
        });
        ul.appendChild(fragment);
    }
}

function onLiClickEvent() {
    liList = ul.getElementsByTagName("li");
    let btnList = ul.getElementsByTagName("button");
    for (let btn of btnList) {
        btn.onclick = function (event) {
            let btnId = btn.id;
            let items = JSON.parse(localStorage.getItem(item.getKey()));
            for (let item of items) {
                if (item.id == btnId) {
                    console.log(btn.innerText);
                    let index = items.indexOf(item);
                    if (index != -1) {
                        items.splice(index, 1);
                    }
                }
            }
            //localStorage.removeItem(item.getKey());
            let changedItems = JSON.stringify(items);
            localStorage.setItem(item.getKey(), changedItems);
            window.location.reload();
        }
    }
    for (let li of liList) {
        li.onclick = function (event) {
            let title = li.innerText;
            let items = JSON.parse(localStorage.getItem(item.getKey()));
            for (let item of items) {
                if (item.title == title) {
                    if (item.done) {
                        item.done = false;
                        li.style.textDecoration = "none";
                    } else {
                        item.done = true;
                        li.style.textDecoration = "line-through";
                    }
                }
            }
            //localStorage.removeItem(item.getKey());
            let changedItems = JSON.stringify(items);
            localStorage.setItem(item.getKey(), changedItems);
            console.log(localStorage.getItem(item.getKey()));
        }
    }
}







