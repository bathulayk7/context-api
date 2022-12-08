import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
// import BooksContext from './context/books';
import {useBooksContext} from "./context/books"

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
