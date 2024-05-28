//! 4. Exercise: Meal Time Decision Maker:
    // ● Description: Create a function mealDecision() that takes a
    // parameter mealTime (string).
    // ● Recommend a meal based on the time of day: breakfast in the
    // morning, lunch in the afternoon, and dinner in the evening.
    // ● Implement this function twice:
    // ○ Once using if-else statements.
        function mealDecision(mealTime){
            switch(mealTime){
                case "morning":
                    console.log( "breakfast")
                    break;
                case "afternoon":
                    console.log("lunch")
                    break;
                case "evening":
                    console.log("dinner")
                    break;    
            }
        }
        mealDecision("morning")
    // ○ Once using nested ternary operators.
        function mealDecision2(mealtime){
            let result= mealtime=="morning"?"breakfast":
                        mealtime=="afternoon"?"lunch":
                        "dinner"
            return result
            }
        console.log(mealDecision2("evening"))
    // ● Which one do you prefer?