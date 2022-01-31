import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import LoginContainer from "../../components/LoginContainer";
import { FcGoogle } from "react-icons/fc";
import { RiGithubFill, RiFacebookCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./index.css";
import {
  emailLogin,
  googleLogin,
  githubLogin,
  facebookLogin,
} from "../../utils";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handeGoogleLogin = async () => {
    const user = await googleLogin();
    if (user) {
      navigate("/home");
    }
  };

  const handleFacebookLogin = async () => {
    const user = await facebookLogin();
    if (user) {
      navigate("/home");
    }
  };

  const handleGithubLogin = async () => {
    const user = await githubLogin();
    if (user) {
      navigate("/home");
    }
  };

  const handleEmailLogin = async () => {
    const user = await emailLogin.loginWithEmail({ email, password });
    if (user) {
      navigate("/home");
    }
  };

  return (
    <LoginContainer>
      <span className="your-logo">Your logo</span>
      <h2 className="title">Login</h2>

      <Input
        type="text"
        placeholder="username@gmail.com"
        title="Email"
        value={email}
        onInput={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        title="Password"
        value={password}
        onInput={(event) => setPassword(event.target.value)}
      />

      <a href="_" className="forgot-pw">
        Forgot Password?
      </a>
      <Button type="text" onClick={handleEmailLogin}>
        Sign in
      </Button>

      <div className="sign-methods">
        <span>or continue with</span>
        <div className="methods">
          <Button type="icon" onClick={handeGoogleLogin}>
            <FcGoogle />
          </Button>
          <Button type="icon" onClick={handleGithubLogin}>
            <RiGithubFill />
          </Button>
          <Button className=" fb" type="icon" onClick={handleFacebookLogin}>
            <RiFacebookCircleFill />
          </Button>
        </div>
        <span>
          Don't have an account yet?{" "}
          <Link to="/register">Register for free</Link>
        </span>
      </div>
    </LoginContainer>
  );
};

export default LoginPage;
