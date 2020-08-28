import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../../actions/action'


class ResultDiv extends Component {

    //the Handle search results function displays results from the most recently searched item

    handleSearchResults = () => {
        if (this.props.length === 0) {
            return (
                <div> No results!</div>
            )
        } else {
            const { results } = this.props;
            return (
                <>
                    <div>
                        <h2> {results.toJS().title}
                            <a href={results.toJS().url}> {results.toJS().url}</a>
                        </h2>
                    </div>
                    <div>
                        <h4>
                            {results.toJS().points} |
                  {results.toJS().author} |
                  {results.toJS().created_at} |
                  {results.toJS().num_comments}
                        </h4>

                    </div>
                </>
            )
        }
    }

    render() {
        return this.props.loading ? (
            <h2>Loading...</h2>
        ) : this.props.error ? (
            <h2>{this.error}</h2>
        ) : (
                    <div>
                        <div>{this.handleSearchResults()}</div>
                    </div>
                )
    }
}

const mapStateToProps = state => {
    return {
        results: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchResults: () => dispatch(fetchResults())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultDiv);





//function Results(props) {
//    if (props.searchResults) {
//        return (
//            <>
//                { renderSearchResults(props.searchResults) }
//            </>
//        )
//    }
//    return null;
//};
//
//const renderSearchResults = searchResults => {
//    return searchResults.map(result => {
//        return <Result result={ result }/>
//    })
//}
//
//const mapStateToProps = state => {
//    return {
//        searchResults: state.get('searchResults')
//    }
//};
//
//export default connect(mapStateToProps)(Results);