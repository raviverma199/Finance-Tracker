import React from "react";
import { useState } from "react";
import "../components/css/login.css";
// import axios from "axios";
import apicall from "../services/apicall";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [Data, SetData] = useState({ email: "", password: "", username: "" });

  //  --------------------- function for handling value in input -----------------------------
  const handleInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    SetData((prevFormData) => {
      const newFormData = { ...prevFormData, [name]: value };
      return newFormData;
    });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    SetData({ email: "", password: "", username: "" });
  };

  //  ---------------------- function for login and signup for user ------------------------------
  const HandleAuth = async (e) => {
    e.preventDefault();
    try {
      let EndPoint = isLogin ? "/api/login" : "/api/signup";

      const requestData = isLogin
        ? { email: Data.email, password: Data.password }
        : Data;

      const response = await apicall("POST", EndPoint, requestData);

      if (response.success) {
        if (isLogin) {
          alert('login successfully')
        } else {
          toggleForm();
        }
      } else {
        alert("Issue to Create the User");
      }
    } catch (error) {
      alert('something went wrong')
    }
  };

  return (
    <>
      <div className="landing-page">
        <header className="header">
          <h1>Finance Tracker</h1>
        </header>
        <div className="form-container">
          <h2>{isLogin ? "Login to Your Account" : "Create an Account"}</h2>
          <form onSubmit={HandleAuth}>
            <input
              type="email"
              name="email"
              value={Data.email}
              onChange={handleInput}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={Data.password}
              onChange={handleInput}
              placeholder="Password"
              required
            />
            {!isLogin && (
              <input
                type="text"
                name="username"
                value={Data.username}
                onChange={handleInput}
                placeholder="Username"
                required
              />
            )}
            <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          </form>
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={toggleForm} className="toggle-form">
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
        <div className="description-container">
          <p>
            Our finance tracker app helps you manage your income and expenses,
            providing you with detailed insights into your financial health.
            Track your spending, set budgets, and visualize your financial data
            to make informed decisions.
          </p>
        </div>
      </div>
    </>
  );
}
