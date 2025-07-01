import { useState } from 'react';
import './MyDetails.css';

export default function MyDetails() {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false); 
  };

  const handleEdit = () => {
    setShowForm(true); 
  };

  return (
    <div className="details-box">
      <h2> <i className='fa fa-book '></i> My Details</h2>

      {showForm ? (
        <form onSubmit={handleSubmit} className="details-form">
          <label>
            Email:
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" required value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" required value={formData.address} onChange={handleChange} />
          </label>
          <button type="submit" className="save-btn">Save</button>
        </form>
      ) : (
        <>
          <div className="details-row">
            <label>Email:</label>
            <span>{formData.email}</span>
          </div>
          <div className="details-row">
            <label>Phone:</label>
            <span>{formData.phone}</span>
          </div>
          <div className="details-row">
            <label>Address:</label>
            <span>{formData.address}</span>
          </div>
          <div className="details-row">
            <label>Location:</label>
            <span>{formData.location}</span>
          </div>
          <div className="edit-btn-wrapper">
            <button type="button" className="edit-btn" onClick={handleEdit}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
}
