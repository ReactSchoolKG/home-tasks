class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, ...calbacs) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(...calbacs);
    }

    emit(event, ...args) {
        if(this.events[event]) {
            this.events[event].forEach((element) => {
                element(...args);
            });
        }
    }
}