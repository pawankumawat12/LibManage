import { useEffect, useState } from "react";
import "./Student.css";
import StudentHook from "../../../Hooks/Student/AddStudent.hook";
import { toast } from "react-toastify";
import GetAllDataStudentsHook from "../../../Hooks/Student/GetAllStudent.hook";
export default function Student() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showaddForm, setShowaddForm] = useState(false);

  const { isLoading, error, AddStudent } = StudentHook();
  const { AllStudents, getallstudents, IsLoading, err } =
    GetAllDataStudentsHook();

  //get all students data
  useEffect(() => {
    AllStudents();
  }, []);

  //add data
  const [studentData, setStudentData] = useState({
    SeatNo: "",
    Course: "",
    AadharNo: "",
    Name: "",
    Email: "",
    PhoneNumber: "",
    Address: "",
    DateOfBirth: "",
    Fees: "",
  });

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!studentData.Name || !studentData.PhoneNumber || !studentData.Fees) {
      toast.error("All fields are required");
      return;
    }
    if (studentData.Fees < 0) {
      toast.error("Fees cannot be negative");
      return;
    }
    if (studentData.Name.length <= 3) {
      toast.error("Student name is too short! Max 4 alphabet");
    }

    const response = await AddStudent(studentData);
    if (response.success) {
      toast.success(response.message);
      setStudentData({
        SeatNo: "",
        Course: "",
        AadharNo: "",

        Name: "",
        Email: "",
        PhoneNumber: "",
        Address: "",
        DateOfBirth: "",
        Fees: "",
        Status: "Active",
      });
      setShowaddForm(false);
    } else {
      toast.error(response.message);
    }
    AllStudents();
  };

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleChangePhone = (e) => {
    const { name, value } = e.target;
    if (name === "PhoneNumber") {
      const onlyNums = value.replace(/[^0-9]/g, "").slice(0, 10);
      setStudentData({ ...studentData, [name]: onlyNums });
    } else {
      setStudentData({ ...studentData, [name]: value });
    }
  };
  const handleChangeAadhar = (e) => {
    const { name, value } = e.target;
    if (name === "AadharNo") {
      const onlyNums = value.replace(/[^0-9]/g, "").slice(0, 12);
      setStudentData({ ...studentData, [name]: onlyNums });
    } else {
      setStudentData({ ...studentData, [name]: value });
    }
  };

  const handleView = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  return (
    <div className=" student-table-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-4">
          <i className="fa fa-book"></i> Student List
        </h3>
        <button
          className="btn add-btn  mb-3"
          onClick={() => setShowaddForm(true)}
        >
          <i className="fa fa-plus-circle"></i> Add Students
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center custom-student-table">
          <thead className="table-dark">
            <tr>
              <th className="text-start">Seat No.</th>
              <th>Course</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Aadhar Number</th>
              <th>Address</th>
              <th>D.O.B</th>
              <th>Fees</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getallstudents.map((stu, index) => {
              return (
                <tr key={index}>
                  <td className="text-start">{stu.SeatNo}</td>
                  <td>{stu.Course}</td>
                  <td>{stu.Name}</td>
                  <td>{stu.Email}</td>
                  <td>{stu.PhoneNumber}</td>
                  <td>{stu.AadharNo}</td>
                  <td>{stu.Address}</td>
                  <td>{stu.DateOfBirth}</td>
                  <td>{stu.Fees}</td>
                  <td></td>
                  <td></td>

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
              );
            })}
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

      {showaddForm && (
        <div className="modal-backdrop">
          <div className="student-modal">
            <div className="modal-header1">
              <h5 className="modal-title">Add Student</h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddStudent}>
                <div className="mb-3">
                  <label className="form-label">Seat Number</label>
                  <input
                    type="number"
                    className="form-field"
                    name="SeatNo"
                    value={studentData.SeatNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-field"
                    name="Name"
                    value={studentData.Name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Course</label>
                  <input
                    type="text"
                    className="form-field"
                    name="Course"
                    value={studentData.Course}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-field"
                    name="Email"
                    value={studentData.Email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-field"
                    name="PhoneNumber"
                    value={studentData.PhoneNumber}
                    onChange={handleChangePhone}
                    maxLength={10}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Aadhar Number</label>
                  <input
                    type="number"
                    className="form-field"
                    name="AadharNo"
                    value={studentData.AadharNo}
                    onChange={handleChangeAadhar}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-field"
                    name="Address"
                    value={studentData.Address}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date of birth</label>
                  <input
                    type="Date"
                    className="form-field"
                    name="DateOfBirth"
                    value={studentData.DateOfBirth}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Fees</label>
                  <input
                    type="Number"
                    className="form-field"
                    name="Fees"
                    value={studentData.Fees}
                    onChange={handleChange}
                    required
                  />
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
      )}
    </div>
  );
}
