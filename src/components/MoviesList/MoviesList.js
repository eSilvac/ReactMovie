import React, { Component } from 'react';
import Loading from './../Loading/Loading.js'
import MovieCard from './../MovieCard/MovieCard.js'
import MoviesApi from "./../../helpers/api";

import Row from 'react-bootstrap/Row'

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
      const { data } = await MoviesApi.get(this.props.path + "?api_key=3d7fd0461ae8d0f2e808c37fb41950d7");
      this.setState({ data: data.results });
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
      <Row className="p-3">
        {data.map(({id}) => (
          <MovieCard movieId={id}/>
        ))}
      </Row>
    );
  }
}

export default Movies;
