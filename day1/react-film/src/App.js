import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'


class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing
          FilmData={TMDB}
        />
        <FilmDetails />
      </div>
    );
  }
}

export default App;
