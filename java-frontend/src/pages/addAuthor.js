import React, { useState } from 'react';
import '../styles/AddAuthor.css';

function AddAuthor() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // prevent default so the page doesn't refresh on submission
  const handleSubmit = async (e) => {
      e.preventDefault();

      const requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
              firstName: firstName,
              lastName: lastName
            })
      };

      try {
          const response = await fetch('http://localhost:8080/api/v1/authors', requestOptions);

          if (!response.ok) {
              throw new Error('Failed to add author');
          }

          alert('Author added successfully');
            
      } catch (error) {
          console.error('Error adding author: ', error);
          alert('Failed to add author\nPlease try again')
      }
  };

  return (
      <div className="add-author-form-container">
        <h1 className='add-author-title'>Add New Author</h1>
        <form className='add-author-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} // update first name state
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} // update last name state
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default AddAuthor;