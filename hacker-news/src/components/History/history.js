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
    return {
        searches: state.searches
    }
};

class History extends Component {

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
                            <div key={search}>
                            <Button variant='warning' id={search} key={search} onClick={this.previousSearch}>{search}</Button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(History);