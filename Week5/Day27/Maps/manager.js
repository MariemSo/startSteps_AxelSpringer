//creating a Map to store city Population
let cityPopulations = new Map();

//Adding CP data to the map
cityPopulations.set("New York", 8419600)
cityPopulations.set("Los Angeles", 3990456)
cityPopulations.set("Chicago", 2716000)
cityPopulations.set("Houston", 2328000)
cityPopulations.set("Phoenix", 1680992)

function displayCity(){
    
    // get cityData div
    let cityDataDiv = document.getElementById("cityData");

    // Clear previous data to avoid duplicate entries
    cityDataDiv.innerHTML = "";
    
    // displaying map data to the screen
    cityPopulations.forEach((population, city) => {
        cityDataDiv.innerHTML +=`<p>${city}:${population} people</p>`
    });

}
displayCity()
console.log(cityPopulations)

//retrieving IDs from HTML 
function addCity(){

    //retrieve the input data
    let cityInput = document.getElementById("cityInput") ;
    let populationInput = document.getElementById("populationInput") ;


    let city = cityInput.value.trim()
    let population= parseInt(populationInput.value);

    if(city&& !isNaN(population)){
        
        // adding a city to map
        cityPopulations.set(city,population)

        //display Updated cityData
        displayCity()

        // clear input Field after Adding City
        cityInput.value=""
        populationInput.value=""
    }else{
        alert("Please fill in all fields with valid information ");
    }
}