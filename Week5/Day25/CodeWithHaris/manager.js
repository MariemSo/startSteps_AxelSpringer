
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