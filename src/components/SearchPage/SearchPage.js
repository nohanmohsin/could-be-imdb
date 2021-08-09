import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Result from './Result';

const SearchPage = () => {
  const { query, filter } = useParams();
  const [searchRes, setSearchRes] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/${filter}?api_key=c9f6a8755d74ccaf49688659b04654b7&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchRes(data.results);
        
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  switch (filter) {
    case "multi":
      return (
        <main id="search-page">
          {
            /*if the filter is mutli we are getting all the types of media and 
            I am only using 2 of every type of media just like imdb */
            searchRes ? (
              <>
                <h2 className='search-heading'>Titles</h2>

                <Result
                  result={
                    searchRes.filter((res) => res.media_type === "movie" || res.media_type === "tv")[0]
                  }
                  filter={filter}
                />
                <Result
                  result={
                    searchRes.filter((res) => res.media_type === "movie" || res.media_type === "tv")[1]
                  }
                  filter={filter}
                />
                <h2 className='search-heading'>Names</h2>
                <Result
                  result={
                    searchRes.filter((res) => res.media_type === "person")[0]
                  }
                  filter={filter}
                />
                <Result
                  result={
                    searchRes.filter((res) => res.media_type === "person")[1]
                  }
                  filter={filter}
                />

                <h2 className='search-heading'>Companies</h2>
                <Result
                  result={
                    searchRes.filter((res) => res.media_type === "company")[0]
                  }
                  filter={filter}
                />
                <Result
                  result={
                    searchRes.filter((res) => res.media_type === "company")[1]
                  }
                  filter={filter}
                />
              </>
            ) : (
              <p>Loading...</p>
            )
          }
        </main>
      );
    case 'movie':
    case 'tv':
      return(
        <main id="search-page">
          {
             
            searchRes ? (
              searchRes.map((result) => (
                <Result result={result} filter={filter} />
              ))
            ) : (
              <p>Loading...</p>
            )
          }
        </main>
      )
    
    case 'person':
      return(
        <main id="search-page">
          {
             
            searchRes ? (
              searchRes.map((result) => (
                <Result result={result} filter={filter} />
              ))
            ) : (
              <p>Loading...</p>
            )
          }
        </main>
      )
    
    case 'company':
      return(
        <main id="search-page">
          {
             
            searchRes ? (
              searchRes.map((result) => (
                <Result result={result} filter={filter} />
              ))
            ) : (
              <p>Loading...</p>
            )
          }
        </main>
      )
    default:
      return (
        <main id="search-page">
          <span className="wrong-link">{"you got the wrong link bud :("}</span>
        </main>
      );
  }
  
};

export default SearchPage;