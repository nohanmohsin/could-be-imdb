import React from 'react';


const Result = ({result, filter}) => { 
    //if the filter is not multi there is no media type that's why the switch statement always returns default case dats why I gotta add a prop to the result obj
    result.media_type = filter !== 'multi' ? filter : result.media_type
    switch(result.media_type){
        case 'movie':
        case 'tv':
            return (
                <div id='search-res'>
                    <img src={"https://image.tmdb.org/t/p/original" + result.poster_path} alt="poster of tv series or movie" width='100'/>
                    
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
            //this is just for placeholder I'll change it to some error msg afterwards
            return (
                <p>{'You got the wrong link bud :('}</p>
            )
    }
    
};

export default Result;