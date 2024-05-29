//! 3. Exercise: Weather Forecast Decision Maker:
    // ● Description: Write a function forecastDecision() that takes two
    // parameters: temperature (number) and isSunny (boolean).
    // ● If the temperature is above 25 degrees Celsius and it's sunny,
    // recommend going to the beach; if it's above 25 degrees but not
    // sunny, recommend having a picnic; otherwise, recommend
    // staying indoors.
    
    // ● Implement this function twice:
        // ○ Once using if-else statements.
            function forecastDecision(number,isSunny){
                let temp = 25;
                if (number>temp && isSunny){
                    return "It's sunny, You should definitely hit the beach"
                }
                else if (number>temp && !isSunny){
                    return "It's cloudy, It is safer to go for a picnic"
                }
                else{
                    return "Bad Luck, Nothing better than Home"
                }
            }
            console.log(forecastDecision(10))
        // ○ Once using nested ternary operators.
            function forecastDecision2(num,isSunny=true){
                let result=num>25&& isSunny?"It's sunny, You should definitely hit the beach":
                num>25&& !isSunny?"It's cloudy, It is safer to go for a picnic":
                "Bad Luck, Nothing better than Home"
                return result
            }
            console.log(forecastDecision2(30))
    // ● Which method do you prefer?
            // The first method is more readable and clearer to my human mind , 
            // and i also think it would be easier to debug in any case
            // if i was to return to this code i would probably be easier to understand the first method . 