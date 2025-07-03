import { Link } from 'react-router-dom';
import './ShowProfile.css';

function ShowShow() {
    return (
        <>
            <div className="ShowBackdrop">
                <div className="ShowContainer">
                    <div className="ShowHeader">
                        <h5 className="ShowTitle">Show Details</h5>
                    </div>
                    <div className="ShowBody">
                        <div className="ShowItem">
                            <label>Library Name:</label>
                            <p>Star Library</p>
                        </div>
                        <div className="ShowItem">
                            <label>Email ID:</label>
                            <p>star@library.com</p>
                        </div>
                        <div className="ShowItem">
                            <label>Address:</label>
                            <p>123 Main Street, Jaipur</p>
                        </div>
                        <div className="ShowItem">
                            <label>Seats in Library:</label>
                            <p>50</p>
                        </div>
                        <div className="ShowItem">
                            <label>Owner Number:</label>
                            <p>9876543210</p>
                        </div>
                    </div>
                    <div className="ShowFooter">
                     <Link to="/Library/admin/editProfile">   <button className="closeButton">Edit Profile</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowShow;
