import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AdminSidebar.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function AdminSidebar({ isOpen, onLinkClick }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() =>{
    const token = localStorage.getItem("token");
    if(!token){
      setIsLoggedIn(false);
      navigate("/Library/login");
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    toast.info("Please login to continue");
    setIsLoggedIn(false);
    navigate("/Library/login");
  };
  
  return (
    <aside className={`admin-sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <Link to="/Library/admin/dashboard" onClick={onLinkClick}>
          <li>
            <i className="fa-solid fa-chart-line"></i> <span>Dashboard</span>
          </li>
        </Link>
        <Link to="/Library/admin/students" onClick={onLinkClick}>
          <li>
            <i className="fa-solid fa-user-graduate"></i> <span>Students</span>
          </li>
        </Link>
        <Link to="/Library/admin/books" onClick={onLinkClick}>
          <li>
            <i className="fa-solid fa-book-medical"></i> <span>Add Book</span>
          </li>
        </Link>
        <Link to="/Library/admin/details" onClick={onLinkClick}>
          <li>
            <i className="fa-solid fa-file-lines"></i> <span>My Details</span>
          </li>
        </Link>
        <Link to="/Library/admin/gallary" onClick={onLinkClick}>
          <li>
            <i className="fa-solid fa-image"></i> <span>Images Library</span>
          </li>
        </Link>
        { isLoggedIn ? (
        <Link onClick={logout}>
          <li>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </li>
        </Link>):(
        <Link to="/Library/login" onClick={onLinkClick}>
          <li>
              <i className="fa-solid fa-right-to-bracket"></i> Login
          </li>
        </Link>)}

      </ul>
    </aside>
  );
}

export default AdminSidebar;
