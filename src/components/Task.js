import React from "react";

function Task({task, handleDelete}) {

function handleClick (event) {
  event.preventDefault()
  handleDelete(task.text)
}
  return (
    <div className="task">
      <div className="label">{task.text}</div>
      <div className="text">{task.category}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
