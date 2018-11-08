class Controller {
    constructor(model, view, eventEmitter) {
        this.model = model;
        this.view = view;
        this.eventEmitter = eventEmitter;

        this.eventEmitter.on(`clearStorage`, this.clearStorage.bind(this));
        this.eventEmitter.on(`pushMockElement`, this.pushMockElement.bind(this));
        this.eventEmitter.on(`deleteElement`, this.deleteElement.bind(this));
        this.eventEmitter.on(`setDone`, this.setDone.bind(this));
        this.initialise();
    }


    initialise() {
        this.view.renderItems(this.model.getFirstState());
    }

    clearStorage() {
        this.model.clearLocalStorage();
    } 

    pushMockElement() {
        const elem = this.model.getMockElements();
        this.view.renderItems(elem);
        this.model.pushToCurrentStorage(elem);
    }

    deleteElement(key) {
        this.model.removeFromCurrentStorage(key);
    }

    setDone(key) {
        this.model.setDone(key);
    }
}