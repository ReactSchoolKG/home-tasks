let LS = new LocalStorageService();

// create dafault array
let defArray = [];
defItems.forEach(function(item){
    defArray.push(new Items(item.title, +item.id, item.done))
})


// check Local Storage and render initial Array
let currentArray  = localStorage.getItem("storageItems") ? LS.getCurrentArr() : LS.saveArr(defArray) ;
renderArray(currentArray);


// render list from "array" in DOM
function renderArray(array){
    let ul = document.getElementById("li-box");
    ul.innerHTML = "";
    let fragment = document.createDocumentFragment();

    array.forEach(function(item){
        //create close button
        let closeBTN = document.createElement("button");
        closeBTN.setAttribute("class", "close");
        closeBTN.addEventListener("click", closeLi);
        closeBTN.innerText = "x";

        // create li and insert button
        let li = document.createElement("li");
        li.setAttribute("id", item.id );
        li.innerText = item.title;
        li.addEventListener("click", tougle, false);
        li.appendChild(closeBTN);

        // set "line-through" class to done li
        if (item.done === true){
            li.classList.add("line-through");
        }else{li.classList.remove("line-through")}

        fragment.appendChild(li);
    });
    ul.appendChild(fragment);
};


// tougle object property "done" by "click"
function tougle(event){
    let tougleElId = event.target.id;
    let currentArray = LS.getCurrentArr();

    currentArray.forEach(function(item){
        if (item.id === +tougleElId){
            item.done = item.done ? false : true;
            console.log(item.done); 
        }
        renderArray(LS.saveArr(currentArray));
    })
}


// eventListener callback for close button
function closeLi(){
    let currentArray = LS.getCurrentArr();
    let parentLiId = this.parentNode.id;
    let filteredArray = currentArray.filter(function(item){ return item.id != parentLiId })
    renderArray(LS.saveArr(filteredArray));
};


// Buttons / set eventListeners for "Clear Storage", "Add" and "Dafault" buttons
let buttonClear = document.getElementById("clear-LS");
let buttonDef = document.getElementById("default-LS");
let buttonAdd = document.getElementById("AddNew");


buttonClear.addEventListener("click", function(){
    localStorage.clear();
    renderArray(LS.getCurrentArr());
});

buttonDef.addEventListener("click", function(){
    localStorage.clear();
    renderArray(LS.saveArr(defArray));
});

buttonAdd.addEventListener("click", function(){
    let newLi = document.getElementById('textInput').value;
    if (newLi.length > 0){
        let currArray = LS.getCurrentArr();
        currArray.push(new Items(newLi, LS.getCurrentArr().length +1, false ));
        renderArray(LS.saveArr(currArray))
    }else{
        alert("Prease input text");
    }
});
