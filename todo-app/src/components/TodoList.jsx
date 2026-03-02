import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  if (todos.length === 0) return <p>No tasks found</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;