import "./Gallary.css";
import { useState } from "react";
export default function Gallary() {
  const [showModal, setShowModal] = useState(false);
  const [logoModal, setLogoModal] = useState(false);
  return (
    <div className="gallery-container">
      <h2>
        <i className="fa fa-image"></i> Library Gallery
      </h2>

      <div className="add-btn-wrapper">
        <button className="add-btn" onClick={() => setShowModal(true)}>
          <i className="fa fa-plus-circle"></i> Add Image
        </button>
         <button className="logo-btn" onClick={() => setLogoModal(true)}>
          <i className="fa fa-plus-circle"></i> Add Logo
        </button>
      </div>

      <div className="gallery-grid">
        {[1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15].map((num) => (
          <div className="gallery-item" key={num}>
            <img
              src={'https://tse4.mm.bing.net/th/id/OIP.YO53P73mGBFL1JTPEHH_EwHaE8?pid=Api&P=0&h=180'}
              alt="Library Image"
            />
            <button className="remove-btn">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
{
    showModal && (

      <div className="modal-overlay">
        <div className="modal-box">
          <h3>
            <i className="fa fa-upload"></i> Upload Library Image
          </h3>
          <form>
            <label className="file-label">
              <i className="fa fa-file-image"></i> Choose Image
              <input type="file" accept="image/*" />
            </label>
            <div className="modal-actions">
              <button type="button" className="save-btn">
                Upload
              </button>
              <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  {
    logoModal && (
      <div className="modal-overlay">
        <div className="modal-box">
          <h3>
            <i className="fa fa-upload"></i> Upload Library Logo
          </h3>
          <form>
            <label className="file-label">
              <i className="fa fa-file-image"></i> Choose Logo
              <input type="file" accept="image/*" />
            </label>
            <div className="modal-actions">
              <button type="button" className="save-btn">
                Upload  
              </button>
              <button type="button" className="cancel-btn" onClick={() => setLogoModal(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
    </div>
  );
}
