import React from 'react';

function Result({ result }) {
    return (
        <>
           <div>
               <h2> {result.toJS().title}
               <a href={result.toJS().url}> {result.toJS().url}</a>
               </h2>
           </div>
           <div>
                <a> {result.toJS().points} </a> |
                <a> {result.toJS().author} </a> |
                <a> {result.toJS().created_at} </a> |
                <a> {result.toJS().num_comments} </a>
            
            </div>
        </>
    )
}

export default Result;