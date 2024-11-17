import React from "react";
import "../styles.css";

const Cards = ({ action, desc, time }) => {
  return (
    <div className="task">
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
