var elements = document.querySelectorAll('body,div,p,button');

for(var i=0;i<elements.length;i++)
{
  elements[i].addEventListener("click", HandleClick, true);
  elements[i].addEventListener("click", HandleClick, false);
}

function HandleClick(event)
{
alert("Поточний елемент: " + this.tagName + " Тригер відбувся: "+ event.target.tagName);
}