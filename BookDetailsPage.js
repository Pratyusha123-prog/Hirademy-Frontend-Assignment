import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailsPage.css'; // Import the CSS file

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://softwium.com/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="header">
        <h1 className="book-title">{book.title}</h1>
      </div>
      <div className="content">
        <div className="book-details-box">
          <p>ISBN: {book.isbn}</p>
          <p>Page Count: {book.pageCount}</p>
          <p>Authors: {book.authors.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;



