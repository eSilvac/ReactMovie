import React, { Component } from 'react';
import MovieList from './../../components/MoviesList/MoviesList.js'

import Container from 'react-bootstrap/Container'

class Latest extends Component {  
  render () {
    const path = "latest";
    return (
      <Container>
        <MovieList path={path} />
      </Container>
    );
  }
}

export default Latest;
