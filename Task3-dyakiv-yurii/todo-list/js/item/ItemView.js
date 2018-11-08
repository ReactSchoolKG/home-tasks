class ItemView {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;

        this.bindButtons();
    }

    bindButtons() {
        const clearStorage = document.querySelector(`.clear-storage`);
        const mockElement = document.querySelector(`.mock-element`);
       
        clearStorage.onclick = this.doClearStorage.bind(this);
        mockElement.onclick = this.doMockElement.bind(this);
    }

    doClearStorage() {
        this.eventEmitter.emit(`clearStorage`);
    }

    doMockElement() {
        this.eventEmitter.emit(`pushMockElement`);
    }

    changeDone() {
        const currentElement = event.currentTarget;
        if(!currentElement.classList.contains(`list--item--done`)) {
            currentElement.classList.add(`list--item--done`);
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
            liELement.className = `list--item`;
            liELement.dataset.key = element.key;

            const pElement = document.createElement(`p`);
            pElement.textContent = element.title;
            element.done === true ? pElement.className = `item--text list--item--done` : pElement.className = `item--text`;
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