import React from 'react';

const BooksListItem = ({ book })=>{

    return (
        <div className="col-md-3 cards">
            <div className="card  ">
                <img src={book.cover} alt={book.title} className="card-img-top img-responsive" />
                <div className="card-block">
                    <h6 className="card-title">{book.title}</h6>
                    <small className="text-muted">{book.author}</small>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <small className="text-muted">
                                MEN :{book.men} <br/>
                                ISBN: {book.isbn} <br/>
                                stron: {book.pages_count}
                            </small>
                        </li>
                        <li className="list-group-item">
                            <small className="text-muted">poziom:{book.levels.map((level, index)=>{
                               return (
                                   <div key={index}>
                                       <span>{level.school}</span> , <span>{level.class}</span>
                                   </div>
                               )
                            })}
                            </small>
                        </li>
                        <li className="list-group-item"><small className="text-muted">typ: {book.type}</small></li>
                    </ul>

                 </div>
                <div className="card-footer">
                    <a className="btn btn-sm btn-outline-warning" href={book.url} target="blank"><small>Więcej ></small></a>
                </div>
            </div>
        </div>
   );
};
export default BooksListItem;
