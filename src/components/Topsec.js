import React from "react";
import "../styles.css";
import user from "../media/user.png";
import bmenu from "../media/bmenu.png";

const Menu = ({}) => {
  return (
    <div className="top-sec">
      <img src={bmenu} alt="" className="top-menu" />
      <p className="welcome">Welcome back, Anna</p>
      <img src={user} alt="" className="top-menu" />
    </div>
  );
};

export default Menu;
