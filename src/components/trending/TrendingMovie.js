import React, {  useEffect, useState} from 'react';
import ImageSlider from './ImageSlider';
import UpNext from './UpNext';



function TrendingMovie() {
  const [trending, setTrending] = useState();
  const [trendingCopy, setTrendingCopy] = useState();

  useEffect(() => {
    
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=c9f6a8755d74ccaf49688659b04654b7')
    .then(res => res.json())
    .then(data =>{
      setTrendingCopy(data);
           
    })
    
  }, [])
    return (
      <div className="trending">
        {trendingCopy ? (
          //prop drilling the trending movies data
          <>
            <ImageSlider sliderData={trending} setTrendingNext={setTrending} sliderDataCopy={trendingCopy.results} />
            <UpNext trendingMovieArray={trending}/>
          </>
        ) : (
          <p style={{ color: "white" }}>Loading...</p>
        )}

      </div>
    );
}

export default TrendingMovie;