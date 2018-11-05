var elements=document.getElementsByTagName('p');

for(var i=0;i<elements.length;i++)
    {
        elements[i].addEventListener('click', (function(){
            return function(){
                console.log(this.innerText);
            } 
        }()));
    }