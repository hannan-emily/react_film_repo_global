import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render () {

    const { films } = this.props

    let allFilms = films.map(function(film,index){
      return (
        <FilmRow
        key={film.id}
        title={film.title}
        date={film.release_date}
        url={film.poster_path}
        backdrop_path={film.backdrop_path}
        overview={film.overview}
        />
      )
    })

    return (
      <div>
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {allFilms}
        </div>
      </div>
    )
  }
}

export default FilmListing;
