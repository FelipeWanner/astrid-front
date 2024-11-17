import React from "react";
import "../styleT.css";
import Phone from "../components/Phone";
import back from "../media/back.png";
import Task from "../components/Task";
import { ListDetails } from "../mockList";

function List() {
  return (
    <div className="screenW">
      <Phone />

      <div className="back-sec">
        <img src={back} alt="" className="back-btn" />
        <div className="title-list">
          <p>To do list</p>
        </div>
      </div>

      {ListDetails.map((item) => (
        <Task desc={item.description} />
      ))}

      <div className="add-sec">
        <p className="add-list">+</p>
      </div>
    </div>
  );
}

export default List;
