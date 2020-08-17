import React from 'react';


function Search () {
    return (
        <>
            <input onChange={ onInputChange }/>
        </>
    )
}

function onInputChange(e) {
    const api = 'http://hn.algolia.com/api/v1/search?query=${ e.target.value }';
}


//function callApi() {
//    const api = 'http://hn.algolia.com/api/v1/search?query= ${ e.target.value }';
//}

export default Search;