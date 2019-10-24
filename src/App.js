import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies/Movies'
import Container from 'react-bootstrap/Container'


class App extends Component {
  render() {
    return (
      <Container className="my-5">
        <h1 className="text-center mt-3 mb-5">Your Movies!</h1>
        <Movies />
      </Container>
    );
  }
}

export default App;
