var elems = document.getElementsByTagName('p');

for (var i=0; i < elems.length; i++) {
    elems[i].parentElement.addEventListener('click', (function(counterForLog) {
        return function(){
            this.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            this.style.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            this.style.borderColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            console.log(counterForLog);
        }
    }(i+1)));
};