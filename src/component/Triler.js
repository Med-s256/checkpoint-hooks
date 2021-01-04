import React from "react";
import { Link } from "react-router-dom";

const Triler = (props) => {
  return (
    <div style={{ backgroundColor: "#f1a90d", width: "90%", margin: "auto" }}>
      {props.movieList
        .filter((movie) => String(movie.id) === props.match.params.id)
        .map((movie) => (
          <div key={movie.id} className="card1">
            <h1 style={{ color: "blueviolet" }}> Official Trailer</h1>
            <h2>{movie.title}</h2>
            <h6>{movie.description}</h6>
            <div style={{ textAlign: "center" }}>
              <iframe src={movie.triler} width="600px" height="300px" />
            </div>
            <Link to={`/`}>
              <button className="btn-back">Back</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Triler;
