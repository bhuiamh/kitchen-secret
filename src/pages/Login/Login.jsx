/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div className="container" style={{ paddingTop: "125px" }}>
      <div className="border border-danger w-50 m-auto text-center p-5">
        <form action="">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-3"
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mb-3"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleLogin}
            className="btn btn-info w-100 mb-3 fw-bold"
          >
            Login
          </button>
          <p className="mb-3">
            Are you new?{" "}
            <Link
              to="/register"
              className="text-decoration-none text-primary fw-bold"
            >
              Register
            </Link>
          </p>

          <hr />

          <SocialLoginBtn />
        </form>
      </div>
    </div>
  );
};

export default Login;
