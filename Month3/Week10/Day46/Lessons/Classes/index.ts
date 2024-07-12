import ToDo from "./ToDo";

const codingCourseToDo = new ToDo();

codingCourseToDo.addTask("Task1")
codingCourseToDo.addTask("Task2")
codingCourseToDo.addTask("Task3")

codingCourseToDo.displayToDos();

const shopping = new ToDo();

shopping.addTask("Celeries")
shopping.addTask("Milk")
shopping.addTask("Nuts")

shopping.displayToDos();
console.log("After")
shopping.removeTask("Celeries")
shopping.displayToDos();