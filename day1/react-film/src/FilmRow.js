import React, { Component } from 'react';
// import './index.css';
import './App.css';
import FilmPoster from './FilmPoster'
class FilmRow extends Component {
    render() {
        let { title, release_date, poster_path, key } = this.props
        let date = new Date(release_date);
        let year = date.getFullYear();
        let posterUrl = <FilmPoster
            poster_path={poster_path}           
            />      
        return (
            <div className="film-row">                
                {posterUrl}
                <div className="film-summary">
                    <h1>{title}</h1>
                    <p>{year}</p>
                </div>
            </div>
        );
    }
}

export default FilmRow;
