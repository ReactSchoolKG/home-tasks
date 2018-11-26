// For using this I have decided to use array. There I am going to put
// a new objects which will be created with using the constructor

const listClick = [];
const allDiv = [...document.querySelectorAll(`div`)];

allDiv.forEach((element) => {
    console.log(element);
    element.onclick = function (event) {
        const element = Number(event.currentTarget.textContent);
        console.log(element);
        addClick(element, listClick);
    };
});

/**
 * Will push a new object with click state into an array
 * @param {Number} value - show number of current element 
 * @param {Array} list - it's array were will be push new object
 */
function addClick(value, list) {
    list.push(new Click(value));
    console.log(`This is list of all clicks`, list);
}

/**
 * Will create a new object
 * @constructor
 * @param {Number} number 
 */
function Click(number) {
    this.number = number;
}
