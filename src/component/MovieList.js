import React, { useState } from "react";
import { starList } from "../Data";
import MovieCard from "./MovieCard";

const MovieList = ({ movieList }) => {
  const [search, setSearch] = useState("");
  const [star, setStar] = useState(starList);
  const changeColor=(id)=>{
    setStar(star.map(el=>el.id===id?{icon: el.icon, isColored:!el.isColored, id: el.id}:el))
  }
  return (
    <div>
      <div className="filter">
        <input
          type="text"
          value={search}
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div>
          {star.map((el) => (
            <span className={el.isColored ?'golder':'star'} key={el.id} onClick={()=>changeColor(el.id)}>{el.icon}</span>
          ))}
        </div>
      </div>
      <div>
        <h1 className="content">My movies</h1>
      </div>
      <div className="lcard">
        {movieList.filter(movie=>movie.title.toUpperCase().includes(search.toUpperCase())).filter(movie=>movie.rate>=star.filter(el=>el.isColored===true).length).map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
