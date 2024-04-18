import React, { useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [temporaryTasks, setTasks] = useState(['TASKS']);
  const [selectedCategory, setSelectedCategory] =useState (['ALL'])
  function changeTasks (category) {
    if (category === "ALL")
      setTasks(TASKS)
    else  
      setTasks(TASKS.filter((task) =>task.category === category ))
  }
  
  const handleDelete = (text) => {
    const undeletedTasks = temporaryTasks.filter(taskItem => taskItem.text !==text)
    setTasks(undeletedTasks);
  }

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...temporaryTasks, newTask]);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory (category)
  }

  // useEffect (() => {
  //   console.log("Tasks updated", tasks);
  // }, [tasks]);

  // const filteredTasks =selectedCategory === "ALL"
  //   ? TASKS
  //   : TASKS.filer (task => task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter changeTasks={changeTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={temporaryTasks} handleDelete={handleDelete} selectedCategory={selectedCategory} />
    </div>
  );

}

export default App;
