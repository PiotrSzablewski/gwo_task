import React, { Component } from 'react';

import SearchBar from './components/search_bar';
import axios from 'axios';
import BooksList from './components/books_list';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            books : [],
            emptyRes: false
        };
    }

    booksSearch(term){
        let  url = encodeURI( `https://gwo.pl/booksApi/v1/search?query=${term}`);
        console.log(url);
        axios.get(url)
            .then( (response)=> {
                if (!Array.isArray(response.data) || response.data.length === 0) {
                    this.setState({ emptyRes:true });
                } else {
                    this.setState({
                        books:response.data,
                        emptyRes: false
                    });
                    console.log(response.data);
                }
            });
    }
    render() {
        return (
            <div className="App container-fluid">
                <div className="container logo">
                    <img className="img-responsive imgLogo" src={"https://gwo.pl/files/download/18050"} alt="GWO"/>
                </div>
                <div className="container">
                    <SearchBar onSearchClick={term => this.booksSearch(term)} />
                    <BooksList books={this.state.books} emptyRes={this.state.emptyRes} />
                </div>
            </div>
        );
    }
}

export default App;

