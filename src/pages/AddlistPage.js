import React from "react";
import "../styleadd.css";
import Phone from "../components/Phone";
import back from "../media/back.png";
import Tasks from "../components/Task";
import { ListDetails } from "../mockList";
import AddTask from "../components/AddTask";
import ConfirmAct from "../components/ConfirmAct";

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

      <ConfirmAct />

      <div className="add-sec">
        <p className="add-list">+</p>
      </div>
    </div>
  );
}

export default List;
