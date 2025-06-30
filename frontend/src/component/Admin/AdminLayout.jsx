import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar/AdminNavbar';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import './AdminLayout.css';
import { useState } from 'react';

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => setIsSidebarOpen(false); // optional

  return (
    <div className="admin-layout">
      <AdminNavbar toggleSidebar={toggleSidebar} />
      <div className="admin-body">
        <AdminSidebar isOpen={isSidebarOpen} onLinkClick={
        () =>{
          setIsSidebarOpen(false);
        }}/>
        <main className="admin-content" onClick={closeSidebar}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
