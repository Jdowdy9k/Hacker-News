import React  from 'react';
import Button from 'react-bootstrap/Button';
import { addSearchResults } from './index'

const previousSearch = (event) => {
    this.props.setSearchResults(event.target.id)
}
function HistoryPage ({ history }) {
    
    return (
        <>
            <h2>History</h2>
            <ul key={history}>
                <Button variant='warning' id={history} key={history} onClick={previousSearch}>{history}</Button>
            </ul>
        </>
    )
    
    
    
    
    
    //previousSearch = (event) => {
    //    this.props.addSearchResults(event.target.id)
    //}



    //render() {
    //    const { history } = this.props;
    //    return (
    //        <div>
    //            <h2>Search History</h2>
    //            {
    //                history.map(search => {
    //                    return (
    //                        <ul key={search}>
    //                        <Button variant='warning' id={search} key={search} onClick={this.previousSearch}>{search}</Button>
    //                        </ul>
    //                    )
    //                })
    //            }
    //        </div>
    //    )
    //}
}


export default HistoryPage;