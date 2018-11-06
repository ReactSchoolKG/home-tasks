
var elements = document.querySelectorAll(".container");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    console.log(this.innerHTML);
    this.style.backgroundColor = "red";
  });
}