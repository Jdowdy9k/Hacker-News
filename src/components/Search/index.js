import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchResults, addSearchResults } from './action';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class SearchBar extends Component {
    state = {
        currentInput: ''
    }

    
    handleInputChange = (event) => {
        let newInput = event.target.value;
        this.setState({
            currentInput: newInput
        });
    }
    
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
        getSearchResults: (value) => dispatch(getSearchResults(value)),
        addSearchResults: (terms) => { dispatch(addSearchResults(terms)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
