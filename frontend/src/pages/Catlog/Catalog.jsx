// src/components/Catalog.jsx
import { useState } from 'react';
import './Catalog.css';

function Catalog() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [books, setBooks] = useState([
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Classic',
      description: 'A novel about the American dream in the 1920s.'
    },
    {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'History',
      description: 'A brief history of humankind exploring evolution and society.'
    },
    {
      title: '1984',
      author: 'George Orwell',
      category: 'Dystopian',
      description: 'A chilling dystopian tale about surveillance and totalitarianism.'
    },
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      description: 'A guide to writing clean, readable, and maintainable code.'
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      category: 'Fiction',
      description: 'A mystical story about destiny and pursuing dreams.'
    },
  ]);

  

  

  return (
    <div className="catalog-wrapper">
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h1><i className="fa fa-book"></i> Browse Catalog</h1>
      </div>

      <div className="catalog-list">
        {books.map((book, index) => (
          <div className="catalog-item" key={index}>
            <h3>{book.title}</h3>
            <p><strong><i className="fa fa-user"></i> Author:</strong> {book.author}</p>
            <p><strong><i className="fa fa-tags"></i> Category:</strong> {book.category}</p>
            <button className="catalog-btn" onClick={() => setSelectedBook(book)}>
              View Details
            </button>
          </div>
        ))}
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
