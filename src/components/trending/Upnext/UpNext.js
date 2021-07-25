//NOTE TO SELF
//I forgot the command thingy that react extension gives you for autocompletion so I was doing 'rsf' instead of 'rsc' and I am too lazy to go change it back
//so remember to do that next time 🤦‍♂️

import React from 'react';
import NextMovies from './NextMovies';

const UpNext = ({trendingMovieArray}) => {
    return (
      <div id="upnext">
        <span>Up Next</span>
        <div id="movies">
          {trendingMovieArray ? (
            trendingMovieArray.map((movieData) => <NextMovies movieData={movieData}/>)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
};

export default UpNext;