function onLoad() {
  if(itemsHelper.list.children.length > 0){
    itemsHelper.list.style.visibility = "visible";
  }
  else{
    itemsHelper.list.style.visibility = "hidden";
  }
  itemsHelper.repaint();
  document.getElementById("addButton").addEventListener('click',()=>{
    itemsHelper.addItem(document.getElementById("inputEl").value);
  });
}

window.onload = function() {
  onLoad();
};