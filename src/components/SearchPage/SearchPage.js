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
        console.log(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <main id="search-page">
      
      {/*after checking if the data has arrived and the filter is not 'all' media types I will add result component by mapping the data  */
      searchRes && filter !== "multi" ? (
        searchRes.map((result) => <Result result={result} filter={filter} />)
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default SearchPage;