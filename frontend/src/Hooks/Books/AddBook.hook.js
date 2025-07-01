import {useState} from 'react';
const AddBookHook = () => {
  const [error, setError] = useState(null);

  const AddBook = async (bookData) => {
    try {
      const response = await fetch("http://localhost:8080/api/addbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      return { success: true, message: "Book added successfully" };
    } catch (error) {
      setError(error.message || "Something went wrong");
      return { success: false, message: error.message };
    }
  };
  return {AddBook, error}
};

export default AddBookHook;