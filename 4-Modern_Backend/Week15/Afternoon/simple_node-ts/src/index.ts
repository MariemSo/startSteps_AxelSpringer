import express , {Request, Response} from 'express'

//import from logger
import { logServerMessage } from './logger';
// Import the 'port' constant from the 'config' module. This is the port number the server will listen on
import { port } from './config';
import { students ,IStudent} from './dummyData';

const app = express()

app.use(express.json())


app.get('api/students/:id',(res:Response,req:Request)=>{
    const studentId  = parseInt(req.params.id)
    const student = students.find ((s)=> s.id === studentId)
    if (!student){
        res.status(404).json({message:'No student Found'})
    } else{
        res.json(student)
    }
})

app.post('api/students',(res:Response,req:Request)=>{
    const newStudent :IStudent = req.body;
    students.push(newStudent);
    res.status(201).json(newStudent)
})

app.put('/api/students/:id',(res:Response,req:Request)=>{
    const studentId  = parseInt(req.params.id)
    const studentIndex = students.findIndex ((s)=> s.id === studentId)

    if (studentIndex !== -1) {
        students[studentIndex].grade = req.body.grade;
        res.json(students[studentIndex])
    }else {
        res.status(404).json({message:'student not found'})
    }
})

// /api/students/:id
app.delete('/api/students/:id', (res: Response, req: Request) =>{
    const studentId = parseInt(req.params.id);
    const studentIndex = students.findIndex((s) => s.id === studentId)

    if (studentIndex !== -1){
        students.splice(studentIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({message: 'Student not found'})
    }
})



// Make the server listen on the specified port and log a message to the console when it's ready
app.listen(port, () => logServerMessage(`Server is running on port ${port}`));
