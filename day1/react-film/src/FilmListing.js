import React, { Component } from 'react';
import FilmRow from './FilmRow'
class FilmListing extends Component {
    render() {
        let { films } = this.props.FilmData
        let allFilms = films.map((item, index) =>
            <FilmRow
                title={item.title}
                release_date={item.release_date}
                poster_path={item.poster_path}
                key={item.id}
            />)
        return (
            <h1>{allFilms}</h1>
        );
    }
}

export default FilmListing;
