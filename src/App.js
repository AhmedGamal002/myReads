import "./App.css";
import { useState , useEffect} from "react";
import { Route,Routes } from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import HomePage from "./HomePage";
import SearchBooks from "./SearchBooks";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{

    //get data from the api
    const getBooks = async ()=>{
      const res = await BooksAPI.getAll();
      setBooks(res);
    }

    getBooks();
    //console.log(books);
  } , []);


  const bookShelves = [
    {
      id : 1,
      title : "Currently Reading",
      shelfName : "currentlyReading"
    },
    {
      id : 2 , 
      title : "Want to Read",
      shelfName : "wantToRead"
    },
    {
      id : 3 ,
      title : "Read",
      shelfName : "read"
    }
  ];

  const updateShelf = (book , shelf) => {
    //api update
    BooksAPI.update(book,shelf);
    //console.log(res);

    const filteredBooks = books.filter((oldbook)=> oldbook.id !== book.id);
    book.shelf = shelf;

    // shelf !== 'none' && filteredBooks.concat(book);

    setBooks(filteredBooks.concat(book));
    //console.log(filteredBooks);

  }

  return (
    <div className="app">
    
      <Routes>
        <Route exact path="/" element = {<HomePage books={books} bookShelves={bookShelves} onUpdateShelf={updateShelf} />}></Route>
        <Route path="/search" element = {<SearchBooks onUpdateShelf={updateShelf} allBooks={books} />}></Route>
      </Routes>
    </div>


  );
}

export default App;
