import { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleComplete(todo.id)}>
            {todo.text}
          </span>

          <div style={{ display: "flex", gap: "6px" }}>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;