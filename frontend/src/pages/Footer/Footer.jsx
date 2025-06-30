import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
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
          <p>Email: support @librarysys.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Library Street, Jaipur, Rajasthan</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} LibrarySys. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
