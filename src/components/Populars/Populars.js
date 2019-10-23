import React, { Component } from 'react';
import MovieCard from './../../components/MovieCard/MovieCard.js'
import Row from 'react-bootstrap/Row'

class Popular extends Component {
  constructor(props){
    super(props)
  }

  render () {
    const movies = this.props.movies;
    console.log(this.props)
    if (movies) {
      return (
        <Row className="p-3">
        {movies.map(movie => 
          <MovieCard movie={movie}/>
        )}
        </Row>
      );
    } else {
      return <h1></h1>
    }
  }
}

export default Popular;
