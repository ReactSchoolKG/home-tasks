let items;

window.onload = function() {
    items = new Items(document.querySelector("ul"));
};

document.querySelector("#clear").addEventListener("click", () => {
    items.clear();
});

document.querySelector("#add").addEventListener("click", () => {
    items.add("Learn HTML");
    items.add("Learn CSS");
    items.add("Learn JavaScript");
});