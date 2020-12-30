import './App.css';
import MovieList from './component/MovieList';
import {moviesList} from '../src/Data';
import React, { useState } from "react";
import AddMovie from './component/AddMovie';

function App() {
  const [movieList, setMovieList]= useState(moviesList);
  const addMovie=(title, posteUrl, description ,rate)=>{
    setMovieList([...movieList, {title: title, posteUrl: posteUrl, description: description, rate: rate}]);
  }
  return (
    <div>
      <MovieList movieList={movieList} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;
