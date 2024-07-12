//Enums
    let enums = "special type of variables that allows a developer to define a set of named constants"
    // Syntax 
    enum NameEnum {
        NamedConstant1,
        NamedConstant2,
        NamedConstant3,
    }
//Numerical Enums:
    // By default, TypeScript enums are numeric, starting at 0 and subsequent members are auto-incremented.
    enum Direction {
        North,   //0
        East,   //1
        South,  //2
        West    //3
    }
    console.log(Direction.North); // returns 0
    // The value for North can explicitly be set to 1 (initializing first value)
    enum DirectionChanged{
        North = 1,
        East, // = 2
        South,// = 3
        West, // = 4
    }
//String Enums: 
    enum DirectionString {
        North = "N",
        East = "E",
        South= "S",
        West = "W",
    }

    console.log(Direction.North); // returns N

//heterogenous enum

    enum RightHetero {
        North,
        East,
        South="S",
        West = "W",
    }
    enum WrongHetero {
        North=4,
        West,
        East=4,
        South="S",
        West1=1,
        West2,
        //Enum member must have initializer after a string Initialization.
    }
    console.log(WrongHetero.North)//4
    console.log(WrongHetero.West)//5
    console.log(WrongHetero.East)//4
    console.log(WrongHetero.West2)//2

    enum HeterogeneousEnum {
        A = 10,
        B = "B",    // String value "B"
        C = 1,      // Explicitly assigned numeric value 1 
        D,          // Numeric value 2 (auto-increment)
        E = 20,     // auto-increment Stops
        F = "F"     // String value "F"
    }