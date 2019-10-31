import React, { Component } from 'react';
// import './index.css';
import './App.css';
import FilmPoster from './FilmPoster'
class FilmRow extends Component {
    render() {
        let { title, release_date, poster_path, key } = this.props
        let year = new Date(release_date);
        let fullyear = year.getFullYear();
        let posterUrl = <FilmPoster
            poster_path={poster_path}           
            />      
        return (
            <div className="film-row">                
                {posterUrl}
                <div className="film-summary">
                    <h1>{title}</h1>
                    <p>{fullyear}</p>
                </div>
            </div>
        );
    }
}

export default FilmRow;
