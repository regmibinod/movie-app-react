import React from "react";
import { useState } from "react";
function MovieCard({movie}) {
const {title, rating, year, image} = movie;

  return (
    <div className="movie-card">
 
      <img src={`${image}`} alt={title} />

      <div className="movie-content">
        <h2>Movie: {title}</h2>

        <div className="movie-meta">
          <p>⭐ {rating}</p>
          <p>📅 {year} A.D</p>
         
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
