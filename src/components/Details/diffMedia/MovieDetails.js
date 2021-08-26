import React, { useEffect, useState } from 'react';

const MovieDetails = ({details}) => {
    const {
      id,
      title,
      
      backdrop_path,
      poster_path,
      
      release_date,
      runtime,
      genres,
      
      adult,
      
    } = details;
    const [videos, setVideos] = useState();
    const [photos, setPhotos] = useState();
    const [cast, setCast] = useState();
    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c9f6a8755d74ccaf49688659b04654b7&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
          setVideos(data.results);
          
        });
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=c9f6a8755d74ccaf49688659b04654b7&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotos(data.backdrops);
          
        });
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c9f6a8755d74ccaf49688659b04654b7&language=en-US`)
      .then(res => res.json())
      .then(data => setCast(data.cast.slice(0, 11)))
      
    }, [])
    return (
      <main id="movie-details">
        <section className="hero-section">
          <div style={{'display': 'flex'}}>
            <div style={{'margin': '1.5rem 0 1rem 0'}}>
              <h1 className="title">{title}</h1>
              <ul className="small-details">
                <li id="release-date">{release_date}</li>
                <li id="age-rating">{adult ? <>18+</> : <>PG-13</>}</li>
                <li id="runtime">{runtime} Min</li>
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
                <path
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-2.6 0-5-1.3-6.4-3.3l2.8-3.4 1.3 1.5c.4.4 1 .4 1.3 0l2.9-3.2 1.3 1.4c.3.3.8.1.8-.3V8.5c0-.3-.2-.5-.5-.5h-4c-.4 0-.6.5-.3.8l1.3 1.4-2.2 2.5L9 11.3c-.4-.4-1-.4-1.3 0L4.6 15c-.4-.9-.6-1.9-.6-3 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"
                  style={{ color: "rgb(103,173,75)" }}
                ></path>
              </svg>
            </div>
          </div>
          <div className="poster-and-backdrop">
            <div className="poster">
              <img
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt=""
              />
              
            </div>
            <div className="backdrop">
              <img
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                alt=""
              />
            </div>
          </div>
          <ul id="genres-list" style={{'display': 'flex'}}>
            {genres.map((genre) => (
              <li className="genre">{genre.name}</li>
            ))}
          </ul>
          <p id="storyline">{details.overview}</p>
        </section>
        <section className="videos">
          {videos ? (
            videos.map((video) => (
              <div
                style={{
                  backgroundImage: `url("https://img.youtube.com/vi/${video.key}/maxresdefault.jpg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }}
              ></div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
        <section className="photos">
          <h2 className="section-headline">Videos</h2>
          {photos ? (
            photos.map((photo) => (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${photo.file_path}`}
                  alt=""
                />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
        <section id="cast">
          {cast ? (
            cast.map((castedPerson) => (
              <div className="casted-person-info">
                <img
                  className="casted-person-pfp"
                  src={`https://image.tmdb.org/t/p/original/${castedPerson.profile_path}`}
                  alt=""
                />
                <div className="casted-person-details">
                  <h5 className="name">{castedPerson.name}</h5>
                  <span className="portrayed-character-name">
                    {castedPerson.character}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>

        <section id="box-office"></section>
      </main>
    );
};

export default MovieDetails;