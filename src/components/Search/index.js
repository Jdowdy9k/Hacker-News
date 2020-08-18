import React from 'react';
import axios from 'axios';


function Search () {
    return (
        <>
            <input onChange={ onInputChange }/>
        </>
    )
}

async function onInputChange(e) {
    const api = 'http://hn.algolia.com/api/v1/search?query='+ e.target.value ;
    const data = await axios.get(api);
    console.log(data.data.hits)
}


export default Search;