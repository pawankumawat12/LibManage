import { useState } from "react";

const GetAllDataStudentsHook = () => {
  const [IsLoading, setisLoading] = useState(false);
  const [err, setError] = useState(null);
  const [getallstudents, setGetallstudents] = useState([]);
  const AllStudents = async () => {
    setisLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/api/studentalldata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch student data");
      }
      const data = await response.json();
      setGetallstudents(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setisLoading(false);
    }
  };
  return { AllStudents, IsLoading, err, getallstudents };
};

export default GetAllDataStudentsHook;
