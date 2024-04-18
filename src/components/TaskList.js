import React from "react";
import Task from './Task';
import { TASKS } from "../data";
import { useState } from "react";

const TaskList = ({ tasks, selectedCategory, handleDelete }) => {
  const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter(task => task.category === selectedCategory);
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.id} task={task} handleDelete={handleDelete}/>
      ))}

    </div>
  );
}

export default TaskList;
