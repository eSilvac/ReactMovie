import React, { Component } from 'react';
import Loading from './../../components/Layout/Loading'
import MovieCard from './../../components/MovieCard/MovieCard.js'
import Row from 'react-bootstrap/Row'

class Popular extends Component {
  render () {
    const movies = this.props.movies;
    if (movies) {
      return (
        <Row className="p-3">
          {movies.map(movie => 
            <MovieCard movie={movie}/>
          )}
        </Row>
      );
    } else {
      return <Loading />
    }
  }
}

export default Popular;
