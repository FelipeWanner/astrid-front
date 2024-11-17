import React from "react";
import "../styleSign.css";
import Phone from "../components/Phone";
import back from "../media/back.png";

function Sign() {
  return (
    <div className="screen">
      <Phone />

      <div className="back-sec">
        <img src={back} alt="" className="back-btn" />
        <p className="sign-title">Create an account</p>
      </div>

      <div>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="DD/MMM/YYYY" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </form>
      </div>

      <div className="sign-sec">
        <p className="sign-btn">SIGN UP</p>
      </div>
    </div>
  );
}

export default Sign;
