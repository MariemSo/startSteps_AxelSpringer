//create Set
const mySet = new Set();
const mySet2= new Set()
//add some element to the set
mySet.add("apple")
mySet.add("banana")
mySet.add("orange")
mySet.add("apple") //adding a duplicate will have no affect = apple won´t be added twice
mySet.add("Apple") //"apple" and "Apple" are different because JavaScript is case-sensitive
mySet2.add("potato")
mySet2.add("garlic")
mySet2.add("broccoli")

mySet.delete("banana")


// display set content in HTML
const resultParagraph= document.getElementById("result");
resultParagraph.textContent ="the Set contains:"+ [...mySet].join(", ");

// check for the presence of an Element
const hasApple = mySet.has("apple");

const combinedSet = new Set([...mySet, ...mySet2]);

const combinedSetParagraph = document.getElementById("result_two");
combinedSetParagraph.textContent="the combined Set contains: "+ [...combinedSet].join(", ");

// -----------------------------------------------------------------
//Get the input elements for fruits and vegetables
const fruitInput=document.getElementById("fruitInput")
const veggieInput=document.getElementById("veggieInput")

// Create Sets to store fruits and vegetables
const fruits = new Set()
const vegetables = new Set()

// Function to display the current fruits in the Set
function displayFruit(){
    // Clear the input value
    fruitInput.value = "";
    const displayFruits= document.getElementById("displayFruits");
    
    // Check if the fruits Set is empty
    if(fruits.size == 0){
        displayFruits.textContent="There is no Fruits in this Set"
    }else{
        displayFruits.textContent ="the Set of Fruits contains:"+ [...fruits].join(" , ");
    }

    // Update the basket to reflect current fruits and vegetables
    updateBasket();
}

// Function to add a fruit to the Set and display the updated Set
function addFruits(){
    let fruit = fruitInput.value;
    console.log(fruit);
    fruits.add(fruit);
    displayFruit();
}

// Function to delete a fruit from the Set and display the updated Set
function deleteFruits(){
    let fruit = fruitInput.value
    console.log(fruit)
    fruits.delete(fruit)
    displayFruit()
}

// Function to display the current vegetables in the Set
function displayVeggies(){
    veggieInput.value = "";
    const displayVeggies= document.getElementById("displayVeggies");
    if(vegetables.size == 0){
        displayVeggies.textContent ="There is no Veggies in this Set";
    }else{
        displayVeggies.textContent ="the Set of Veggies contains:"+ [...vegetables].join(" , ");
    }
    updateBasket();

}
// Function to add a vegetable to the Set and display the updated Set
function addVeggies(){
    let veggie = veggieInput.value
    console.log(veggie)
    vegetables.add(veggie)
    displayVeggies()
}

// Function to delete a vegetable from the Set and display the updated Set
function deleteVeggies(){
    let veggie = veggieInput.value
    console.log(veggie)
    vegetables.delete(veggie)
    
    // Display the updated basket
    displayVeggies()

}
// Function to update the basket with current fruits and vegetables
function updateBasket() {
    // Create a new Set combining both fruits and vegetables
    basket = new Set([...fruits, ...vegetables]);
    displayBasket();
}

// Function to display the contents of the basket
function displayBasket(){
    const displayBasketParagraph= document.getElementById("displayBasket")

    // Check if the basket is empty
    if (basket.size==0){
        displayBasketParagraph.textContent="The Basket is empty"
    }else{
        displayBasketParagraph.textContent="The Basket contains "+[...basket].join(" , ")
    }
    // Update the basket to ensure it reflects any recent changes
    updateBasket();
}
