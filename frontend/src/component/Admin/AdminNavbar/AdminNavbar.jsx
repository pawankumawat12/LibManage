import { toast } from "react-toastify";
import "./AdminNavbar.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminNavbar({ toggleSidebar }) {
  const [showdropdown, setShowdropdown] = useState(false);
  const handleDropDown = () => {
    setShowdropdown((prev) => !prev);
  };
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowdropdown(false);
      }
    }
    if (showdropdown) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showdropdown]);
  const navigate = useNavigate();
  useEffect(() => {
    setShowdropdown(false);
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/Library/login");
    }
  }, []);
  const logout = () => {
    setShowdropdown(false);
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    toast.info("Please login to continue");
    navigate("/Library/login");
  };

  return (
    <nav className="admin-navbar">
      <button className="menu-toggle" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <h2>LibrarySys Admin</h2>
      <div className="navbar-icons">
        <div className="icon-badge">
          <i className="fa-regular fa-bell" title="Notifications"></i>
          <span className="badge">0</span>
        </div>
        <div className="icon-badge">
          <i className="fa-regular fa-envelope" title="Messages"></i>
          <span className="badge">0</span>
        </div>
        <div className="profile-dropdown">
          <i
            className="fa-regular fa-user"
            title="Profile"
            onClick={handleDropDown}
          ></i>
          {showdropdown && (
            <div className="dropdown-menu" ref={dropdownRef}>
              <button> Profile</button>
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
