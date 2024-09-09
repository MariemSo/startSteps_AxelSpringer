import dotenv from 'dotenv';
import express from 'express';
// create Server
const app = express();
dotenv.config();
const port = process.env.PORT;
console.log('PORT:', process.env.PORT);
let users = [
    { id: 1, name: 'john doe' },
    { id: 2, name: 'Jane Smith' }
];
//Middleware to parse JSON requests
app.use(express.json());
//Get users
app.get('/users', (req, res) => {
    res.json(users);
});
// Get One User
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        res.status(404).json({ message: 'User not found ' });
    }
    res.status(200).json(user);
});
//post (add/create a new resource)
app.post('/users', (req, res) => {
    const id = Math.floor(Math.random() * 10000);
    const user = Object.assign(Object.assign({}, req.body), { id });
    users.push(user);
    res.status(201).json(user);
});
//Update
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = Object.assign(Object.assign({}, req.body), { id });
    users = users.map((user) => {
        if (user.id === id) {
            return updatedUser;
        }
        return user;
    });
    res.json(updatedUser);
});
//Delete 
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    //const {id} = req.params; 
    users = users.filter((user) => user.id !== id);
    res.json({ message: 'user deleted' });
});
//start server
app.listen(port, () => {
    console.log(`the server is running at http://localhost:${port}`);
});