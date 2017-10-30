import React, { Component } from 'react'
import {  Form, FormGroup, Input  } from 'reactstrap';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            placeholder:'Wpisz szukany produkt...',
            term: '',
            emptyInput: false
        };

    }
    render() {
        return(
        <div className="container ">
            <Form inline className="searchComp">
                <FormGroup className="col-md-12 ">
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
                           className = "col-sm-12 col-md-12 col-lg-9 searchInput"
                           name = "search" id = "myForm"
                           placeholder = {this.state.placeholder}/>
                    <a size="lg"
                            className=" col-lg-2 btn btn-outline-warning btn-lg searchBtn"
                            onClick={ this.handleButtonClick}>
                        Wyszukaj
                    </a>

                </FormGroup>
            </Form>
            <div className="container text-center text-muted" style={{display: this.state.emptyInput ? 'block' : 'none' }}>Musisz podać szukaną frazę!</div>
        </div>
        )
    }

    handleButtonClick = ()=>{
        if(this.state.term === ''){
            this.setState({emptyInput:true});
            return
        }
        this.setState({emptyInput:false});
        this.props.onSearchClick(this.state.term);
        this.setState({term:''});
    }
}
export default  SearchBar;