import React, { Component } from 'react';
import MovieList from './../../components/MoviesList/MoviesList.js'

import Container from 'react-bootstrap/Container'

class NowPlaying extends Component {  
  render () {
    const path = "now_playing";
    return (
      <Container>
        <MovieList path={path} />
      </Container>
    );
  }
}

export default NowPlaying;
