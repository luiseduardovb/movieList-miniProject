import React from "react";
import { observer } from "mobx-react";

//Components
import WatchedButton from "./buttons/WatchedButton";

//Stores
import movieStore from "../stores/movieStore";
import DeleteButton from "./buttons/DeleteButton";

const WatchedItem = ({ movie }) => {
  return (
    <div>
      <p>{movie.name}</p>
      <WatchedButton movie={movie} />
      <DeleteButton movieId={movie.id} />
    </div>
  );
};
export default observer(WatchedItem);
