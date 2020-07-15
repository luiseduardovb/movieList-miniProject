import React from "react";
import { observer } from "mobx-react";

//Stores
import movieStore from "../../stores/movieStore";

const DeleteButton = ({ movieId }) => {
  const handleDelete = () => movieStore.deleteMovie(movieId);
  return <button onClick={handleDelete}>Delete</button>;
};

export default observer(DeleteButton);
