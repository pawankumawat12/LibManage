import { Link } from "react-router-dom";
import "./Register.css";
import AuthHook from "../../Hooks/Auth/Register.hook";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/UserContext";

function Register() {
  const {setUser}  = useContext(UserContext);
  const { authRegister, isLoading } = AuthHook();
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    PhoneNumber: "",
    AlternateNumber: "",
    Address: "",
    Location: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.FullName ||
    !formData.Email ||
    !formData.Password ||
    !formData.ConfirmPassword
  ) {
    toast.error("FullName, Email and Password fields are required");
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

  console.log("Setting user context with:", formData);  // ✅ Debug

  setUser({
    FullName: formData.FullName,
    Email: formData.Email,
    PhoneNumber: formData.PhoneNumber,
    AlternateNumber: formData.AlternateNumber,
    Address: formData.Address,
    Location: formData.Location,
  });

  // ✅ If authRegister is async, use await
  await authRegister(formData);
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
            <button className="close-btn">&times;</button>
          </Link>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="FullName"
              placeholder="Full Name"
              value={formData.FullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={formData.Password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm Password"
              value={formData.ConfirmPassword}
              onChange={handleChange}
            />
            <input
              type="text"
              name="PhoneNumber"
              placeholder="Phone Number"
              value={formData.PhoneNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="AlternateNumber"
              placeholder="Alternate Number"
              value={formData.AlternateNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="Address"
              placeholder="Address"
              value={formData.Address}
              onChange={handleChange}
            />
           

            <button className="login-btn" disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </button>

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
              <button className="google-btn" type="button">
                <i className="fa-brands fa-google"></i> Google
              </button>
              <button className="login-btn" type="button">
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
