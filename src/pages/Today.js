import React from "react";
import "../styleT.css";
import Phone from "../components/Phone";
import back from "../media/back.png";
import Task from "../components/Task";
import { TodayDetails } from "../mockAPI";

function Today() {
  return (
    <div className="screenW">
      <Phone />

      <div className="back-sec">
        <img src={back} alt="" className="back-btn" />
        <div className="title">
          <p>Week</p>
        </div>
      </div>

      {TodayDetails.map((item) => (
        <Task desc={item.description} />
      ))}
    </div>
  );
}

export default Today;
