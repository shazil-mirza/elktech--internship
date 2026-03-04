import { useState } from "react";
import "./styles/App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
  const trimmedText = text.trim();

  if (!trimmedText) return;

  const isDuplicate = todos.some(
    (todo) => todo.text.toLowerCase() === trimmedText.toLowerCase()
  );

  if (isDuplicate) {
    alert("Task already exists!");
    return;
  }

  const newTodo = {
    id: Date.now(),
    text: trimmedText,
    completed: false,
  };

  setTodos([...todos, newTodo]);
};

const editTodo = (id, newText) => {
  const trimmedText = newText.trim();
  if (!trimmedText) return;

  // 🔥 Prevent duplicate (case-insensitive)
  const isDuplicate = todos.some(
    (todo) =>
      todo.id !== id &&
      todo.text.toLowerCase() === trimmedText.toLowerCase()
  );

  if (isDuplicate) {
    alert("Task already exists!");
    return;
  }

  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, text: trimmedText } : todo
    )
  );
};
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <FilterButtons setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo} 
      />
    </div>
  );
}

export default App;