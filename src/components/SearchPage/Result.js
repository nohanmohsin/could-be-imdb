import React from 'react';


const Result = ({result, filter}) => { 
    //if the filter is not multi there is no media type that's why the switch statement always returns default case dats why I gotta add a prop to the result obj

    /*alot of the times when the filter is multi we got to add all types of media in result....
    sometimes there isnt a result for a certain type of media dats why I gotta check if result is defined or not..
    
    if it's not I just go to the default switch case :)
    */
    result ? result.media_type = filter !== 'multi' ? filter : result.media_type : result={media_type: 'not found'};

    switch(result.media_type){
        case 'movie':
            return (
                <div className='search-res'>
                    <img src={"https://image.tmdb.org/t/p/original" + result.poster_path} alt="poster of tv series or movie" width='31'/>
                    <span>{result.title}</span>
                </div>
            );
        case 'tv':
            return (
                <div className='search-res'>
                     <img src={"https://image.tmdb.org/t/p/original" + result.poster_path} alt="poster of tv series or movie" width='31'/>
                    <span>{result.name}</span>
                </div>
            );
        case 'person':
            return (
                <div className='search-res'>
                    <img src={'https://image.tmdb.org/t/p/original' + result.profile_path} alt={result.name} width='31'/>
                    <span>{result.name}</span>
                </div>
            );
        case 'company':
            return (
                <div className='search-res'>
                    <img src={'https://image.tmdb.org/t/p/original' + result.logo_path} alt={result.name} width='31'/>
                    <span>{result.name}</span>
                </div>
            );
        default:
            //this is for undefined result 
            return (
                <p>{'sorry nothing was found'}</p>
            )
    }
    
};

export default Result;