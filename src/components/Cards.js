import React from "react";
import "../styles.css";

const Cards = ({ id, action, desc, time, onDelete }) => {
  return (
    <div className="task">
      <button className="delete-button" onClick={() => onDelete(id)}>
        &times;
      </button>

      <div className="task-info">
        <p className="activity">{action}</p>
        <p className="act-text">{desc}</p>
      </div>

      <div className="act-bottom">
        <p className="time">{time}</p>
        <button className="option">Yes</button>
        <button className="option">No</button>
      </div>
    </div>
  );
};

export default Cards;
