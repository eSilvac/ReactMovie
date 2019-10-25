import React, { Component } from 'react';
import MovieCard from './../../components/MovieCard/MovieCard.js'
import Row from 'react-bootstrap/Row'

class Favorites extends Component {
  render () {
    return (
      <Row className="p-3">
        <MovieCard />
      </Row>
    );
  }
}

export default Favorites;
