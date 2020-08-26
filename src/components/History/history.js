import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { addSearchResults } from '../Search/action'



//function HistoryPage ({ history }) {
//     previousSearch = (event) => {
//            this.props.addSearchResults(event.target.id)
//        }
//    return (
//        <>
//            <h2>History</h2>
//            {
//                 history  = this.previousSearch;
//                <ul key={Search}>
//                    <Button variant='warning' id={Search} key={Search} onClick={previousSearch}>{history}</Button>
//                </ul>
//            }
//        </>
//    )


const mapDispatchToProps = (dispatch) => {
    return {
        addSearchResults: (terms) => dispatch(addSearchResults(terms))
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        history: state
    }
};


class HistoryPage extends Component {


    previousSearch = (event) => {
        this.props.addSearchResults(event.target.id)
    }

    render() {
        let { history } = this.props;
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


export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);