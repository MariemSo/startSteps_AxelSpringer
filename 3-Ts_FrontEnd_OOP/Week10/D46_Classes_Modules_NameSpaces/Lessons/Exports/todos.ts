import { Task,TaskStatus } from "./type";

const addTask = (name:string,tasks:Task[]):void=>{
    const id= Math.floor(Math.random()*1000)
    tasks.push({
        name,
        id,
        status:TaskStatus.ToDo
    })
}

const displayToDos = (tasks: Task[]):void=>{
    tasks.forEach((task)=>{
        
        // console.log(`${task.id}: ${task.name}- ${TaskStatus[task.status]}`)
        
        // Destructuring
        let {id,name,status} = task
        console.log(`${id}: ${name}- ${TaskStatus[status]}`)
    })
}

const removeTask = (name:string,tasks:Task[]):Task[] =>{
    return tasks.filter((task)=>(task.name !==name))
     
}

export {
    removeTask,
    displayToDos,
    addTask,
}