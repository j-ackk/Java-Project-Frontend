import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllBooksTable from './pages/allBooks';
import AllAuthorsTable from './pages/allAuthors';
import NavBar from './components/navigation';
import Home from './pages/home';
import AddAuthor from './pages/addAuthor';
import AddBook from './pages/addBook';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<AllBooksTable />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/authors" element={<AllAuthorsTable />} />
          <Route path="/addAuthor" element={<AddAuthor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
