import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Footer from "./pages/Footer/Footer";
import Catalog from "./pages/Catlog/Catalog";
import AdminLayout from "./component/Admin/AdminLayout";
import Dashboard from "./component/Admin/Dashboard/Dashboard";
import Student from "./component/Admin/Student/Student";
import MyDetails from "./component/Admin/MyDetails/MyDetails";
import Books from "./component/Admin/Books/Books";
import Gallary from "./component/Admin/Gallary/Gallary";
function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/Library/admin");

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/Library" element={<Home />} />
        <Route path="/Library/about" element={<About />} />
        <Route path="/Library/blog" element={<Blog />} />
        <Route path="/Library/contact" element={<Contact />} />
        <Route path="/Library/register" element={<Register />} />
        <Route path="/Library/login" element={<Login />} />
        <Route path="/Library/catalog" element={<Catalog />} />
        <Route path="/Library/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Student />} />
          <Route path="details" element={<MyDetails />} />
          <Route path="books" element={<Books />} />
          <Route path="gallary" element={<Gallary />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
