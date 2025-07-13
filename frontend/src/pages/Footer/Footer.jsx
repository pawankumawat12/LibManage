import { Link } from 'react-router-dom';
import './Footer.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

function Footer() {
  const {user} = useContext(UserContext);
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-logo">LibrarySys</h2>
          <p>
            LibrarySys is a modern platform to manage books, students, and records efficiently. 
            Accessible anytime, anywhere.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/Library">Home</Link></li>
            <li><Link to="/Library/catalog">Book Catalog</Link></li>
            <li><Link to="/Library/about">About Us</Link></li>
            <li><Link to="/Library/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: {user.Email}</p>
          <p>Phone: {user.PhoneNumber}</p>
          <p>Address: { user.Address}</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} LibrarySys. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
