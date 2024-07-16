//#region Task ---1---
// ! Variable Declaration:
    // * Js
        let message = "hello, World!";

        let number = 12;

        let boolean = true;

        let object={
            name:"miou",
            age: 33
        }
        let array= ["string", boolean, number] //can have a mix of different types of data 

    // * Ts
        let messageTs: string = "hello, World"

        let numberTs: number = 12;

        let booleanTs: boolean = true;

        let objectTs: {name:string, age:number} ={
            name:"miou",
            age: 33
        }

        let arrayTs : string[] = ["Dylan","Ahmed","Fatima"]
        let arrayTsNum : number[] = [2,3,5]

    //In Js Declaring a variable will assign its type once the variable gets a value , the type can be modified 
    //In Ts Declaring a variable should is done with declaring a type at the same time , the type can not be modified . 
    //To modify a type in Ts we need to use any as a type .ex:
    let typeChanges:any= "String"
    typeChanges = 2;
    typeChanges = boolean;
    typeChanges = {
        name:"Miou",
        age: 23,
    }
// ! Functions:
    // * Js
        function greet(name) {
            return `hello,${name}`
        }

    // *Ts
        function greetTs(name:string):string{
            return `hello,${name}`
        }

    // In declaring a function we need to declare the type of the return as well as the parameters type
//#endregion

//#region Task ---2---
function add(a:number, b:number):number{
    return a+b
}
console.log(add(3,4))
//#endregion

//#region  ---Task 3---
    //* Create the Interface Student
    // A. Define a structure for the Student object using an interface.
    interface Student{
        id:number,
        name: string,
        age:number,
        email?: string,
    }
    // B. Create a GraduateStudent interface that extends Student and adds a property for graduationYear (number).
    interface GraduateStudent extends Student{
        graduationYear: number
    }
    // C. Create an instance of a GraduateStudent and log it to the console.
    let student1: GraduateStudent= {
        id:1,
        name:'Miou',
        age: 33,
        email:"M@m.com",
        graduationYear: 2010,
    }
    let student2: GraduateStudent= {
        id:1,
        name:'Regi',
        age: 25,
        graduationYear: 2020,
    }
    console.log(student1)
    console.log(student2)
//#endregion 

//#region Task ---4---
function gradeStudent(student:{name:string,grade?:number,subject:string}, grade:number ,subject:string){
    if (student.grade===undefined){
        console.log(`${student.name} got ${grade} in ${subject}, other grades are currently unavailable ,`)
    }else {
        console.log (`${student.name} with a grade of ${student.grade} in ${student.subject}, got ${grade} in ${subject}` )
    }
}
gradeStudent({name:"Dani",grade:15,subject:"Math"},90,"math")                         
gradeStudent({name:"Regi",subject:"Math"},100,"physics")
//#endregion 


//#region --- Bonus --- Task ---
    //  JavaScript Arrow Function
    const calculateAverageGrade = (students) => {
        const totalGrades = students.reduce((sum, student) => sum +
        student.grade, 0);
        return totalGrades / students.length;
        };
    // TypeScript Arrow Function:
    const calculateAverageGradeTs = (students:{id:number, name:string,age:number,email:string,grade:number}[]) :number=> {
        const totalGrades:number = students.reduce((sum:number, student) => sum +
        student.grade, 0);
        return totalGrades / students.length;
    };

// Create an array of student objects
    const students = [
    { id: 1, name: "John Doe", age: 20, email: "john.doe@example.com",
    grade: 85 },
    { id: 2, name: "Jane Smith", age: 22, email:
    "jane.smith@example.com", grade: 90 },
    { id: 3, name: "Alice Johnson", age: 21, email:
    "alice.johnson@example.com", grade: 88 }
    ];

    console.log(calculateAverageGradeTs(students)); // Output: 87.66666666666667
//#endregion