import { useState } from "react";

const MyDetailHook = () => {
  const [error, setError] = useState(null);
  const myDetails = async (details) => {
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/api/addMyDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      return { success: true, message: "Your details is added" };
    } catch (error) {
      setError(error.message || "Something went wrong");
      return { success: false, error: error.message };
    }
  };
  return { error, myDetails };
};
export default MyDetailHook;
