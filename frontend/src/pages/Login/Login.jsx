import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Login</h5>
         <Link to="/Library" className='reglink'> <button className="close-btn" >&times;</button></Link>
        </div>
        <div className="modal-body">
          <input type="email" className="email" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <button className="login-btn">Login</button>

          <div className="or">
            <span>OR</span>
            <p>Don't have an account?<Link to='/Library/register' className='reglink'>SignUp</Link> </p>
          </div>

          <div className="social-login">
            <button className="google-btn">
              <i className="fa-brands fa-google"></i> Google
            </button>
            <button className="login-btn">
              <i className="fa-brands fa-facebook"></i> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
