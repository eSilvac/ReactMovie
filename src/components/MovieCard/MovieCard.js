import React, { Component } from "react";
import axios from 'axios';
import './MovieCard.css';
import Loading from './../../components/Loading/Loading'
import Col from "react-bootstrap/Col";

class MovieCard extends Component {
  state = {
    data: [],
    error: null,
    loading: true  
  };
  
  async componentDidMount() {
    this.setState({
      loading: true
    });

    try {
      const { data } = await axios.get("https://api.themoviedb.org/3/movie/"+ this.props.movieId +"?api_key=3d7fd0461ae8d0f2e808c37fb41950d7");
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

  render() {
    const { error, loading } = this.state;
    
    if (loading) return <Loading/>;
    if (error) return <p>Upps! Algo salío mal</p>;
    
    const movie = this.state.data
    if (movie) {
      return (
        <Col xs={6} key={movie.id} className="movie mb-3">
          <div className="d-flex flex-row w-100">
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className="h-100" alt="Poster"/>
            <div className="content d-flex flex-column border flex-fill p-3 h-100">
              <div className="header d-flex flex-row align-items-end justify-content-between">
                <h4 className="mr-2">{movie.title}</h4>
                <div className="rating d-flex flex-row align-self-start">
                  <i className="far fa-star fa-lg align-self-center mb-1 mr-2"></i>
                  <h4 className="m-0">{movie.vote_average}</h4>
                </div>
              </div>

              <div className="details mb-2">
                <span>{movie.runtime} mins</span>
                <span className="ml-3">{this.showGeneres()}</span>
              </div>

              <div className="body flex-fill">
                <p className="text-muted h-100 w-100">{movie.tagline}</p>
              </div>

              <div className="fotter mt-auto d-flex flex-row justify-content-between">
                <button id="trailer" type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">Trailer</button>
                <span id="btn-favorite" className="btn-favorite align-self-center"><i className="far fa-heart"></i> Favoritos</span>
              </div>
            </div>
          </div>
        </Col>
      ) 
    } else {
      return "";
    }
  }

  showGeneres() {
    let genresNames = [];
    let genres = this.state.data.genres;
    if (genres.length >= 2) {
      genresNames = genres.slice(0, 2).map(movie => {
        return movie.name;
      })
    } else {
      genresNames.push(genres[0].name);
    }

    return(genresNames.join(", "));
  }

}

export default MovieCard;
