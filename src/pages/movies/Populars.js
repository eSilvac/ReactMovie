import React, { Component } from 'react';
import MovieList from './../../components/MoviesList/MoviesList.js'

import Container from 'react-bootstrap/Container'

class Popular extends Component {  
  render () {
    const path = "popular";
    return (
      <Container>
        <MovieList path={path} />
      </Container>
    );
  }
}

export default Popular;
