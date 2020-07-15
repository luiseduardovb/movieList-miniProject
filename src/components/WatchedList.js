import React, { useState } from "react";
import { observer } from "mobx-react";
// Stores
import movieStore from "../stores/movieStore";
// Components
import WatchedItem from "./WatchedItem";
import WatchedSearchBar from "./WatchedSearchBar";

const WatchedList = () => {
  const [query, setQuery] = useState("");

  const watched = movieStore.movies.filter((watched) => watched.watch === true);

  const watchedList = watched

    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <WatchedItem movie={movie} />);
  return (
    <div>
      <WatchedSearchBar setQuery={setQuery} />
      {watchedList.length === 0 ? "not found" : watchedList}
    </div>
  );
};
export default observer(WatchedList);
