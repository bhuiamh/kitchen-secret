import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { registerUser, handleUpdateProfile, user, auth } =
    useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();

    setError("");
    if (!/^(?=.*[0-9])/.test(password)) {
      setError("⚠️ Password must have at least one number");
      toast.error(error);
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      setError("⚠️ Password must have at least one uppercase letter");
      toast.error(error);
      return;
    } else if (!/^(?=.*[@$!%*#?&])/.test(password)) {
      setError("⚠️ Password must have at least one special character.");
      toast.error(error);
      return;
    } else if (!/^(?=.{8,})/.test(password)) {
      setError("⚠️ Password must be at least 8 characters long.");
      toast.error(error);
      return;
    }

    if (name && email && password) {
      try {
        await registerUser(email, password);
        await handleUpdateProfile(name, image);
        toast.success("Registration and profile update successful");
      } catch (error) {
        toast.error("Registration and profile update error:", error.message);
      }
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
      <div className="border border-danger w-50 m-auto text-center p-5">
        <div className="card-header text-center">
          <h2 className="mb-0">Create an Account</h2>
        </div>
        <p className="text-danger">{error}</p>
        <form action="" onSubmit={handleRegistration}>
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
            required
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

          <button className="btn btn-primary my-3">Register</button>
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
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Register;
