//! Task 4: Student Information:
    // ● Create a JavaScript object named student with properties name, age, and grade.
         let student={
            name:"Bojana",
            age:"25",
            grade:"A",
         }
    // ● Write a function named displayInfo that takes the student object as a parameter.
         function displayInfo(student){
            console.log(student.name)
            console.log(student.age)
            console.log(student.grade)
         }
    //● Display Output to Console
         displayInfo(student)
         //Output : Bojana ,25,A

//===================================================================
//! 5.Task 5: Shopping Cart:
    // ● Create a JavaScript object named cart representing a shopping cart.
    let shoppingCart={
        items:[
            {
                name:"Baguette",
                price:3,
            }
        ],
        total:3,
    }
    // ● Implement the addItem method to add items to the cart array and update the total cost.
    function addItem(name,price){
        shoppingCart.items.push({name,price})
        shoppingCart.total+=price   
    }


    // ● Test the addItem method by adding sample items to the cart and displaying the updated cart object.
    addItem("Cheese",3.5)
    addItem("Tomato",1.2)
    addItem("Mozzarella",2.5)


    console.log(shoppingCart)
//==========================================================
//After Seeing Francielli´s Code
//===========================================================
//! 5.Task 5: Shopping Cart:
    // ● Create a JavaScript object named cart representing a shopping cart.
    let shopCart={
        items:[
            {
                name:"Baguette",
                price:3,
            }
        ],
        total:3,
        // ● Implement the addItem method to add items to the cart array and update the total cost.
        addItem:function (name,price){
            this.items.push({name,price})
            this.total+=price   
        }
    }


    // ● Test the addItem method by adding sample items to the cart and displaying the updated cart object.
    shopCart.addItem("Cheese",3.5)
    shopCart.addItem("Tomato",1.2)
    shopCart.addItem("Mozzarella",2.5)


    console.log(shopCart)
