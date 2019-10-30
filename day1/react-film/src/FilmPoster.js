import React, { Component } from 'react';
import './index.css';
class FilmPoster extends Component {

    render() {
        let { poster_path } = this.props        
        let posterUrl = 'https://image.tmdb.org/t/p/w780/' + poster_path        
        return (
            <img src={posterUrl} alt="" />          
        );
    }
}

export default FilmPoster;
