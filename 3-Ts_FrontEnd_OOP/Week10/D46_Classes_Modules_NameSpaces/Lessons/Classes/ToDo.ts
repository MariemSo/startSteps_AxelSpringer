import { Task ,TaskStatus} from "../Exports/type";

class ToDo {
    tasks: Task[];

    constructor(){
        this.tasks=[];
    }

    addTask = (name:string):void=>{
        const id= Math.floor(Math.random()*1000)
        this.tasks.push({
            name,
            id,
            status:TaskStatus.ToDo
        })
    }
    
    displayToDos = ():void=>{
        this.tasks.forEach((task)=>{
            
            // console.log(`${task.id}: ${task.name}- ${TaskStatus[task.status]}`)
            
            // Destructuring
            let {id,name,status} = task
            console.log(`${id}: ${name}- ${TaskStatus[status]}`)
        })
    }
    
    removeTask = (name:string):void =>{
        this.tasks = this.tasks.filter((task)=>(task.name !==name))
         
    }
}

export default ToDo;