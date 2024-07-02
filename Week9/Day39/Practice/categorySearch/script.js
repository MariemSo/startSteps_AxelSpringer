let students = [
    { name: 'Alice', category: 'engineering' },
    { name: 'Bob', category: 'medicine' },
    { name: 'Charlie', category: 'psychology' },
    { name: 'David', category: 'engineering' },
    { name: 'Eve', category: 'psychology' },
    { name: 'Frank', category: 'medicine' },
    { name: 'Grace', category: 'engineering' },
    { name: 'Henry', category: 'psychology' },
    { name: 'Ivy', category: 'engineering' },
    { name: 'Jack', category: 'medicine' },
    { name: 'Karen', category: 'psychology' },
    { name: 'Leo', category: 'engineering' },
    { name: 'Mia', category: 'psychology' },
    { name: 'Noah', category: 'engineering' },
    { name: 'Olivia', category: 'medicine' },
    { name: 'Peter', category: 'psychology' },
    { name: 'Quinn', category: 'engineering' },
    { name: 'Rachel', category: 'medicine' },
    { name: 'Sam', category: 'psychology' },
    { name: 'Tom', category: 'engineering' }
    ];
    //method One
    function filterStudents(){
        const category = document.getElementById("categories").value;
        const searchOutput = document.getElementById("searchOutput");
        const legend = document.getElementById('categoryLegend');
        legend.textContent = `Category: ${category}`;
        searchOutput.innerHTML = '';

        let found = false
        for ( let i = 0; i < students.length; i++){
            if(category===students[i].category){
                console.log(students[i].name)
                let li = document.createElement('li')
                li.textContent=students[i].name
                searchOutput.appendChild(li);
                found = true;
            }
        }
        if (!found) {
            let li = document.createElement('li');
            li.textContent = 'No students found in this category.';
            searchOutput.appendChild(li);
        }
    }
    //method Two
    function filterStudentsT(){
        const category = document.getElementById("categories").value;
        const searchOutput = document.getElementById("searchOutput");
        const legend = document.getElementById('categoryLegend');
        searchOutput.innerHTML = '';

        legend.textContent = `Category: ${category}`;
        students.filter(student => student.category === category).forEach(student => {
            let li = document.createElement('li')
            li.textContent=student.name
            searchOutput.appendChild(li);
        });
    }