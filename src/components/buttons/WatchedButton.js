import React from "react";
import { observer } from "mobx-react";

//Stores
import movieStore from "../../stores/movieStore";

const WatchedButton = ({ movie }) => {
  return (
    <button onClick={() => movieStore.watchedMovie(movie)}>
      {movie.watch ? "Unwatch" : "watched"}
    </button>
  );
};

export default observer(WatchedButton);
