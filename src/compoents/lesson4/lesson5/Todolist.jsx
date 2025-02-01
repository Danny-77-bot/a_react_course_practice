import React, { useState } from "react";
import "../../../styles/todo.css";

const initialTasks = [
  { id: Math.random().toString(36).substr(2, 9), title: "Buy groceries", description: "Milk, Bread, Eggs" },
  { id: Math.random().toString(36).substr(2, 9), title: "Workout", description: "Go for a 30-minute run" },
  { id: Math.random().toString(36).substr(2, 9), title: "Read a book", description: "Finish chapter 5" }
];

const TodoList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTask, setEditingTask] = useState({ id: null, title: "", description: "" });

  const addTask = () => {
    if (title.trim() && description.trim()) {
      const newTask = { id: Math.random().toString(36).substr(2, 9), title, description };
      setTasks([...tasks, newTask]);
      setTitle("");
      setDescription("");
    }
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const startEditing = (task) => {
    setEditingIndex(task.id);
    setEditingTask(task);
  };

  const saveEdit = () => {
    const updatedTasks = tasks.map(task => 
      task.id === editingTask.id ? editingTask : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingTask({ id: null, title: "", description: "" });
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {editingIndex === task.id ? (
              <>
                <input
                  type="text"
                  value={editingTask.title}
                  onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                />
                <input
                  type="text"
                  value={editingTask.description}
                  onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <strong>{task.title}</strong>: {task.description}
                <button onClick={() => startEditing(task)}>Edit</button>
                <button onClick={() => removeTask(task.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;