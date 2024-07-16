console.log("Day 12 Exrecices")

function double (x){
    return x*2
}

console.log(double(5))

const doubleArrow = (x)=>x*2;

console.log(doubleArrow(5))

let groupNames = ['estelle', 'bo', 'mariem', 'shenoa', 'regina'];
groupNames.sort()
console.log(groupNames)


const students = [
    { name: 'Mary', age: 18, grade: 'A' },
    { name: 'Peter', age: 19, grade: 'B' },
    { name: 'Jane', age: 17, grade: 'C' },
  ];
  students.sort((a, b) => b.age - a.age).forEach(student => {
    if (student.grade === 'A') {
      console.log('Excellent student: ' + student.name);
    }
  });
  