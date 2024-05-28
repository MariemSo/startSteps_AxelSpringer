// Extra Exercise 1: Classroom Grades
    // Create a constructor function named Student with properties name and grades.
        function Student(name,grades){
            this.name=name;
            this.grades=grades;
        }
            
    // Create an object literal named classroom with properties students (an array of student objects) and averageGrades (an empty object).
        let classroom ={
            students:[],
            averageGrades:{

            }
        }

    // Create 3 students named Alice, Bob, and Charlie with the following grades:
        // Alice: [85, 90, 78]
        let alice = new Student("Alice",[85, 90, 78])
        // Bob: [92, 88, 79]
        let bob = new Student("Bob",[92, 88, 79])
        // Charlie: [80, 85, 88]
        let charlie = new Student("Charlie",[80, 85, 88])

        //Add students to the classroom
        classroom.students.push(alice, bob, charlie);

    // Write a function named calculateAverageGrades that takes the classroom object as a parameter.
        function calculateAverageGrades(classroom){
            for (var i=0; i<classroom.students.length;i++){
                let student= classroom.students[i]
                let gradeTotal=0
                for (var j=0; j<Student.length;j++){
                    result+=grades[j]
                    gradeTotal+=(result/grades.length)
                    classroom.averageGrades[student.name]=gradeTotal             
                }
            }
        }
        console.log(calculateAverageGrades())

    // Inside the function, use nested loops to calculate the average grade for each student and store it in the averageGrades object with the student's name as the key.

    // Call the calculateAverageGrades function with the classroom object and print the classroom object to the console, including the averageGrades property.