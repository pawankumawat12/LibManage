import { useState, useEffect } from "react";
import "./Books.css";
import AddBookHook from "../../../Hooks/Books/AddBook.hook";
import GetAllBooks from "../../../Hooks/Books/GetAllBook.hook";
import { toast } from "react-toastify";

export default function Books() {
  //add books
  const { AddBook, error } = AddBookHook();

  const [bookdata, setBookdata] = useState({
    Title: "",
    Author: "",
    Description: "",
    Price: "",
    Status: "Available",
  });
  const handleChange = (e) => {
    setBookdata({ ...bookdata, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    const { Title, Author, Price } = bookdata;
    if (!Title || !Author || !Price) {
      toast.error("Please fill required fields.");
      return;
    }
    if (Price < 0) {
      toast.error("Please check your price should positive");
      return;
    }
    if (Title.length < 3) {
      toast.error("Title should be have 3 alphabet");
      return;
    }
    if (Author.length < 3) {
      toast.error("Author should be have 3 alphabet");
      return;
    }
    const response = await AddBook(bookdata);
    if (response.success) {
      toast.success(response.message);
      setBookdata({
        Title: "",
        Author: "",
        Description: "",
        Price: "",
        Status: "Available",
      });
    } else {
      toast.error(response.message);
    }
  };

  //get the all books data
  const { err, bookData, getBooks } = GetAllBooks();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="book-container">
      <h2>
        <i className="fa fa-book"></i> Add New Book
      </h2>

      <form className="book-form" onSubmit={handleAddSubmit}>
        <div className="input-icon">
          <i className="fa fa-book"></i>
          <input
            type="text"
            placeholder="Book Title"
            name="Title"
            value={bookdata.Title}
            onChange={handleChange}
          />
        </div>
        <div className="input-icon">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder="Author"
            name="Author"
            value={bookdata.Author}
            onChange={handleChange}
          />
        </div>
        <div className="input-icon">
          <i className="fa fa-align-left"></i>
          <input
            type="text"
            placeholder="Description"
            name="Description"
            value={bookdata.Description}
            onChange={handleChange}
          />
        </div>
        <div className="input-icon">
          <i className="fa fa-inr"></i>
          <input
            type="number"
            placeholder="Price (₹)"
            name="Price"
            value={bookdata.Price}
            onChange={handleChange}
          />
        </div>
        <div className="input-icon">
          <i className="fa fa-check-circle"></i>
          <select name="Status" value={bookdata.Status} onChange={handleChange}>
            <option value="Available">Available</option>
            <option value="Not-Available">Not-Available</option>
          </select>
        </div>
        <button type="submit">
          <i className="fa fa-plus-circle"></i> Add Book
        </button>
      </form>

      <h3>
        <i className="fa fa-list"></i> Book List
      </h3>

      <div className="table-wrapper">
        <table className="book-table">
          <thead>
            <tr>
              <th>#</th>
              <th>
                <i className="fa fa-book"></i> Title
              </th>
              <th>
                <i className="fa fa-user"></i> Author
              </th>
              <th>
                <i className="fa fa-inr"></i> Price
              </th>
              <th>
                <i className="fa fa-align-left"></i> Description
              </th>
              <th>
                <i className="fa fa-check"></i> Status
              </th>
              <th>
                <i className="fa fa-cogs"></i> Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookData.map((bookdata, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{bookdata.Title}</td>
                  <td> {bookdata.Author} </td>
                  <td>{bookdata.Price}</td>
                  <td>{bookdata.Description}</td>
                  <td>{bookdata.Status}</td>
                  <td>
                    <button className="action-btn edit">
                      <i className="fa fa-edit"></i>
                    </button>
                    <button className="action-btn delete">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
