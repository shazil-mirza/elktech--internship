const express = require('express');
const app=express();
app.use(express.json());
let tasks=[
    {id:1, title:"Task One"},
    {id:2, title:"Task Two"},
    {id:3, title:"Task Three"}
];
app.get('/tasks',(req,res)=>{
    res.json(tasks);
});
app.post('/tasks',(req,res)=>{
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const newTitle = req.body.title;
    let taskFound = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].title = newTitle;
            taskFound = true;
            res.json(tasks[i]);
            break;
        }
    }
    if (!taskFound) {
        res.status(404).json({ message: "Task not found" });
    }
});
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id);

    res.json({ message: "Task deleted" });
});
app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});