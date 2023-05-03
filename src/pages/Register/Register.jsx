/* eslint-disable no-unused-vars */
import SocialLoginBtn from "./../SocialLoginBtn/SocialLoginBtn";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
    //   setError("password not valid need 8 char ");
    //   return;
    // }
    setError("");
    if (!/[0-9]/.test(password)) {
      setError("Password must have at least one digit.");
      return;
    }
    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div className="container" style={{ paddingTop: "125px" }}>
      <div className="border border-danger w-50 m-auto text-center p-5">
        <div className="card-header text-center">
          <h2 className="mb-0">Create an Account</h2>
        </div>
        <p className="text-danger">{error}</p>
        <form action="">
          <input
            onChange={(e) => setName(e.target.value)}
            className="p-3 m-2 form-control"
            type="text"
            placeholder="Enter Your Name"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="form-control p-3 m-2"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            onChange={(e) => setImage(e.target.value)}
            className="form-control p-3 m-2"
            type="text"
            placeholder="Profile Picture Link"
          />

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="p-3 ms-2 form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={error ? { border: "3px solid red" } : { border: "none" }}
            />
            <button
              className={`btn ${
                showPassword ? "btn-secondary" : "btn-primary"
              }`}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button onClick={handleRegistration} className="btn btn-primary my-3">
            Register
          </button>
          <p className="mb-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-decoration-none text-primary fw-bold"
            >
              Login
            </Link>
          </p>
        </form>
        <p>Or log using</p>
        <SocialLoginBtn></SocialLoginBtn>
      </div>
    </div>
  );
};

export default Register;
