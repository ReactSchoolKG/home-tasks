var circles = document.getElementsByTagName('p');

for (var i=0; i < circles.length; i++) {
    circles[i].parentElement.addEventListener('click', (function(printNumber) {
        return function(){
            
            console.log(printNumber);
        }
    }(i+1)));
};