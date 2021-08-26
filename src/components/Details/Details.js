import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieDetails from './diffMedia/MovieDetails';
import PersonDetails from './diffMedia/PersonDetails';
import TVDetails from './diffMedia/TVDetails';

const Details = () => {
    const {media_type, id} = useParams();
    const [detailsData, setDetailsData] = useState();
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=c9f6a8755d74ccaf49688659b04654b7&language=en-US`)
          .then((res) => res.json())
          .then((data) => {
            setDetailsData(data);
            console.log(data);
          });
        // eslint-disable-next-line
    }, [])
    switch (media_type) {
      case "movie":
        return (
          <>
            {detailsData ? (
              <MovieDetails details={detailsData} />
            ) : (
              <p>Loading...</p>
            )}
          </>
        );

      case "tv":
        return (
          <>
            {detailsData ? (
              <TVDetails details={detailsData} />
            ) : (
              <p>Loading...</p>
            )}
          </>
        );
      case "person":
        return (
          <>
            {detailsData ? (
              <PersonDetails details={detailsData} />
            ) : (
              <p>Loading...</p>
            )}
          </>
        );

      
      default:
        break;
    }
    
};

export default Details;