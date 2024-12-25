import React from 'react';

export const Transaction = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.type === "income" ? "lightgreen" : "lightcoral",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{props.description}</h3>
      <p>
        ${props.amount.toFixed(2)} ({props.type})
      </p>
      <button onClick={() => props.deleteTransaction(props.id)}>Delete</button>
    </div>
  );
};
