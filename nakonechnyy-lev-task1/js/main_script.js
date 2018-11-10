let elements = document.getElementsByClassName('elem');
for (let obj of elements) {
    let count = counter.call(obj);
    obj.onclick = (event) => {
        console.log(event.target.innerText);
        count();
    };

}

function counter() {
    this.count = 0;
    return () => {
        this.count++;
        console.log(`Count of clicks on that circle - ${this.count}`);
    }
}