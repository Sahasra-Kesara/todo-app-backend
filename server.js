const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const { todo } = require('node:test');
require('dotenv').config()

const port = 3001;
app.use(express.json());
app.use(cors());

const connectionString = process.env.MONGO_URI

mongoose.connect(connectionString).then(()=> console.log('Connect to the DB..')).catch((err)=>console.log(err)).finally(()=>{
    console.log('Server is running on port 3001')
})

//routes 
app.get('/to-do-app', async(req,res)=> {
    const todos = await Todo.find({});
    res.json(todos)
})

app.post('/to-do-app/new', async(req,res)=> {
    const task = await Todo.create(req.body)
    res.status(201).json({task})
})

app.delete('/to-do-app/delete/:id', async(req,res)=>{
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(result)
})

app.post('/to-do-app/edit/:id', async(req,res)=>{
    const updatedTask = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
})

app.get('/to-do-app/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        console.error('Error fetching todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, console.log(`server is running on port ${port}`))
