import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const Login = () => {
  const gitHubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();
  const { loginUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleLogIn = (event) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGitHubLogIn = (event) => {
    event.preventDefault();
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          toast.success("Login Successful");
        })
        .catch((error) => {
          toast.error("Failed", ":", error.message);
        });
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="container" style={{ paddingTop: "125px" }}>
      <div className="border border-danger md:w-50 m-auto text-center p-5">
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

          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <button
              className="btn mb-3 mb-sm-0"
              style={{ backgroundColor: "#F97B22", color: "white" }}
              onClick={handleGoogleLogIn}
            >
              <FaGoogle className="me-2" /> Login with Google
            </button>

            <button className="btn btn-secondary" onClick={handleGitHubLogIn}>
              <FaGithub className="me-2" /> Login with Github
            </button>
          </div>
        </form>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
