let products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Book', category: 'Books' },
    { id: 3, name: 'Headphones', category: 'Electronics' },
    { id: 4, name: 'Chair', category: 'Furniture' },
    { id: 5, name: 'Smartphone', category: 'Electronics' },
    { id: 6, name: 'Tablet', category: 'Electronics' },
    { id: 7, name: 'Desk', category: 'Furniture' },
    { id: 8, name: 'Monitor', category: 'Electronics' },
    { id: 9, name: 'Backpack', category: 'Accessories' },
    { id: 10, name: 'Printer', category: 'Electronics' },
    { id: 11, name: 'Sofa', category: 'Furniture' },
    { id: 12, name: 'Keyboard', category: 'Electronics' },
    { id: 13, name: 'Mouse', category: 'Electronics' },
    { id: 14, name: 'Dining Table', category: 'Furniture' },
    { id: 15, name: 'Camera', category: 'Electronics' },
    { id: 16, name: 'Bed', category: 'Furniture' },
    { id: 17, name: 'Couch', category: 'Furniture' },
    { id: 18, name: 'Watch', category: 'Accessories' },
    { id: 19, name: 'Speaker', category: 'Electronics' },
    { id: 20, name: 'Rug', category: 'Furniture' }
    ];

    products.sort((a,b) =>{
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0
    })

    function searchProducts (arr, targetName){
        let low = 0;
        let high = arr.length-1;
        while (low <= high){
            const mid = Math.floor((low + high) / 2);
            if (arr[mid].name.toLowerCase()=== targetName.toLowerCase()){
                return arr[mid]
            }else if (arr[mid].name.toLowerCase() < targetName.toLowerCase()){
                low = mid + 1;
            }else {
                high = mid -1;
            }
        }
        return null;
    }
    function analyzeProductSearch(){
        let targetName = document.getElementById("nameInput").value;
        let result = searchProducts(products,targetName);
        if (result === null){
            document.getElementById("result").innerHTML = 'Maybe We Will have it Soon ,Check again next Month'
        }else {
            document.getElementById("result").innerHTML = `Item found: ${result.name} (Category: ${result.category})`
        }
    }