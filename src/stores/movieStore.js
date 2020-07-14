import { decorate, observable } from "mobx";
// Data
import movies from "../movies";

class MovieStore {
  movies = movies;
}
decorate(MovieStore, {
  movies: observable,
});

const movieStore = new MovieStore();
export default movieStore;
