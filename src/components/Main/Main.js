import React from 'react';
import TrendingMovie from './trendingMovie/TrendingMovie.js';


const Main = () => {
    return (
        <main>
        <TrendingMovie />
        <section id="static-featured-today">
            <h2>Featured Today</h2>
            <div id="featured">
            <img src={'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg'} alt="cute cat :3" />
            <span>Nothing was featured today :p here's a picture of a cat :3</span>
            
            </div>
        </section>
        </main>
        
    );
};

export default Main;