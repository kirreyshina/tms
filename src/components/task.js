import React from "react";

const Task = ({ task, ...props}) => {
  
  const ActionButton = () => (
      <div className="action-button">{task.completed ? 
        <p onClick={props.completedTask}>
          ✔️
        </p> : 
        <p onClick={props.deleteTask}>❌</p>}
      </div>
    );

  const className = "task " + (task.done ? "task-done" : "")

  return (
      <div className={className}>
          <p>{task.task}</p>
          <ActionButton></ActionButton>
      </div>
  );
};

export default Task;
