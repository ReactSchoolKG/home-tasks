Array.prototype.map.call (document.querySelectorAll ('div'), item => {
    item.addEventListener("click", function() {
    console.log(this.innerHTML);
    })
})


Array.prototype.map.call (document.querySelectorAll ('div'), item => {
    item.addEventListener("mouseover", function() {
    this.style.opacity = 0.9;
    this.style.border = "1px solid green";
    this.style.fontSize = "40px";
    })
})


Array.prototype.map.call (document.querySelectorAll ('div'), item => {
    item.addEventListener("mouseout", function() {
    this.style.opacity = 1;
    this.style.border = "1px solid #f57665";
    this.style.fontSize = "30px";
    })
})


