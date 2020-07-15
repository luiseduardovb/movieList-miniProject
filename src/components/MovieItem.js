import React from "react";
import { observer } from "mobx-react";

//Components
import WatchedButton from "./buttons/WatchedButton";

//Stores
import movieStore from "../stores/movieStore";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <p>{movie.name}</p>
      <WatchedButton movie={movie} />
    </div>
  );
};
export default observer(MovieItem);
