import './EditProfile.css';
function EditProfile() {
    return(
        <>
        
         <div className="EditBackdrop">
          <div className="student">
            <div className="header1">
              <h5 className="title">Edit Profile</h5>
            </div>
            <div className="body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Library Name</label>
                  <input
                    type="text"
                    className="form-field"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Id</label>
                  <input
                    type="email"
                    className="form-field"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-field"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">How many seat in library</label>
                  <input
                    type="number"
                    className="form-field"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Owner Number</label>
                  <input
                    type="text"
                    className="form-field"
                    required
                  />
                </div>


                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
            <div className="footer">
              <button
                className="btn btn-danger"
               
              >
                Close
              </button>
            </div>
          </div>
        </div>
        </>
    )
}
export default EditProfile;