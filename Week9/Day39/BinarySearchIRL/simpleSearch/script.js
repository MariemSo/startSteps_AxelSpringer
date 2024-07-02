const furnitureInventory = [
    "Chair",
    "Table",
    "Sofa",
    "Bed",
    "Bookshelf",
    // Add more furniture items as needed...
  ];

  function searchFurniture(){
    const searchItem = document.getElementById("searchInput").value;
    const resultElement = document.getElementById("searchResult");
    let found = false ;

    for (let i = 0; i < furnitureInventory.length;i++) {
        if(furnitureInventory[i]=== searchItem){
            found = true;
            break;
        }
    } 
    if (found) {
        console.log(found)
        resultElement.textContent = `Yes, '${searchItem}' is available in the inventory.`;
    } else {
        resultElement.textContent = `Sorry, '${searchItem}' is not available in the inventory.`;
    }
  }

