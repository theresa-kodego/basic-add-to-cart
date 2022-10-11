/* JS File */
var addItemId = 0;
function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    /* go to css and add cartimg */
    selectedItem.setAttribute('id', addItemId); /* above the function add a var */
    
    var cartItems = document.getElementById('title');
    cartItems.append(selectedItem);

    var img = document.createElement('img'); 
    img.setAttribute('src',item.children[0].currentSrc);
     /* after > img */
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);
     /* add delete */
    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete'; 
    delBtn.setAttribute('onclick','del('+addItemId+')');
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);

}

function del(item) {
    document.getElementById(item).remove();
}