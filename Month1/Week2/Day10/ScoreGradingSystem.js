// ● Write a JavaScript program that prompts the user to enter their exam score
// (out of 100).

let score = 72

    if (score >=90){
        console.log("A")
    }
    else if (score >= 80 && score<90){
        console.log("B")
    }
    else if (score >= 70 && score<80){
        console.log("C")
    }
    else if (score >=60){
        console.log("D")
    }
    else{
        console.log("F");
    }

//Ternary Operator - Smart Way 
let studentGrade=90;

let Score= studentGrade>=90? "A":
           studentGrade>=80?"B":
           studentGrade>=70?"C":
           studentGrade>=60?"D":"F"

console.log(Score)
