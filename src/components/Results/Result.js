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
                <h4> 
                 {result.toJS().points} | 
                  {result.toJS().author} | 
                  {result.toJS().created_at} | 
                  {result.toJS().num_comments} 
                </h4>
            
            </div>
        </>
    )
}

export default Result;