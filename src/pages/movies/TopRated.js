import React, { Component } from 'react';
import MoviesList from './../../components/MoviesList/MoviesList.js'

import Container from 'react-bootstrap/Container'

class TopRated extends Component {  
  render () {
    const path = "top_rated";
    return (
      <Container>
        <MoviesList path={path} />
      </Container>
    )}
}

export default TopRated;
