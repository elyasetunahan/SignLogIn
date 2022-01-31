import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "./index.css";

const TextInput = ({ title, type, ...props }) => {
  const [showPassword, setshowPassword] = useState(false);

  const handleEyeClick = () => {
    setshowPassword(!showPassword);
  };

  return (
    <div className="input">
      <span className="input-title"> {title} </span>
      <input
        className="input-area"
        type={showPassword ? "text" : type}
        {...props}
      />
      {type === "password" && (
        <div className="bs-eye" onClick={handleEyeClick}>
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </div>
      )}
    </div>
  );
};

export default TextInput;
