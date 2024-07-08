//! Task 1: Define a Function Scope:
    
    var globalVar="I am a global Variable with var";
    let globalLet="I am a global Variable with let"

    function localScope() {

            var localVar="I am a local Variable with var";
            let localLet="I am a local Variable with let";

        console.log(globalVar+" ,i Am printed from inside the function")
        //Output: "I am a global Variable with var ,i Am printed from inside the function"
        console.log(globalLet+" ,i Am printed from inside the function")
        //Output: "I am a global Variable with let ,i Am printed from inside the function"
        console.log(localVar+" ,i Am printed from inside the function")
        //Output: "I am a local Variable with var ,i Am printed from inside the function"
        console.log(localLet+" ,i Am printed from inside the function")
        //Output:"I am a local Variable with let ,i Am printed from inside the function"
        
    }
    //Call the function
    localScope()
    //Print
    console.log(globalVar+" ,i Am printed from outside the function")
    Output: "I am a global Variable with var ,i Am printed from outside the function"

    console.log(globalLet+" ,i Am printed from outside the function")
    Output: "I am a global Variable with let ,i Am printed from outside the function"

    console.log(localVar+" ,i Am printed from outside the function")
    //Output localVar is not defined

    console.log(localLet+" ,i Am printed from outside the function")
    //Output localLet is not defined

    //=> Local Variable are only accessed within the function block
    //=> global Variable are accessed from within a function block