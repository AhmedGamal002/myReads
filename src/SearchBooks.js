import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as BooksAPI from "./BooksAPI";
import BooksInShelf from './BooksInShelf';

const SearchBooks = ({onUpdateShelf , allBooks}) =>{

    //let navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);



    const updateQuery = (query) => {
        setQuery(query);
        if (query === ""){
            setBooks([]);
        }else{
        //console.log(query);

            const getBooks = async ()=>{
                const res = await BooksAPI.search(query);
                //console.log(res.filter((data) => data.imageLinks.thumbnail !== ""));
                if(!res.error){
                    const searchedBooks = res.filter((data) => data.hasOwnProperty("imageLinks") );
                    const booksWithShelf = searchedBooks.map((book)=>{
                        allBooks.map((currentBook) => {
                            if(currentBook.id === book.id){
                                book.shelf = currentBook.shelf;
                            } 
                            return currentBook;
                        })
                        return book;
                    });
                    setBooks( booksWithShelf );
                }else{
                    setBooks([]);
                }        
            }

            getBooks();
            //console.log(books);


        }
    };

/*
const onUpdateShelf = (book , shelf) =>{
    BooksAPI.update(book,shelf);
    book.shelf = shelf;
    navigate("/");
}*/

    return (
        <div className="search-books">
        <div className="search-books-bar">
            <Link
                className="close-search"
                to="/"
            >
                Close
            </Link>
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                />
            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
                <BooksInShelf booksInShelfOnly={books} updateShelf={onUpdateShelf}/>
            </ol>
        </div>
        </div>
    );
}

export default SearchBooks;
