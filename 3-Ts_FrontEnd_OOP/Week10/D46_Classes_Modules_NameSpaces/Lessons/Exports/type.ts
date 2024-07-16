export enum TaskStatus {
    ToDo,
    Inprogress,
    Completed
}

export type Task = {
    id:number,
    name:string,
    status: TaskStatus
}