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

const fruitInput=document.getElementById("fruitInput")
const veggieInput=document.getElementById("veggieInput")


let fruits = new Set()
let vegetables = new Set()
let basket= new Set()
displayBasket(...fruits, ...vegetables);

function refreshBasket(fruits, vegetables) {
    if(!fruits && !vegetables) {
        return new Set();
    }
    if(!fruits) {
        return new Set(vegetables);
    }
    if(!vegetables) {
        return new Set([fruits]);
    }
    return new Set([fruits,vegetables]);
}

function displayFruit(){
    fruitInput.value = "";
    const displayFruits= document.getElementById("displayFruits");
    if(fruits.size == 0){
        displayFruits.textContent="There is no Fruits in this Set"
    }else{
        displayFruits.textContent ="the Set of Fruits contains:"+ [...fruits].join(" , ");
    }
}
displayFruit()

function addFruits(){
    let fruit = fruitInput.value;
    console.log(fruit);
    fruits.add(fruit);
    displayBasket(...fruits, ...vegetables);
    displayFruit();
}

function deleteFruits(){
    let fruit = fruitInput.value
    console.log(fruit)
    fruits.delete(fruit)
    displayFruit()
}

function displayVeggies(){
    veggieInput.innerHTML = "";
    const displayVeggies= document.getElementById("displayVeggies");
    if(vegetables.size == 0){
        displayVeggies.textContent ="There is no Veggies in this Set";
    }else{
        displayVeggies.textContent ="the Set of Veggies contains:"+ [...vegetables].join(" , ");
    }
}
displayVeggies()

function addVeggies(){
    let veggie = veggieInput.value
    console.log(veggie)
    vegetables.add(veggie)
    displayBasket(...fruits, ...vegetables);
    displayVeggies()
}

function deleteVeggies(){
    let veggie = veggieInput.value
    console.log(veggie)
    vegetables.delete(veggie)
    displayVeggies()
}

function displayBasket(fruits, vegetables){
    basket = refreshBasket(fruits, vegetables)
    const displayBasketParagraph= document.getElementById("displayBasket")
    if (basket.size==0){
        displayBasketParagraph.textContent="The Basket is empty"
    }else{
        displayBasketParagraph.textContent="The Basket contains "+[...basket].join(", ")
    }
}