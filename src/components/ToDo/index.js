import React, { useState } from "react";
import "./ToDo.css";
import { FaTrash, FaPlusCircle } from "react-icons/fa";

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    value && addTask(value);
    setValue("");
  };

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Action steps "
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

const ToDo = () => {
  const [tasks, setTasks] = useState([
    {
      text: "Go grocery shopping on Saturday or Sunday",
      isCompleted: false,
    },
    {
      text: "Meal prep after soccer practice",
      isCompleted: false,
    },
    {
      text: "Buy meal prep containers",
      isCompleted: false,
    },
  ]);

  const addTask = (text) => setTasks([...tasks, { text }]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="toDoList">
      {tasks.map((task, index) => (
        <div className="todo">
          <span
            onClick={() => toggleTask(index)}
            className={
              task.isCompleted ? "todo-text todo-completed" : "todo-text"
            }
          >
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}>
            <FaTrash />
          </button>
        </div>
      ))}
      <AddTaskForm addTask={addTask} />
    </div>
  );
};

export default ToDo;
