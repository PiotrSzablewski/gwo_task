import React from 'react';
import BooksListItm from './books_list_item';


const BooksList = ({books, emptyRes})=>{
    if(emptyRes){
        return <div className="container text-left text-muted">Przykro nam nie mamy tej pozycji, spórbuj ponownie</div>;
    }
    let booksItems = books.map((book)=>{
        return <BooksListItm key={ book.cover } book={ book } />
    });
    return(
        <div className="card-deck-wrapper">
            <div className="card-deck books-list">
                { booksItems }
            </div>
        </div>
    )
};
export default BooksList