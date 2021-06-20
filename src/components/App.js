import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleDelete(deletedTaskText) {
    const updatedTasks = tasks.filter(task => task.text !== deletedTaskText);
    setTasks(updatedTasks);
  }

  const visibleTasks = tasks.filter((task) => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        category={category}
        setCategory={setCategory}
      />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm 
          categories={CATEGORIES.filter((category) => category !== "All")}
          handleAddTask={handleAddTask}
        />
      <TaskList 
        tasks={visibleTasks} 
        handleDelete={handleDelete}
      />
      </div>
    </div>
  );
}

export default App;
