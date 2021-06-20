import React from "react";

function Task({ text, category, handleDelete }) {

  function handleClick() {
    handleDelete(text);
  }

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
