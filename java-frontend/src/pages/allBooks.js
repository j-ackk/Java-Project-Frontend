import React, { useEffect, useState } from 'react';
import '../styles/AllBooks.css';

function AllBooksTable() {
  const [books, setBooks] = useState([]);

  // fetch to the books endpoint, set the data to books
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/books')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBooks(data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  // return table with all book values
  // list all authors in the authorList
  return (
    <div className='all-books-container'>
      <h1 className='all-books-title'>Fetch All Books</h1>
      <table className="all-books">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Edition Number</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.isbn}>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.editionNumber}</td>
              <td>
                <ul>
                  {book.authorList.map(author => (
                    <li key={author.id}>{author.firstName} {author.lastName}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllBooksTable;