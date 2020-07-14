import React, { useState } from "react";
// Stores
import movieStore from "../stores/movieStore";
// Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

const MovieList = () => {
  const [query, setQuery] = useState("");

  const movieList = movieStore.movies

    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {movieList.length === 0 ? "not found" : movieList}
    </div>
  );
};
export default MovieList;
