import './App.css';
import MovieList from './component/MovieList';
import {moviesList} from '../src/Data';
import React, { useState } from "react";
import AddMovie from './component/AddMovie';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Triler from './component/Triler'
function App() {
  const [movieList, setMovieList]= useState(moviesList);
  const addMovie=(title, posteUrl, description ,rate,id , triler)=>{title===''||id===''||posteUrl===''||triler===''||rate===''?alert('enter missed data'):
    setMovieList([...movieList, {title: title, posteUrl: posteUrl, description: description, rate: rate, id: id, triler: triler}]);
  }
  return (
    <div>
      <Router>
      <Route exact path='/' render = {(props)=><MovieList movieList={movieList} {...props}/>} />  
      <Route path='/add' render={(props)=> <AddMovie addMovie={addMovie} {...props} />} />
      <Route path='/:id' render={(props)=><Triler movieList={movieList} {...props} />}/>

      </Router>
    </div>
  );
}

export default App;
