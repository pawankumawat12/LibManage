import { Link } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar({ isOpen, onLinkClick }) {
  return (
    <aside className={`admin-sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <Link to="/Library/admin/dashboard" onClick={onLinkClick}><li><i className="fa-solid fa-chart-line"></i> <span>Dashboard</span></li></Link>
        <Link to="/Library/admin/students" onClick={onLinkClick}><li><i className="fa-solid fa-user-graduate"></i> <span>Students</span></li></Link>
        <Link to="/Library/admin/books" onClick={onLinkClick}><li><i className="fa-solid fa-book-medical"></i> <span>Add Book</span></li></Link>
        <Link to="/Library/admin/details" onClick={onLinkClick}><li><i className="fa-solid fa-file-lines"></i> <span>My Details</span></li></Link>
        <Link to="/Library/admin/gallary" onClick={onLinkClick}><li><i className="fa-solid fa-image"></i> <span>Images Library</span></li></Link>
        <Link to="/Library" onClick={onLinkClick}><li><i className="fa-solid fa-right-from-bracket"></i> Logout</li></Link>
      </ul>
    </aside>
  );
}

export default AdminSidebar;
