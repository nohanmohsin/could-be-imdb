import React, { useEffect, useState } from 'react';

const PersonDetails = ({ details }) => {
  const [photos, setPhotos] = useState();
  const [credits, setCredits] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${details.id}/tagged_images?api_key=c9f6a8755d74ccaf49688659b04654b7&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data.results));
    fetch(
      `https://api.themoviedb.org/3/person/${details.id}/combined_credits?api_key=c9f6a8755d74ccaf49688659b04654b7&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCredits(data.cast));
    
  }, []);
  return (
    <div className="person-details-container">
      <main id="person-details">
        <section id="small-details">
          <h1>{details.name}</h1>
          <span>{details.known_for_department}</span>
        </section>
        <section id="profile_pic">
          <img
            src={`https://image.tmdb.org/t/p/original/${details.profile_path}`}
            alt=""
          />
        </section>
        <section id="biography">
          <p id="bio-para">{details.biography}</p>
          <div id="birthday">
            <h6>Born:</h6>
            <span>
              {details.birthday} in {details.place_of_birth}
            </span>
          </div>
        </section>
        <section id="photos">
          {photos ? (
            photos.map((photo) => (
              <img
                src={`https://image.tmdb.org/t/p/original/${photo.file_path}`}
                alt=""
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
        <section id="credit">
          {credits ? (
            credits.map((credit) => (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${credit.poster_path}`}
                  alt=""
                />
                <span className='credited-media-name'>{credit.name}</span>
                <span className='credited-media-character'>{credit.character}</span>
                <span className='credited-media-release-date'>({credit.first_air_date})</span>

              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
        <section id="filmography">
        {credits ? (
            credits.map((credit) => (
              <div>
                
                <h6 className='credited-media-name'>{credit.name}</h6>
                <span className='credited-media-character'>({credit.character})</span>

              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
        
      </main>
    </div>
  );
};

export default PersonDetails;