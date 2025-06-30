import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../../pages/Login/Login";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light  shadow-sm p-3">
        <Link className="navbar-brand" to="/Library">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Library">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Library/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Library/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Library/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Library/Login">
                <button
                  className="btnLogin"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalCenter"
                  type="button"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
