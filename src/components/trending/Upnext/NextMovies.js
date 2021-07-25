import React from 'react';

const NextMovies = ({movieData}) => {
    const posterPath = movieData.poster_path;
    const movieTitle = movieData.title;

    return (
        <div id='upnext-child'>
            <img src={"https://image.tmdb.org/t/p/original" + posterPath} alt="" width='100'/>
            <div id="name-and-data">
                <h3>{movieTitle}</h3>

            </div>
        </div>
    );
};

export default NextMovies;