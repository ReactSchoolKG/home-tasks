let item = (function() {
    let itemsArr = [
        {title: 'AngularJS', done: false, id: 1},
        {title: 'ReactJS', done: false, id: 2},
        {title: 'VueJS', done: false, id: 3},
        {title: 'NodeJS', done: false, id: 4},
    ];
    const keyItems = "kgItems";

    return class Items {
        static getItems() {
            let strItems = JSON.stringify(itemsArr);
            localStorage.setItem(keyItems, strItems);
        }
        static getKey(){
            return keyItems;
        }

    }
}());


