import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { getSearchResults } from './Search/action';



class HistoryPage extends Component {

    previousSearch = (event) => {
        this.props.getSearchResults(event.target.id)
    }
    
    render() {
        let search = this.props
        let history = search.history
        return (
            <div>
                <h2>Search History</h2>
                {
                    history.map(search => {
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

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchResults: (query) => dispatch(getSearchResults(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);