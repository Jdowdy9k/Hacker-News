import React from 'react';

function Result({ result }) {
    console.log(result.toJS()._highlightResults);
    return (
        <>
           <div>
               <h1> {result.toJS().title}</h1>
               <h2> {result.toJS().url}</h2>
               <h2> {result.toJS().author}</h2>
           </div>
        </>
    )
}

export default Result;