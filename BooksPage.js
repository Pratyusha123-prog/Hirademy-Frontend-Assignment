import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BooksPage.css'; // Import CSS file for styling

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://softwium.com/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="books-container"> {/* Apply books-container class */}
      <h1 className="centered-heading">Books</h1> {/* Apply centered-heading class */}
      <div className="books-list"> {/* Apply books-list class */}
        {books.map(book => (
          <div key={book.id} className="book-item"> {/* Apply book-item class */}
            <Link to={`/books/${book.id}`} className="book-title">{book.title}</Link> {/* Apply book-title class */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;


