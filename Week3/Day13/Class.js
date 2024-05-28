class Town {
    // Constructor to initialize the town name and population
    constructor(townName, population){
        this.name= townName;
        this.population= population;
    }
}

// Creating an array of Town objects
const towns=[
    new Town('Berlin',35),
    new Town('Freiburg',50),
    new Town('Stuttgart',40),
    new Town('NewYork',90)
]

// Sorting the towns array by population in descending order
const mostPopulationTown= towns.sort((a,b) => b.population-a.population);


// Iterating through mostPopulationTown and logging the details
for (const town of mostPopulationTown){
    console.log(`Name:${town.name}, Population: ${town.population}`)
}