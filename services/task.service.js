const { tasks } = require('../data/task.data');

const getAllTasks = () => {
    return tasks;
};

const createTask = (title) => {
    const newTask = {
        id: tasks.length + 1,
        title
    };
    tasks.push(newTask);
    return newTask;
};

const updateTask = (id, title) => {
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return null;
    }
    task.title = title;
    return task;
};

const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) {
        return false;
    }
    tasks.splice(index, 1);
    return true;
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
