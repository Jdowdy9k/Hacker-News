import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults, search } from '../../actions/action'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Search extends Component {
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
        this.props.search(this.state.currentInput)
        this.props.fetchResults(this.state.currentInput)
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
        search: (value) => { dispatch(search(value)) },
        fetchResults: (terms) => dispatch(fetchResults(terms))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
