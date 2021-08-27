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
      // eslint-disable-next-line
    }, [])
    return (
      <main id="movie-details">
        <section className="hero-section">
          <div style={{ margin: "1.5rem 0 1rem 0" }}>
            <h1 className="title">{title}</h1>
            <ul className="small-details">
              <li id="release-date">{release_date}</li>
              <li id="age-rating">{adult ? <>18+</> : <>PG-13</>}</li>
              <li id="runtime">{runtime} Min</li>
            </ul>
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
          <ul id="genres-list">
            {genres.map((genre) => (
              <li className="genre">
                <span>{genre.name}</span>
              </li>
            ))}
          </ul>
          <p id="storyline">{details.overview}</p>
        </section>

        <div className="other-details-container">
          <section className="videos">
            <div className="section-headline">
              <div className="presentation"></div>
              <h2>Videos</h2>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
              </svg>
            </div>

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
            <div className="section-headline">
              <div className="presentation"></div>
              <h2>Photos</h2>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
              </svg>
            </div>
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
            <div className="section-headline">
              <div className="presentation"></div>
              <h2>Top Cast</h2>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
              </svg>
            </div>
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
        </div>
      </main>
    );
};

export default MovieDetails;