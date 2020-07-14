import React from "react";
// Stores
import movieStore from "../stores/movieStore";
// Components
import MovieItem from "./MovieItem";

const MovieList = () => {
  const movieList = movieStore.movies.map((movie) => (
    <MovieItem movie={movie} />
  ));
  return <div>{movieList}</div>;
};
export default MovieList;
