import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import LoginContainer from "../../components/LoginContainer";
import { Link } from "react-router-dom";
import { emailLogin } from "../../utils";
import "./index.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const user = await emailLogin.registerWithEmail({
      email,
      password,
      username,
    });
    if (user) {
      navigate("/home");
    }
  };

  return (
    <LoginContainer>
      <span className="your-logo">Your logo</span>
      <h2 className="title">Register</h2>
      <Input
        type="text"
        placeholder="John Wick"
        title="Username"
        value={username}
        onInput={(event) => setUsername(event.target.value)}
      />
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
      <Button type="text" onClick={handleRegister}>
        Register
      </Button>
      <span className="have-acc">
        Already an account? <Link to="/login">Sign in </Link>
      </span>
    </LoginContainer>
  );
};

export default RegisterPage;
