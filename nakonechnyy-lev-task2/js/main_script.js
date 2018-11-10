let div1 = document.getElementById('div1');
let p2 = document.getElementById('p2');
let btn3 = document.getElementById('btn3');

function printThisAndEventTarget(name, bool = false) {
    if (name.id == 'div1' && bool == false) {
        name.addEventListener('click', function (event) {
            event.stopPropagation();
        })
    }
    name.addEventListener('click', function (event) {
        console.log('This -', this.tagName, 'event.target -', event.target.tagName);
    }, bool);
}

document.body.addEventListener('click', function () {
    alert("Event on body");
});

printThisAndEventTarget(div1);
printThisAndEventTarget(div1, true);
printThisAndEventTarget(p2);
printThisAndEventTarget(p2, true);
printThisAndEventTarget(btn3);
printThisAndEventTarget(btn3, true);
