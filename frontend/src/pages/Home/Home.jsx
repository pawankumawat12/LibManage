import { Link } from 'react-router-dom';
import './Home.css';
function Home() {
  
  return (
    <div className="home-wrapper">
      <section className="hero">
        <h1><i className="fa-solid fa-book-open-reader"></i> Welcome to LibrarySys</h1>
        <p>Your one-stop solution to manage books, students, and records with ease.</p>
        <Link to="/Library/catalog" className="hero-btn">
          <i className="fa-solid fa-layer-group"></i> Browse Catalog
        </Link>
      </section>

      <section className="features">
        <h2><i className="fa-solid fa-screwdriver-wrench"></i> Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3><i className="fa-solid fa-book"></i> Book Management</h3>
            <p>Add, edit, and track books with real-time availability.</p>
          </div>
          <div className="feature-card">
            <h3><i className="fa-solid fa-user-graduate"></i> Student Records</h3>
            <p>Manage students, history, dues, and issue dates.</p>
          </div>
          <div className="feature-card">
            <h3><i className="fa-solid fa-chart-line"></i> Analytics</h3>
            <p>Get insights into borrowing trends, popular books, and late returns.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2><i className="fa-solid fa-right-to-bracket"></i> Ready to Get Started?</h2>
        <p>Login or contact us for more information.</p>
        <div className="cta-buttons">
          <Link to="/Library/login" className="cta-btn">
            <i className="fa-solid fa-user-lock"></i> Login
          </Link>
          <Link to="/Library/contact" className="cta-btn outline">
            <i className="fa-solid fa-envelope"></i> Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
