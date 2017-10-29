import React, { Component } from 'react'
import {  Form, FormGroup, Input  } from 'reactstrap';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            placeholder:'Wpisz szukany produkt...',
            term: ''
        };

    }
    render() {
        return(
        <div className="container ">
            <Form inline className="searchComp">
                <FormGroup className="col-md-12">
                    <Input onChange={event => this.setState({ term: event.target.value }) }
                           onKeyPress={event => {
                               if (event.key === "Enter") {
                                   event.preventDefault();
                                   this.handleButtonClick();
                               }}}
                           onFocus = {()=>{this.setState({placeholder:''})}}
                           onBlur = {()=>{this.setState({placeholder:'Wpisz szukany produkt...'})}}
                           ref = "someName"
                           value = {this.state.term}
                           size ="lg"
                           className = "col-md-9 searchInput"
                           name = "search" id = "myForm"
                           placeholder = {this.state.placeholder}/>
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