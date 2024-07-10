/* TASK4 
Task: Create a TypeScript program that calculates and displays grades for students based on their scores.

Requirements:
Define a Student type with properties:
name (string):  The name of the student.
scores (number[]): An array of the student's scores.*/ 

type studentType = {
    name: string, 
    scores: number[],
    attendance?: number 
}

/*Implement a function calculateGrade: 
The function should accept a Student object as its parameter.
It should calculate the total score by summing up all the scores in the scores array.*/

function calculateGrade(student: studentType){
    let totalScore = 0;
    for (let score of student.scores) {
        totalScore += score;
    }
    if(student.attendance !< 75){
        return "F"
    }


/*Compute the average score by dividing the total score by the number of scores.*/ 
let averageScore = totalScore / student.scores.length;


/*Return a grade based on the average score using the predefined criteria.*/

if (averageScore >= 90) {
    return "A"
} else if (averageScore>= 80) {
    return "B"
} else if(averageScore>= 70) {
    return "C"
}else if(averageScore>= 60) {
    return "D"
}else{
    return "F"
}
}
/*Test the function
A) Create instances of Student with different sets of scores and display the calculated grades for each student.*/

let students:studentType[]= [
    {name:"Bea", scores:[79,57,44], attendance:60 },
    {name:"Liza", scores:[69,77,86],attendance:90 },
    {name:"Erik", scores:[9,99,74], attendance:100 },
    {name:"Geri", scores:[99,99,74], attendance:90 },
]

for (let student of students) {
    let grade = calculateGrade(student);
    console.log(`${student.name} has a grade of ${grade}`);
}