import "./index.css";
import Avatar from "../../assets/img/avatar.png";
import AvatarTransparan from "../../assets/img/avatar-transparan.png";

const LoginContainer = ({ children }) => {
  return (
    <div className="container">
      <img src={AvatarTransparan} className="bg-image" alt="" />
      <div className="inner-container">
        <div className="login-register">{children}</div>
        <div className="sticky-img">
          <img src={Avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
