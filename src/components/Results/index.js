import React from 'react';
import Result from './Result';
import { connect } from 'react-redux';

function Results(props) {
    if (props.searchResults) {
        return (
            <>
                { renderSearchResults(props.searchResults) }
            </>
        )
    }
    return null;
};

const renderSearchResults = searchResults => {
    return searchResults.map(result => {
        return <Result result={ result }/>
    })
}

const mapStateToProps = state => {
    return {
        searchResults: state.get('searchResults')
    }
};

export default connect(mapStateToProps)(Results);