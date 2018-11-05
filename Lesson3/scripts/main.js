function ready() {
  console.log('DOM loaded');
  let items = JSON.parse(localStorage.getItem('items')) || [];
  itemsHelper.setItems(items);
}

document.addEventListener('DOMContentLoaded', ready);
