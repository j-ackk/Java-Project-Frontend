import React, { useState } from 'react';
import '../styles/AddBook.css';

function AddBook() {
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [editionNumber, setEditionNumber] = useState('');
  const [copyright, setCopyright] = useState('');
  const [authorId, setAuthorId] = useState('');

  // prevent default so the page doesn't refresh on submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        isbn: isbn,
        title: title,
        editionNumber: editionNumber,
        copyright: copyright,
        author_id: authorId
      })
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/books', requestOptions);
      
      if (!response.ok) {
        throw new Error('Failed to add book');
      }

      alert('Book added successfully');
      
    } catch (error) {
      console.error('Error adding book: ', error);
      alert('Failed to add book\nPlease try again.');
    }
  };

  return (
    <div className='add-book-form-container'>
      <h1 className='add-book-title'>Add New Book</h1>
      <form className='add-book-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            value={isbn} // value of isbn input
            onChange={(e) => setIsbn(e.target.value)} // update isbn state
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title} // value of title input
            onChange={(e) => setTitle(e.target.value)} // update title state
          />
        </div>
        <div>
          <label htmlFor="editionNumber">Edition Number:</label>
          <input
            type="number"
            id="editionNumber"
            value={editionNumber} // value of edition number input
            onChange={(e) => setEditionNumber(e.target.value)} // update edition number state
          />
        </div>
        <div>
          <label htmlFor="copyright">Copyright:</label>
          <input
            type="text"
            id="copyright"
            value={copyright} // value of copyright input
            onChange={(e) => setCopyright(e.target.value)} // update copyright state
          />
        </div>
        <div>
          <label htmlFor="authorId">Author ID:</label>
          <input
            type="number"
            id="authorId"
            value={authorId} // value of author id input
            onChange={(e) => setAuthorId(e.target.value)} // update author id state
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBook;