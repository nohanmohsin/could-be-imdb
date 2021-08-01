import React from 'react';


const Result = ({result, filter}) => { 
    switch(result.media_type){
        case 'movie':
        case 'tv':
            return (
                <div id='search-res'>
                    <img src={"https://image.tmdb.org/t/p/original" + result.poster_path} alt="poster of tv series or movie" />
                    <span>{result.title}</span>
                </div>
            );
        case 'person':
            return (
                <div id='search-res'>
                    
                </div>
            );
        case 'company':
            return (
                <div id='search-res'>
                    
                </div>
            );
        default:
            return (
                <p>{'You got the wrong link bud :('}</p>
            )
    }
    
};

export default Result;