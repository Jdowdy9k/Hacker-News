import React from 'react';
import HistoryPage from './history';
import { connect } from 'react-redux';
//import { addSearchResults } from '../Search/action'

//function Historys (props) {
//    if (props.history) {
//        return (
//            <>
//                { renderHistory(props.history) }
//            </>
//        )
//    }
//    return null;
//}
//const renderHistory = history => {
//    return history.map(history => {
//        return <HistoryPage history={ history }/>
//    })
//};
//
////const mapDispatchToProps = (dispatch) => {
////    return {
////        addSearchResults: (terms) => dispatch(addSearchResults(terms))
////    }
////}
//
//const mapStateToProps = state => {
//    return {
//        history: state.history
//    }
//};
//
//export default connect(mapStateToProps)(Historys)