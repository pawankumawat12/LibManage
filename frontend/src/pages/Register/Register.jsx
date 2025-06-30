import { Link } from "react-router-dom";
import "./Register.css";
import AuthHook from "../../Hooks/Auth/Auth.hook";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  const { authRegister, isLoading, error } = AuthHook();

  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.FullName || !formData.Email || !formData.Password || !formData.ConfirmPassword) {
      toast.error("All fields are required");
      return;
    }
    if (formData.Password !== formData.ConfirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (formData.Password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
      
    authRegister(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Register</h5>
          <Link to="/Library" className="reglink">
            {" "}
            <button className="close-btn">&times;</button>
          </Link>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="email"
              name="FullName"
              placeholder="Full Name"
              value={formData.FullName}
              onChange={handleChange}
            />
            <input
              type="email"
              className="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="password"
              name="Password"
              placeholder="Password"
              value={formData.Password}
              onChange={handleChange}
            />
            <input
              type="password"
              className="password"
              name="ConfirmPassword"
              placeholder="Confirm Password"
              value={formData.ConfirmPassword}
              onChange={handleChange}
            />
            <button className="login-btn">Register</button>

            <div className="or">
              <span>OR</span>
              <p>
                Already have an account?{" "}
                <Link to="/Library/login" className="reglink">
                  Login
                </Link>
              </p>
            </div>

            <div className="social-login">
              <button className="google-btn">
                <i className="fa-brands fa-google"></i> Google
              </button>
              <button className="login-btn">
                <i className="fa-brands fa-facebook"></i> Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
