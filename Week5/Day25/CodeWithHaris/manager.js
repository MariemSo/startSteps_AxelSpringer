
const students=["Alice","Bob", "Charlie","David","Emily"];

const studentList = document.getElementById("student-list");

function updateStudentList() {
    studentList.innerHTML=""
    students.forEach(students =>{
        const listItem=document.createElement('li');
        listItem.textContent= students;
        studentList.appendChild(listItem);
    })
    document.getElementById('student-name').value=""
}
updateStudentList();

const addButton = document.getElementById('add-button');
addButton.addEventListener("click",()=>{
   const studentName= document.getElementById('student-name').value;
    students.push(studentName);
    updateStudentList();
})  

const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener("click",()=>{
    students.pop();
    updateStudentList();
})  

const deleteStudent = document.getElementById('delete-student');
deleteStudent.addEventListener("click",()=>{
   const studentName= document.getElementById('student-name').value.trim().toLowerCase();
   let found = false;
   for (var i=0;i<students.length;i++){
       if (students[i].toLowerCase()===studentName){
           students.splice(i,1)
            updateStudentList();
            found=true;
            break;
        }
    }
    if(!found){
        const error = document.getElementById("error")
        error.innerHTML="There is no Matching Student Name"
    }
})  
