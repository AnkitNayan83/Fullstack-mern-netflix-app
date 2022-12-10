import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();

  const handelClick = () => {
    setEmail(emailRef.current.value);
  };

  const handelInput = async (e) => {
    e.preventDefault();
    setUserName(userNameRef.current.value);
    setPassword(passwordRef.current.value);
    try {
      const res = await axios.post("auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="register-logo"
          />
          <Link to="/login">
            <button>SignIn</button>
          </Link>
        </div>
      </div>
      <div className="register-container">
        <h1>
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input ref={emailRef} type="email" placeholder="Enter your email" />
            <button onClick={handelClick}>Get Started</button>
          </div>
        ) : (
          <form className="input">
            <input
              type="text"
              placeholder="Enter your username"
              ref={userNameRef}
            />
            <input
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
            />
            <button onClick={handelInput}>Start</button>
          </form>
        )}
      </div>
    </div>
  );
};
