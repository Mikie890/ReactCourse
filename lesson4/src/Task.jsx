import React from "react";

export const Task = (props) => {
  return (
    <div
      style={{
        color: "black",
        backgroundColor: props.completed ? "#d4edda" : "#f8d7da",
        padding: "10px",
        margin: "5px 0",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
      }}
    >
      <h1
        style={{
          textDecoration: props.completed ? "line-through" : "none",
          fontSize: "18px",
        }}
      >
        {props.taskName}
      </h1>
      <div>
        <button
          onClick={() => props.completeTask(props.id)}
          style={{
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "5px",
          }}
        >
          {props.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => props.deleteTask(props.id)}
          style={{
            padding: "5px 10px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
