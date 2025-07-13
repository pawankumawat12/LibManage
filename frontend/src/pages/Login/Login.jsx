import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import LoginHook from "../../Hooks/Auth/Login.hook";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const { authLogin, isLoading } = LoginHook();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Email || !formData.Password) {
      toast.error("Please fill all fields");
      return;
    }

    const result = await authLogin(formData);
    if (result.success) {
      toast.success(result.message);
      navigate("/Library/admin/dashboard");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <Link to="/Library" className="reglink">
              <button type="button" className="close-btn">
                &times;
              </button>
            </Link>
          </div>
          <div className="modal-body">
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

            <button className="login-btn" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>

            <div className="or">
              <span>OR</span>
              <p>
                Don't have an account?{" "}
                <Link to="/Library/register" className="reglink">
                  SignUp
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
