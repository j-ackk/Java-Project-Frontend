import React from "react";
import '../styles/Home.css';

function Home() {
    return (
        <div>
        <h1 className='home-title'>Example React Frontend</h1>
        <p className='home-description'>This application is used to test our Java Spring API Endpoints.</p>
        <p className='home-description'>We can do the following with the available UI:</p>
        <ul className='home-list'>
            <li>
                Get Request - All Books
            </li>
            <li>
                Get Request - All Authors
            </li>
            <li>
                Post Request - Add New Book
            </li>
            <li>
                Post Request - Add New Author
            </li>
        </ul>
        </div>
    );
}

export default Home;