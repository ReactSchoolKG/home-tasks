const divList = [...document.querySelectorAll(`.item`)];
const pList = [...document.querySelectorAll(`.item__text`)];
const buttonList = [...document.querySelectorAll(`.item__button`)];

/**
 * For show message on the console
 * @param {Boolean} stopPropagation - use for stop propagation
 * @param {String} color - text color on the console
 */
const showMessage = (stopPropagation = false, color = `black`, event) => {
    if(stopPropagation) {
        event.stopPropagation();
    }
    console.log('%cBubbling phase', `color: ${color}; font-weight: bold;`);
    console.log(`Current element (target) =`, event.target);
    console.log(`Element with handler (this) =`, event.currentTarget);
};

/**
 * Bind for all elements eventListener
 * @param {Array} elements - this is array of elements
 * @param {Boolea} stopPropagation - if true then put stopPropagation 
 * @param {Object} event
 */
const bind = (elements, stopPropagation = false) => {
    elements.forEach((element) => {
        element.addEventListener(`click`, function(event) {
            setTimeout(showMessage(false, `indigo`, event), 0);
        }, true);
        element.addEventListener(`click`, function(event) {
            !stopPropagation 
                ? setTimeout(showMessage(false, `green`, event), 0) 
                : setTimeout(showMessage(true, `green`, event), 0);
        });
    }); 
};

bind(divList, true);
bind(pList);
bind(buttonList);