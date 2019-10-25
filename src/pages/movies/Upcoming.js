import React, { Component } from 'react';
import MovieList from './../../components/MoviesList/MoviesList.js'

import Container from 'react-bootstrap/Container'

class Upcoming extends Component {  
  render () {
    const path = this.props.location.pathname;
    return (
      <Container>
        <MovieList path={path} />
      </Container>
    );
  }
}

export default Upcoming;
