import React from 'react';

const MovieDetails = ({details}) => {
    // const {
    //   id,
    //   title,
    //   backdrop_path,
    //   poster_path,
    //   overview,
    //   release_date,
    //   runtime,
    //   genres,
    //   adult,
    //   production_companies,
    //   production_countries,
    // } = details;

    return (
      <section id="movie-details">
        <div>
          <h1 className="title">{details.title}</h1>
          <ul className="small-details">
            <li id="release-date">{details.release_date}</li>
            <li id="age-rating">{details.adult ? <>18+</> : <>PG-13</>}</li>
            <li id="runtime">{details.runtime}</li>
          </ul>
        </div>
        <div id="popularity-num">
          <span>POPULARITY</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="ipc-icon ipc-icon--popularity-up TrendingButton__TrendingUpIcon-bb3vt8-3 iZVTzT"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-2.6 0-5-1.3-6.4-3.3l2.8-3.4 1.3 1.5c.4.4 1 .4 1.3 0l2.9-3.2 1.3 1.4c.3.3.8.1.8-.3V8.5c0-.3-.2-.5-.5-.5h-4c-.4 0-.6.5-.3.8l1.3 1.4-2.2 2.5L9 11.3c-.4-.4-1-.4-1.3 0L4.6 15c-.4-.9-.6-1.9-.6-3 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"></path>
          </svg>
          <span>{details.popularity}</span>
        </div>
        <div className="poster-and-backdrop">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
              alt=""
            />
          </div>
          <div className="backdrop">
            <img
              src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
              alt=""
            />
          </div>

        </div>
        <ul id='genres'>
            {details.genres.map(genre => (<li classname="genre">{genre.name}</li>))}
        </ul>
        <div className="videos"></div>
        <div className="photos"></div>
        <div id="cast">

        </div>
        <div id="storyline">

        </div>
        <div id="details">

        </div>
        <div id="boxoffice">

        </div>
      </section>
    );
};

export default MovieDetails;