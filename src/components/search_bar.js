import React, { Component } from 'react'
import {  Form, FormGroup, Input  } from 'reactstrap';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = { term: '' };

    }
    render() {
        return(
        <div className="container ">
            <h5>Wpisz szukany produkt:</h5>
            <Form inline className="searchComp">
                <FormGroup className="col-md-12">
                    <Input onChange={event => this.setState({ term: event.target.value }) }
                           onKeyPress={event => {
                               if (event.key === "Enter") {
                                   event.preventDefault();
                                   this.handleButtonClick();
                               }}}
                           ref="someName" value = {this.state.term}
                           size="lg" className="col-md-9 searchInput"
                           name="search" id="myForm"
                           placeholder="wyszukaj...."/>
                    <a size="lg"

                            className=" col-md-2 btn btn-outline-warning btn-lg searchBtn"
                            onClick={ this.handleButtonClick}>
                        Wyszukaj
                    </a>

                </FormGroup>
            </Form>
        </div>
        )
    }

    handleButtonClick = ()=>{
        this.props.onSearchClick(this.state.term);
        console.log(this.state.term);
        this.setState({term:''});
    }
};
export default  SearchBar;