import React, { useEffect, useState } from 'react';


function ImageSlider({ sliderData, setTrendingNext, sliderDataCopy }) {
  const [current, setCurrent] = useState(0);
  const length = sliderDataCopy.length - 1;
  
  //setting the "trending" state defined in TrendingMovie.js based on "current" state
  useEffect(() => {
		if(current === length){
      setTrendingNext(sliderDataCopy.slice(0, 3))
    }
    else if(current === 0 || current <= length - 3){
      setTrendingNext(sliderDataCopy.slice(current + 1, current + 4));
    
    }
    //if this expression is true I will slice the trending movies data with the current state at first and then add another sliced array with 
    else if(current >= (length - 3) && current !== length){

      setTrendingNext(
        sliderDataCopy
          .slice(current + 1)
          .concat(sliderDataCopy.slice( length - current === 1 ? 0 : 0, (length - current) - 1))
      );
    }
    console.log(current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);
  const nextSlide = () => {
    setCurrent(current === length ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
  };

  return (
  
    <section className="slider">
      <div
        className="left-arrow arrows"
        onClick={prevSlide}
        style={{ left: "32px" }}
      ></div>
      <div
        className="right-arrow arrows"
        onClick={nextSlide}
        style={{ right: "32px" }}
      ></div>
      
      {sliderDataCopy.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={
                  "https://image.tmdb.org/t/p/original" + slide.backdrop_path
                }
                alt=""
                className="image"
                width="837"
                height="541"
              />
            )}
          </div>
        );
      })}
    </section>
  
  );
}

export default ImageSlider;