import React from "react";
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3>
                <Link to="/">Home</Link>
            </h3>
            <h3>
                <Link to="/books">Books</Link>
            </h3>
            <h3>
                <Link to="/authors">Authors</Link>
            </h3>
            <h3>
                <Link to="/addBook">Add Book</Link>
            </h3>
            <h3>
                <Link to="/addAuthor">Add Author</Link>
            </h3>
        </nav>
    );
}

export default NavBar;