class ItemModel {
    constructor() {
        this.storage = window.localStorage.length > 0 ? this._getFromLocalStorage(window.localStorage) : [];
    }

    getFirstState() {
        return this.storage;
    }

    /**
     * Return new mock elements
     */
    getMockElements() {
        if(this.storage.length === 0) {
            return someStorage;
        } else {
            const newMocks = someStorage.map((element, index) => {
                element.key = this.storage[this.storage.length-1].key + Math.floor(this.storage[this.storage.length-1].key / 2 + index);
                return element;
            });
            return newMocks;
        }
    }

    /**
     * push new elements to storage
     */
    pushToCurrentStorage(newElement) {
        this.storage.push(...newElement);
        this._updateLocalStorage();
    }

    /**
     * Search all elements with this key and delete them
     * @param {Number} key - unique key
     */
    removeFromCurrentStorage(key) {
        this.storage.forEach((element, index) => {
            if(element.key == key) {
                this.storage.splice(index, 1);
            }
        });
        this._updateLocalStorage();
    }

    /**
     * Set done true and save that
     * @param {String || Number} key - element's key 
     */
    setDone(key) {
        this.storage.forEach((element) => {
            if(element.key === Number(key)) {
                if(element.done == false) {
                    element.done = true;
                }
            }
        });
        this._updateLocalStorage();
    }

    /**
     * Get state from localStorage
     * @param {Object} locStorage 
     */
    _getFromLocalStorage(locStorage) {
        const str = locStorage.getItem(`li`);
        const strParse = JSON.parse(str);
        return strParse;
    }

    /**
     * Change state in local storage
     */
    _updateLocalStorage() {
        if (window.localStorage != this.storage) {
            window.localStorage.setItem(`li`, JSON.stringify(this.storage));
        }
    }

    /**
     * Clear local storage
     */
    clearLocalStorage() {
        window.localStorage.removeItem(`li`);
        this.storage = [];
    }

    /**
     * Create new task
     * @param {String} value - task's text
     */
    createElement(value) {
        let findKey = this.storage.length > 0 
            ? this.storage[this.storage.length-1].key + Math.floor(this.storage[this.storage.length-1].key / 2 + 1) 
            : 0;

        const newEllement = {
            title: `${value}`,
            done: false,
            key: findKey
        };
        this.storage.push(newEllement);
        this._updateLocalStorage();
        return newEllement;
    }
}