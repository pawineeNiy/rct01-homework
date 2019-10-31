import React, { Component } from 'react';
import FilmRow from './FilmRow'
import './App.css';
class FilmListing extends Component {
    render() {
        const { films } = this.props.FilmData
        let allFilms = films.map((item, index) =>
            <FilmRow
                title={item.title}
                release_date={item.release_date}
                poster_path={item.poster_path}
                key={item.id}
            />)
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>

        );
    }
}

export default FilmListing;
