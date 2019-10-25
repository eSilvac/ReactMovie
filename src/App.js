import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Application from './pages/layout/Application.js'
import NowPlaying from './pages/movies/NowPlaying.js'
import Populars from './pages/movies/Populars.js'
import TopRated from './pages/movies/TopRated.js'
import Upcoming from './pages/movies/Upcoming.js'

class App extends Component {
  render() {
    return (	
      <Router>
	<Application />
        <Switch>
          <Route path="/top-rated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/now-playing" component={NowPlaying} />
          <Route path="/popular" component={Populars} />
          <Route path="/" component={Populars} />
        </Switch>
      </Router>	

    );
  }
}

export default App;
