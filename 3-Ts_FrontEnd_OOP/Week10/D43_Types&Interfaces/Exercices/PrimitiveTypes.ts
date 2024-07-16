//! Task 1: Create Variables for Primitive Types
// Task: Below is a list of variables with creative names for primitive types. 
// Your task is to create these variables in TypeScript, come up with a logical associated type for each 
// (string, number, bigint, boolean, undefined, null, symbol) and assign a random initial value. Follow the example properties provided.
// These are the example properties:
    // Assign them a type and value
    let studentName :string = "Miou"
    
    let studentId : number = 32

    let subjects : undefined

    let major : null 

    let isStudying: boolean = true

    let grade :  bigint = 90n

    let uniqueSymbol: symbol = Symbol("dead")

//! Task 2: Define Student Type Alias
    // Task: Create a type alias Student that represents a student with the properties defined in Task 1.
    type Student = {
        studentName : string,
        studentId : number,
        subjects :string| undefined,
        major? : string | null,
        isStudying : boolean,
        grade :bigint,
        uniqueSymbol : symbol,
    }
//! Task 3: Understand Scope (Local and Global)
    // Task: Explain the difference between local scope and global scope in TypeScript (2-3 sentences) 
    // and provide a code example for a global scope variable and a local scope variable to illustrate the concepts.
    

    var globalVar :string 
    
    // console.log(globalVar) // Variable 'globalVar' is used before being assigned.
    // console.log(localVar) // Cannot find name 'localVariable'
    // console.log(localLet) //Cannot find name 'localLet
    
    globalVar = " This is a global Variable with var" 

    let globalLet : string = " This is a global variable with let "

    function useVariables():void {
        var localVar = "This is a local variable with var"
        let localLet : string = " This is a local variable with let "
        console.log(globalVar,globalLet,localLet,localVar)
    }

    useVariables()

    // variable declared in global scoope can be accessed from the local one ,and the hole code
    // variable declared in local scoope can only be accessed from the local one

//! Task 5: Calculate Grades for Students

    type StudentUpdated = {
        studentName : string,
        studentId : number,
        subjects :string| undefined,
        major? : string | null,
        isStudying : boolean,
        grade :bigint,
        uniqueSymbol : symbol,
        allScores : number[],
    }

    function calculateGrade (student:StudentUpdated) : string{
        let totalScore:number = student.allScores.reduce((a,b)=>a+b,0)
        let averageScore:number = totalScore / student.allScores.length

        if (averageScore >= 90) return "A";
        if (averageScore >= 80) return "B";
        if (averageScore >= 70) return "C";
        if (averageScore >= 60) return "D";
        return "F";
    }

    let miou : StudentUpdated = {
        studentName : "Miou",
        studentId : 32,
        subjects :"",
        isStudying : true,
        grade :90n,
        uniqueSymbol : Symbol("dead"),
        allScores : [32,2,2,10],
    }

console.log(calculateGrade(miou))