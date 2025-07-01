import { useState } from "react";
import "./MyDetails.css";
import MyDetailHook from "../../../Hooks/MyDetails/MyDetails.hook";
import { toast } from "react-toastify";

export default function MyDetails() {
  

  //add details
  const { error, myDetails } = MyDetailHook();
  const [detailData, setDetailData] = useState({
    Email: "",
    PhoneNumber: "",
    Address: "",
    Seats: ""
  });
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!detailData.Email || !detailData.PhoneNumber || !detailData.Address || !detailData.Seats){
      toast.error("All field are required");
      return;
    }
    if(detailData.PhoneNumber.length <10){
      toast.error("Phone number should have 10 digit");
      return;
    }
    const response = await myDetails(detailData);
    if (response.success) {
      toast.success(response.message);
      setDetailData({
        Email: "",
        PhoneNumber: "",
        Address: "",
        Seats: "",
      });
      setShowForm(false)
    } else {
      toast.error(response.error);
    }
    
  };
  const handleChange = (e) => {
    setDetailData({ ...detailData, [e.target.name]: e.target.value });
  };

  const handleChangePhone = (e) => {
    const { name, value } = e.target;
    if (name === "PhoneNumber") {
      const onlyNums = value.replace(/[^0-9]/g, "").slice(0, 10);
      setDetailData({ ...detailData, [name]: onlyNums });
    } else {
      setDetailData({ ...detailData, [name]: value });
    }
  };
  const handleEdit = () => {
    setShowForm(true);
  };

  return (
    <div className="details-box">
      <h2>
        {" "}
        <i className="fa fa-book "></i> My Details
      </h2>

      {showForm ? (
        <form className="details-form" onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="Email"
              value={detailData.Email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="PhoneNumber"
              value={detailData.PhoneNumber}
              onChange={handleChangePhone}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="Address"
              value={detailData.Address}
              onChange={handleChange}
            />
          </label>
           <label>
            How many seats in library:
            <input
              type="number"
              name="Seats"
              value={detailData.Seats}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      ) : (
        <>
         <div className="details-row">
            <label>Email:</label>
            <span>{detailData.Email}</span>
          </div>
          <div className="details-row">
            <label>Phone:</label>
            <span>{detailData.PhoneNumber}</span>
          </div>
          <div className="details-row">
            <label>Address:</label>
            <span>{detailData.Address}</span>
          </div>
          <div className="details-row">
            <label>Seats:</label>
            <span>{detailData.Seats}</span>
          </div>

          <div className="edit-btn-wrapper">
            <button type="button" className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}
