import React from "react";
import { observer } from "mobx-react";

//Stores
import movieStore from "../../stores/movieStore";

const WatchedButton = () => {
  return <button onClick={movieStore.watchedMovie}>Watched</button>;
};

export default observer(WatchedButton);
