let arrItems = new Set();

function addToCart(item){
    if(arrItems.has(item)){
        arrItems.delete(item)
    }else{
        arrItems.add(item);
    }
    displayItem();
}

function displayItem(){
    const cartItems = document.getElementById("cartItems")
    cartItems.innerHTML = '';
    arrItems.forEach( item =>{
        let li = document.createElement('li');
        li.textContent=item
        cartItems.appendChild(li)
    })
}

