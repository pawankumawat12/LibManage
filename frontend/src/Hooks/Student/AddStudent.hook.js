import { useState } from "react";
const StudentHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const AddStudent = async (studentData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/api/addstudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(studentData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      return {success: true, message : "Student added successfully"}
    } catch (error) {
      setError(error.message || "Something went wrong");
      return {success: false, message: error.message}
    }
  };
  return {isLoading, error, AddStudent };
};
export default StudentHook;
