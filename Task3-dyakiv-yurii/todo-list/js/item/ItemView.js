class ItemView {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;

        this.bindButtons();
    }

    bindButtons() {
        const clearStorage = document.querySelector(`.clear-storage`);
        const mockElement = document.querySelector(`.mock-element`);
        const newElement = document.querySelector(`.new-element`);
       
        clearStorage.onclick = this.clearStorageHandler.bind(this);
        mockElement.onclick = this.doMockElement.bind(this);
        newElement.onclick = this.openForm.bind(this);
    }

    clearStorageHandler() {
        this.eventEmitter.emit(`clearStorage`);
    }

    doMockElement() {
        this.eventEmitter.emit(`pushMockElement`);
    }

    openForm() {
        const form = document.querySelector(`.form`);
        form.onsubmit = function() {
            event.preventDefault();
        };

        const changeOpenState = () => {
            if (form.classList.contains(`closed`)) { 
                form.classList.remove(`closed`);
                form.classList.add(`open`);
    
            } else {
                form.classList.remove(`open`);
                form.classList.add(`closed`);
            }
        }
        changeOpenState();

        const closeFormButton = document.querySelector(`.form__close`);
        closeFormButton.onclick = function() {
            changeOpenState();
        };

        const formSubmitElement = document.querySelector(`.form__submit`);
        const self = this;
        formSubmitElement.onclick = function() {
            const inputElement = document.querySelector(`.form__task`);
            self.eventEmitter.emit(`newTask`, inputElement.value);
        };
    }

    changeDone() {
        const currentElement = event.currentTarget;
        if(!currentElement.classList.contains(`item__text--done`)) {
            currentElement.classList.add(`item__text--done`);
        };
        this.eventEmitter.emit(`setDone`, event.currentTarget.parentNode.dataset.key)
    }

    deleteElement() {
        const liElement = event.target.parentNode;
        liElement.remove();
        this.eventEmitter.emit(`deleteElement`, liElement.dataset.key);
    }
    
    /**
     * Render all element
     * @param {Array} list - take a list of elements
     */
    renderItems(list) {
        const ulElement = document.querySelector(`.list`);
        const fragment = document.createDocumentFragment();

        list.forEach((element) => {
            const liELement = document.createElement(`li`);
            liELement.className = `list__item item`;
            liELement.dataset.key = element.key;

            const pElement = document.createElement(`p`);
            pElement.textContent = element.title;
            element.done === true ? pElement.className = `item__text item__text--done` : pElement.className = `item__text`;
            pElement.onclick = this.changeDone.bind(this);

            const buttonElement = document.createElement(`button`);
            buttonElement.className = `delete-button`;
            buttonElement.onclick = this.deleteElement.bind(this);

            liELement.appendChild(pElement)
            liELement.appendChild(buttonElement);
            fragment.appendChild(liELement);
        });
        ulElement.appendChild(fragment);
    }
}