import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { fetchResults } from '../../actions/action'



const mapDispatchToProps = (dispatch) => {
    return {
        fetchResults: (terms) => dispatch(fetchResults(terms))
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        searches: state.searches
    }
};

class History extends Component {

    //function to pull the previous search
    previousSearch = (event) => {
        this.props.fetchResults(event.target.id)
    }

    render() {
        const { searches } = this.props;
        return (
            <div>
                <h2>Search History</h2>
                {
                    searches.map(search => {
                        return (
                            <ul key={search}>
                            <Button variant='warning' id={search} key={search} onClick={this.previousSearch}>{search}</Button>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(History);