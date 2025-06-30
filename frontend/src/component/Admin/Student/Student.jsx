import { useState } from "react";
import "./Student.css";

export default function Student() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showaddForm, setShowaddForm] = useState(false);    
  const students = [
    {
      name: "Ankit Sharma",
      email: "ankit@example.com",
      phone: "9876543210",
      fees: "₹15,000",
      status: "Active",
    },
    {
      name: "Priya Meena",
      email: "priya@example.com",
      phone: "9123456780",
      fees: "₹12,500",
      status: "Pending",
    },
    {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    },
    {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    }, {
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9000000000",
      fees: "₹0",
      status: "Inactive",
    },
  ];

  const handleView = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  return (
    <div className=" student-table-container">
        <div className="d-flex justify-content-between align-items-center mb-3">
      <h3 className="mb-4"><i className="fa fa-book" ></i> Student List</h3>
    <button className="btn add-btn  mb-3" onClick={() => setShowaddForm(true)}>
            <i className="fa fa-plus-circle"></i> Add Students
    </button>
        </div>
      <div className="">
        <table className="table table-bordered table-hover text-center custom-student-table">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Fees</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.name}</td>
                <td>{stu.fees}</td>
                <td>{stu.email}</td>
                <td>{stu.phone}</td>
                <td>
                  <span
                    className={`badge rounded-pill bg-${
                      stu.status === "Active"
                        ? "success"
                        : stu.status === "Pending"
                        ? "warning text-dark"
                        : "secondary"
                    }`}
                  >
                    {stu.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-info me-1"
                    title="View"
                    onClick={() => handleView(stu)}
                  >
                    <i className="fa fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-warning me-1"
                    title="Edit"
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    title="Delete"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Student Detail Modal */}
      {showModal && selectedStudent && (
        <div className="modal-backdrop">
          <div className="student-modal">
            <div className="modal-header1">
              <h5 className="modal-title">Student Details</h5>
            </div>
            <div className="modal-body">
              <table className="detail-table">
                <tbody>
                  <tr>
                    <th>User Name</th>
                    <td>{selectedStudent.name}</td>
                  </tr>
                  <tr>
                    <th>EmailId</th>
                    <td>{selectedStudent.email}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{selectedStudent.phone}</td>
                  </tr>
                  <tr>
                    <th>Fees</th>
                    <td>{selectedStudent.fees}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{selectedStudent.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


      {
        showaddForm && (
          <div className="modal-backdrop">
            <div className="student-modal">
              <div className="modal-header1">
                <h5 className="modal-title">Add Student</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Fees</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Student
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => setShowaddForm(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )

      }
    </div>
  );
}
