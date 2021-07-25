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
        style={{ left: "1px" }}
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          
        >
          <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
        </svg>
      </div>
      <div
        className="right-arrow arrows"
        onClick={nextSlide}
        style={{ right: "1px" }}
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          
          viewBox="0 0 24 24"
          fill="white"
          
        >
          <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
        </svg>
      </div>

      {sliderDataCopy.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <img
                src={
                  "https://image.tmdb.org/t/p/original" + slide.backdrop_path
                }
                alt=""
                className="image"
                width="837"
                height="541"
                />
                <div id="overlay"></div>
              </div>
            )}
            
            
          </div>
        );
      })}
    </section>
  );
}

export default ImageSlider;