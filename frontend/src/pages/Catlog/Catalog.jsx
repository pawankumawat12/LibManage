// src/components/Catalog.jsx
import { useEffect, useState } from 'react';
import './Catalog.css';
import GetAllBooks from '../../Hooks/Books/GetAllBook.hook';

function Catalog() {
  const [selectedBook, setSelectedBook] = useState(null);
 const  {err, bookData, getBooks} = GetAllBooks();
 useEffect(() =>{
  getBooks();
 }, [])

  

  return (
    <div className="catalog-wrapper">
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h1><i className="fa fa-book"></i> Browse Catalog</h1>
      </div>
<div className="catalog-list">
{
  bookData.map((bookdata, index) =>{
    return(
          <div className="catalog-item" key={index}>
            <h3>{bookdata.Title}</h3>
            <p><strong><i className="fa fa-user"></i> Author:</strong> {bookdata.Author}</p>
            <p><strong><i className="fa fa-tags"></i> Category:</strong> {bookdata.Description}</p>
            <button className="catalog-btn" onClick={() => setSelectedBook(bookdata)}>
              View Details
            </button>
          </div>
    )
  })
}
  </div>
      

      {/* View Details Modal */}
      {selectedBook && (
        <div className="modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Book Details</h2>
              <button className="close-modal" onClick={() => setSelectedBook(null)}>&times;</button>
            </div>
            <h2>{selectedBook.title}</h2>
            <p><strong>Author:</strong> {selectedBook.author}</p>
            <p><strong>Category:</strong> {selectedBook.category}</p>
            <p>{selectedBook.description}</p>
           
          </div>
        </div>
      )}

     
    </div>
  );
}

export default Catalog;
