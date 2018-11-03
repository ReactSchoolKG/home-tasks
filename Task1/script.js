var obj = {
    timesClicked: 0
};

document.body.addEventListener("click",
    (event) => {
        clicked.call(obj);
        console.log("Text: ", event.target.textContent);       
    }
);

function clicked() {
    console.log("Times clicked:", ++this.timesClicked);
}