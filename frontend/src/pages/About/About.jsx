import { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  const galleryImages = [
    { id: 'img1', src: 'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180', alt: 'Library 1' },
    { id: 'img2', src: 'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180', alt: 'Library 2' },
    { id: 'img3', src: 'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180', alt: 'Library 3' },
    { id: 'img4', src: 'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180', alt: 'Library 4' },
    { id: 'img5', src: 'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180', alt: 'Library 5' },
    { id: 'img5', src: 'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180', alt: 'Library 5' },
    { id: 'img5', src: 'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180', alt: 'Library 5' },
    { id: 'img5', src: 'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180', alt: 'Library 5' },
    { id: 'img5', src: 'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180', alt: 'Library 5' },
    { id: 'img5', src: 'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180', alt: 'Library 5' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="about-wrapper">
      <section className="about-header">
        <h1><i className="fa-solid fa-circle-info"></i> About LibrarySys</h1>
        <p>
          LibrarySys is a smart, digital solution to streamline the way libraries operate.
        </p>
      </section>

      <section className="about-section mission">
        <h2><i className="fa-solid fa-bullseye"></i> Our Mission</h2>
        <p>
          To simplify library operations through a modern, responsive, and user-friendly system.
        </p>
      </section>

      <section className="about-section features">
        <h2><i className="fa-solid fa-star"></i> Core Features</h2>
        <ul>
          <li><i className="fa-solid fa-book"></i> Book Inventory Management</li>
          <li><i className="fa-solid fa-user-graduate"></i> Student & Member Records</li>
          <li><i className="fa-solid fa-clock-rotate-left"></i> Borrowing & Return History</li>
          <li><i className="fa-solid fa-chart-column"></i> Dashboard Analytics</li>
          <li><i className="fa-solid fa-bell"></i> Due Date Notifications</li>
        </ul>
      </section>

      <section className="about-gallery">
        <h2><i className="fa-solid fa-image"></i> Library Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              onClick={() => openModal(index)}
              className="gallery-thumb"
            />
          ))}
        </div>
      </section>

     {isOpen && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={closeModal}>&times;</button>
      <button className="nav-btn left" onClick={prevImage}>  <i className="fa-solid fa-arrow-left"></i>
</button>
      <img
        src={galleryImages[currentIndex].src}
        alt={galleryImages[currentIndex].alt}
        className="modal-image"
      />
      <button className="nav-btn right" onClick={nextImage}>  <i className="fa-solid fa-arrow-right"></i>
 </button>
    </div>
  </div>
)}

      <section className="about-footer mt-5">
        <p>Have questions or want a demo? <Link to="/Library/contact" ><span>Contact us today!</span></Link></p>
      </section>
    </div>
  );
}

export default About;
