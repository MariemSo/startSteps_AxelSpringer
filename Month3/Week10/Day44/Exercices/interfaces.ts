//! Task 1: Define a Complex Interface for Clothing Inventory

    interface ClothingItem {
        id: number,
        name :string
        price: number
        quantity : number    
        sizes :string[]
    }

    let skirt: ClothingItem ={
        id:1,
        name: "Labor Free Skirt",
        price: 10,
        quantity : 6,
        sizes: ["XXL", "XL","L", "M", "S","XS"]
    }
    let jeans: ClothingItem ={
        id:2,
        name: "Jeans for beams",
        price: 26,
        quantity : 12,
        sizes: ["XXL", "XL","L", "M", "S","XS"]
    }
    
    //! Task 2: Implement Functions for Inventory Calculations

    let inventory:ClothingItem[] = []
    inventory.push(skirt)
    inventory.push(jeans)
    console.log(inventory)

    interface Calculations {
         (item:ClothingItem[]):number;
    }

    const  calculateAveragePrice : Calculations = (items:ClothingItem[]) => {
        //Cheking if inventory is empty 
        if (items.length ===0) return 0;

        //calculate sum 
        const sum = items.reduce((a,b)=> a+b.price,0)


        //calculate average
        const average = sum/items.length;
        return average

    }

    const countItemsInInventory : Calculations = (items:ClothingItem[]) =>{
        const count = items.reduce((a,b)=> a+b.quantity,0)
        return count
    }

    console.log(calculateAveragePrice(inventory));
    console.log(countItemsInInventory(inventory));

//! Bonus Task: Manage Inventory Stock Levels

    interface AddedFunc extends ClothingItem {
        addStock : (quantity: number, size?: string)=> void 
        removeStock: (quantity: number, size?: string) =>  void
    }

    
