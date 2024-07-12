import { Task } from "./type";
import { addTask, displayToDos, removeTask } from "./todos";

let tasks: Task[] = [];
addTask ('task1',tasks)
addTask ("task2",tasks)
addTask ("task3",tasks)
addTask ("task4",tasks)
addTask ("task5",tasks)
addTask ("task6",tasks)

tasks= removeTask("task1",tasks)

displayToDos(tasks)