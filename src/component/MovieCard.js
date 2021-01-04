import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      
        <h2>{movie.title}</h2>
        <h6>{movie.description}</h6>
        <div style={{textAlign:'center'}}><img src={movie.posteUrl} width="150px" height="200px" alt ='img' /></div>
        <p className='gold'>{''.padStart(movie.rate, '☆')}</p>
        
      
    </div>
  );
};
export default MovieCard;
