import React, { useState } from "react";
import { observer } from "mobx-react";

// Stores
import movieStore from "../stores/movieStore";
// Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

const MovieList = () => {
  const [query, setQuery] = useState("");

  const unwatched = movieStore.movies.filter((movie) => movie.watch === false);

  const movieList = unwatched

    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {movieList.length === 0 ? "not found" : movieList}
    </div>
  );
};
export default observer(MovieList);
