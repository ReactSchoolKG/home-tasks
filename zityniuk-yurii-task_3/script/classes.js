class LocalStorageService{
    getCurrentArr(){
        return localStorage.getItem("storageItems") ? JSON.parse(localStorage.getItem("storageItems")) : [];
    };
    saveArr(arrayToSave){
        let strItems = JSON.stringify(arrayToSave);
        localStorage.clear();
        localStorage.setItem("storageItems", strItems);
        return JSON.parse(localStorage.getItem("storageItems"))
    };
};

class Items{
    constructor(title, id, done){
        this.title = title;
        this.id = id;
        this.done = done; 
    }
};