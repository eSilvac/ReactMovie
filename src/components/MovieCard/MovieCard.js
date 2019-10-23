import React, { Component } from "react";
import './MovieCard.css';
import Col from "react-bootstrap/Col";

class MovieCard extends Component {
  render() {
    return (
      <Col  className="movie">
        <div className="d-flex flex-row w-100">
          <img src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" className="h-100"/>
          <div className="content d-flex flex-column border flex-fill p-3 h-100">
            <div className="header d-flex flex-row align-items-end justify-content-between">
              <h4 className="mr-2">Joker</h4>
              <div className="rating d-flex flex-row align-self-start">
                <i className="far fa-star fa-lg align-self-center mb-1 mr-2"></i>
                <h4 className="m-0">8.3</h4>
              </div>
            </div>

            <div className="details mb-2">
              <span>120 Min</span>
              <span>10/10/2019</span>
              <span>Action</span>
            </div>

            <div className="body flex-fill">
              <p className="text-muted h-100 w-100">Esta es una descripcion...</p>
            </div>

            <div className="fotter mt-auto d-flex flex-row justify-content-between">
              <button id="trailer" type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">Trailer</button>
              <span id="btn-favorite" className="btn-favorite align-self-center"><i class="far fa-heart"></i> Favoritos</span>
            </div>
          </div>
        </div>
      </Col>
    )
  }
}

export default MovieCard;
