import { useNavigate} from 'react-router-dom';

const BooksInShelf = ({booksInShelfOnly , updateShelf}) => {
    let navigate = useNavigate();

    const onChangeSelect = (selectedShelf , book) => {
        updateShelf(book, selectedShelf);
        navigate("/");
      };

return (

    
        booksInShelfOnly.map((bookInCurrentShelf) => {
           // console.log(bookInCurrentShelf);
    return(
        <li key={bookInCurrentShelf.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  `url(${bookInCurrentShelf.imageLinks.thumbnail})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select value={bookInCurrentShelf.shelf ? bookInCurrentShelf.shelf : "none"} onChange={(event) => onChangeSelect(event.target.value ,bookInCurrentShelf )}>
                <option value="none1" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">
                  Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookInCurrentShelf.title}</div>
          <div className="book-authors">{bookInCurrentShelf.authors}</div>
        </div>
      </li> 
    );
}
)
    


        
);
}



export default BooksInShelf;