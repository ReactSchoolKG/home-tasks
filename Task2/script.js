const divList = [...document.querySelectorAll(`.item`)];
const pList = [...document.querySelectorAll(`.item__text`)];
const buttonList = [...document.querySelectorAll(`.item__button`)];

/**
 * Bind for all elements eventListener
 * @param {Array} elements - this is array of elements
 * @param {Boolea} stopPropagation - if true then put stopPropagation 
 */
const bind = (elements, stopPropagation = false) => {
    elements.forEach((element) => {
        element.addEventListener(`click`, function(event) {
            console.log(`%cCapture phase`, `color: indigo; font-weight: bold;`);
            console.log(`Current element (target) =`, event.target);
            console.log(`Element with handler (this) =`, event.currentTarget);
        }, true);
        element.addEventListener(`click`, function(event) {
            if(stopPropagation) {
                event.stopPropagation();
            }
            console.log('%cBubbling phase', `color: green; font-weight: bold;`);
            console.log(`Current element (target) =`, event.target);
            console.log(`Element with handler (this) =`, event.currentTarget);
        });
    }); 
};

bind(divList, true);
bind(pList);
bind(buttonList);