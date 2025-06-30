import './AdminNavbar.css';

function AdminNavbar({ toggleSidebar }) {
  return (
    <nav className="admin-navbar">
      <h2>LibrarySys Admin</h2>
      <button className="menu-toggle" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
}

export default AdminNavbar;
