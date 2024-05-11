import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './BooksPage';
import BookDetailsPage from './BookDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/books" element={<BooksPage/>} />
        <Route path="/books/:id" element={<BookDetailsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
