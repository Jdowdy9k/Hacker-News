import React from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from './action';


function Search(props) {
   console.log(props);
    return (
        <form onSubmit={ e => fireSearch(e, props) }>
            <input type="text"/>
            <button type="submit" value="submit" key="submit">submit</button>
        </form>
    )
}

function fireSearch(e, props) {
    e.preventDefault()
    if (e.target.value.trim() !== "") {
        props.getSearchResults(e.target.value);
    }
}

//function handleSubmit (e, props){
//    onInputChange()
//}


const mapDispatchToProps = {
    getSearchResults
};


export default connect(null, mapDispatchToProps)(Search);