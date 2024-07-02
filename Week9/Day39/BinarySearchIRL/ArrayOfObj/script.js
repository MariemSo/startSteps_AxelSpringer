const inventory =[
    {item:"Shoes", quantity: 200},
    {item:"T-Shirts", quantity: 500},
    {item:"Coats", quantity: 150},
    {item:"Boots", quantity: 50},
    {item:"Socks", quantity: 550},
];

inventory.sort((a,b) =>{
    let itemA = a.item.toLowerCase();
    let itemB = b.item.toLowerCase();
    
    if ( itemA < itemB) return -1;

    if ( itemA > itemB) return 1;

    return 0;
})

function binarySearchInventory (arr, targetItem){
    let low = 0;
    let high = arr.length -1;

    while (low <= high){
       const mid = Math.floor((low + high) / 2);
        if (arr[mid].item.toLowerCase() === targetItem.toLowerCase()){
            return arr[mid].quantity;
        }else if (arr[mid].item.toLowerCase() < targetItem.toLowerCase()){
            low = mid + 1;
        }else {
            high = mid -1;
        }
    }
    return 0
}

function searchInventory () {
    let targetItem = document.getElementById("itemInput").value;
    let result = binarySearchInventory(inventory,targetItem);
    if (result ===0) {
        document.getElementById("result").innerHTML = `No item Found`
    }else{
        document.getElementById("result").innerHTML = `Quantity: ${result}`
    }
}