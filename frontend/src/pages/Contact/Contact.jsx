import './Contact.css';

function Contact() {
  return (
    <div className="contact-wrapper">
      <h1><i className="fa fa-envelope"></i> Contact Us</h1>
      <p className="contact-subtext">Have a question or feedback? We'd love to hear from you.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p><i className="fa fa-phone"></i> +91-9876543210</p>
        <p><i className="fa fa-map-marker"></i> Sikar, Rajasthan, India</p>
        <p><i className="fa fa-envelope-open"></i> support@librarysys.in</p>
      </div>
    </div>
  );
}

export default Contact;