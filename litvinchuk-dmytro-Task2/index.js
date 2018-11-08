var elems = [];
elems.push(document.getElementsByTagName('body'));
elems.push(document.getElementsByTagName('div'));
elems.push(document.getElementsByTagName('p'));
elems.push(document.getElementsByTagName('button'));

elems.forEach(elem=>{
    log(elem[0],true);
    log(elem[0],false);
})

function log(elem,flag) {
    flag === true ? 
    elem.addEventListener("click", () => {
        alert("Фаза захоплення :  " + "  поточний елемент: " + elem.tagName + ", тригер відбувся на: " + event.target.tagName);
    }, true) : 
    elem.addEventListener("click", () => {
        alert("Фаза вспливання :  " + "  поточний елемент: " + elem.tagName + ", тригер відбувся на: " + event.target.tagName);
    }, false)
}