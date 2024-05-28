let temperature = 19

    if (temperature <0){
        console.log("It's freezing outside!")
    }
    else if (temperature > 0 && temperature<15){
        console.log("It's cold outside.")
    }
    else if (temperature > 16 && temperature<25){
        console.log("It's pleasant outside.")
    }
    else {
        console.log("It's hot outside.")
    }

//Ternary Operator 
console.log(
temperature <0 ? 
    "It's freezing outside!": 
temperature<15?
    "It's cold outside.": 
temperature<25?
    "It's pleasant outside.":
    "It's hot outside.")