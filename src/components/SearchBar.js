import React from "react";

//Styling
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for movies"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
