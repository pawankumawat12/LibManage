import './Books.css';

export default function Books() {
  return (
    <div className="book-container">
      <h2><i className="fa fa-book"></i> Add New Book</h2>

      <form className="book-form">
        <div className="input-icon">
          <i className="fa fa-book"></i>
          <input type="text" placeholder="Book Title" />
        </div>
        <div className="input-icon">
          <i className="fa fa-user"></i>
          <input type="text" placeholder="Author" />
        </div>
        <div className="input-icon">
          <i className="fa fa-align-left"></i>
          <input type="text" placeholder="Description" />
        </div>
        <div className="input-icon">
          <i className="fa fa-inr"></i>
          <input type="number" placeholder="Price (₹)" />
        </div>
        <div className="input-icon">
          <i className="fa fa-check-circle"></i>
          <select>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>
        <button type="submit">
          <i className="fa fa-plus-circle"></i> Add Book
        </button>
      </form>

      <h3><i className="fa fa-list"></i> Book List</h3>

      <div className="table-wrapper">
        <table className="book-table">
          <thead>
            <tr>
              <th>#</th>
              <th><i className="fa fa-book"></i> Title</th>
              <th><i className="fa fa-user"></i> Author</th>
              <th><i className="fa fa-align-left"></i> Description</th>
              <th><i className="fa fa-inr"></i> Price</th>
              <th><i className="fa fa-check"></i> Status</th>
              <th><i className="fa fa-cogs"></i> Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sample Book</td>
              <td>Author Name</td>
              <td>Intro about the book</td>
              <td>₹250</td>
              <td>Available</td>
              <td>
                <button className="action-btn edit"><i className="fa fa-edit"></i></button>
                <button className="action-btn delete"><i className="fa fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
