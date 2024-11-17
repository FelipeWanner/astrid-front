import React from "react";
import "../styleh.css";
import Phone from "../components/Phone";
import Logo from "../media/logob.png";
import intro from "../media/intro.png";

function Home() {
  return (
    <div className="screen">
      <Phone />

      <div className="images">
        <img src={Logo} alt="" className="logo" />
        <img src={intro} alt="" className="intro" />
      </div>

      <div>
        <p className="title">Let's plan your week</p>
      </div>

      <div>
        <p className="start">Get started</p>
      </div>

      <div className="sign-sec">
        <p className="dnt">Don't have an account? </p>
        <p className="sign"> Sign up</p>
      </div>
    </div>
  );
}

export default Home;
