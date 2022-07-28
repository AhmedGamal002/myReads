import { Link } from 'react-router-dom';
import BooksInShelf from './BooksInShelf';

const HomePage = ({books , bookShelves , onUpdateShelf}) =>{



    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <div>



              {bookShelves.map((bookshelf) => {
                const booksInShelfOnly = books.filter( (bookInShelf) => bookshelf.shelfName === bookInShelf.shelf);
return (
                <div className="bookshelf" key={bookshelf.id}>
                <h2 className="bookshelf-title">{bookshelf.title}</h2>



                <div className="bookshelf-books">


                  <ol className="books-grid">

                    {
                      <BooksInShelf booksInShelfOnly={booksInShelfOnly} updateShelf={onUpdateShelf}/>
                    }



                  </ol>


                </div>



              </div>
);//end of return


              })
                          };




            </div>
          </div>

          <div className="open-search">
            <Link to="/search" >Add a book</Link>
          </div>

        </div>
    );
}


export default HomePage;