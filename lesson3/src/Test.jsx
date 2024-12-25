import React, { useState } from "react";

// Task Component: Displays individual task
const Task = ({ task, toggleComplete }) => {
  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        color: task.completed ? "green" : "black",
      }}
    >
      {task.text}
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </li>
  );
};

// Main App Component
const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent empty tasks
    const newTaskObj = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask(""); // Clear input field
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* Input field to add a new task */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Render task list */}
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
