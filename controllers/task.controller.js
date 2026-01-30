const taskService = require('../services/task.service');

const getTasks = async (req, res) => {
    try {
        const tasks = taskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch tasks" });
    }
};

const addTask = async (req, res) => {
    try {
        const { title } = req.body;
        const newTask = taskService.createTask(title);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Failed to create task" });
    }
};

const updateTask = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title } = req.body;

        const updatedTask = taskService.updateTask(id, title);

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Failed to update task" });
    }
};

const deleteTask = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const isDeleted = taskService.deleteTask(id);

        if (!isDeleted) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete task" });
    }
};

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
};
