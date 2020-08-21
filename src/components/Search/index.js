import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchResults, addSearchResults } from './action';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class SearchBar extends Component {
    state = {
        currentInput: ''
    }

    //handles new inputs and updates the current search
    handleInputChange = (event) => {
        let newInput = event.target.value;
        this.setState({
            currentInput: newInput
        });
    }
    //handles the submit function and starts the results process
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getSearchResults(this.state.currentInput)
        this.props.addSearchResults(this.state.currentInput)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Control
                    className="mx-auto"
                    placeholder="Search"
                    type='search'
                    onChange={this.handleInputChange}
                    style={{ maxWidth: '200px', textAlign: 'center' }}>
                </Form.Control><Button className='primary' type='submit'>Search</Button>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        history: state.history,
        results: state.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchResults: (query) => dispatch(getSearchResults(query)),
        addSearchResults: (terms) => dispatch(addSearchResults(terms))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

////////////////////////////////////////////////////////////

//const state = {
//   currentInput: ""
//}

//const mapStateToProps = (state) => {
//    return {
//        searches: state.searches,
//        results: state.results
//    }
//}
//let currentInput = ''
//
//function Search(props) {
//   console.log(props);
//   return (
//    <Form onSubmit={ e => fireSearch(e, currentInput, props)}>
//        <Form.Control
//            className="mx-auto"
//            placeholder="Search"
//            type='search'
//            onChange={ e => fireSearch(e, currentInput, props)}
//            style={{ maxWidth: '200px', textAlign: 'center' }}>
//        </Form.Control><Button className='primary' type='submit'>Search</Button>
//    </Form>
//);
//}
//
//function handleInputChange(e, currentInput) {
//    e.preventDefault()
//    let newInput = e.target.value;
//    currentInput = newInput
//    
//}
//    
//
//function fireSearch(currentInput, props, e) {
//    e.preventDefault()
//    //if (e.target.value.trim() !== "") {
//        props.getSearchResults(currentInput);
//    }
////}
//
//
//const mapDispatchToProps = {
//    getSearchResults
//};


//export default connect(null, mapDispatchToProps)(Search);