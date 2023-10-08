import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signIn, createAccount } from "./../firebase/firebase.js";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInT = (e) => { e.preventDefault(); signIn(email, password); history("/") };
  const regester = (e) => { e.preventDefault(); createAccount(email, password);history("/") };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signInT}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signng-in you agree to Amazon's FAKe Clone Condition of use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Intrest-BAsed Ads Notice
        </p>
        <button
          type="submit"
          onClick={regester}
          className="login__regesterButton"
        >
          Create an Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
