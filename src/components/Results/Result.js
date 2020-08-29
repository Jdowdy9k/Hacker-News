import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

class Results extends Component {

    handleSearchResults = () => {
        if (this.props.results.length === 0) {
            return (
                <p className="text-info text-dark p-3 m-2">No results</p>
            )
        } else {
            const { results } = this.props;
            return (
                <div className="list-group p-2">
                    {results.map(result => {
                        return (
                            <>
                                <div>
                                    <h2> {result.title}
                                        <a href={result.url}> {result.url}</a>
                                    </h2>
                                </div>
                                <div>
                                    <h4>
                                        {result.points} |
                                        {result.author} |
                                        {result.created_at} |
                                        {result.num_comments}
                                    </h4>

                                </div>
                            </>
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div>

                    <h1>Search Results</h1>

                </div>
                <div>

                    {this.handleSearchResults()}

                </div>
            </div>
        )
    }
}



export default connect(mapStateToProps)(Results);