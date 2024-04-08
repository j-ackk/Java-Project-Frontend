import React, { useEffect, useState } from 'react';
import '../styles/AllAuthors.css';

function AllAuthorsTable() {
  const [authors, setAuthors] = useState([]);

  // fetch to the authors endpoint, set the data to authors
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/authors')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setAuthors(data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  // return our table
  return (
    <div className='all-authors-container'>
      <h1 className='all-authors-title'>Fetch All Authors</h1>
      <table className='all-authors'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.firstName} {author.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllAuthorsTable;