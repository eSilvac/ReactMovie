import React, { Component } from 'react';
import axios from 'axios';
import Loading from './../../components/Layout/Loading'
import Populars from './../../components/Populars/Populars'
import Favorites from './../../components/Favorites/Favorites'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const MoviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  timeout: 1000
});

class Movies extends Component {
  state = {
    data: [],
    error: null,
    loading: false  
  };
  
  async componentDidMount() {
    this.setState({
      loading: true
    });

    try {
      const { data } = await MoviesApi.get("/popular?api_key=3d7fd0461ae8d0f2e808c37fb41950d7");
      this.setState({ data });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({
        loading: false
      });
      console.log("la petición termino");
    }
  }

  render () {
    const { data, error, loading } = this.state;

    if (loading) return <Loading/>;
    if (error) return <p>Upps! Algo salío mal</p>;
    return (
      <Tabs fill defaultActiveKey="popular" id="movies-tab">
        <Tab eventKey="popular" title="Popular Movies" className="border border-top-0">
         <Populars movies={data.results} />
        </Tab>

        <Tab eventKey="favorites" title="Favorites Movies" className="border border-top-0">
          <Favorites />
        </Tab>
      </Tabs>
    );
  }
}

export default Movies;
