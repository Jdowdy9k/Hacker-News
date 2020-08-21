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
