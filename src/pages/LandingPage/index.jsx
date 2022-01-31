import React from "react";
import { VscArrowDown } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import Frame from "../../assets/img/frame.png";
import "./index.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="hello-container">
      <div className="hello-page">
        <h2 className="hello-title">Hello 👋</h2>
        <p className="hello-msg">
          I hope everyone is safe and sound. I designed different type of
          lending pages,application. it can help others to develop more ideas
          from this. I keep it simple and minimal. It can also help you find
          different options in exploring and improving your skills.
          <br />
          <br />
          I am available for new projects. I hope you show me your support 😄
          <br />
          <br />I wish you luck, Drax❤️
        </p>
        <div className="hello-msg-bttm">
          <VscArrowDown className="icon" />
          <button className="hello-btn" onClick={handleButtonClick}>
            Buy me a Coffee
          </button>
        </div>
      </div>

      <div className="frame-img">
        <img src={Frame} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
