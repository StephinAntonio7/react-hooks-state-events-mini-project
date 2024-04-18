import React from "react";
import TaskList from "./TaskList";


function CategoryFilter({changeTasks}) {
  function setClass(event) {
    event.target.setAttribute("class", "selected");
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
        <button key={"ALL"} onClick={event => {setClass(event); changeTasks("ALL")}}> ALL </button>
        <button key={"Code"} onClick={event => {setClass(event); changeTasks("Code")}}> Code </button>
        <button key={"Food"} onClick={event => {setClass(event); changeTasks("Food")}}> Food </button>
        <button key={"Money"} onClick={event => {setClass(event); changeTasks("Music")}}> Music </button>
        <button key={"Misc"} onClick={event => {setClass(event); changeTasks("Misc")}}> Misc </button>
        </div>
  );
}

export default CategoryFilter;
