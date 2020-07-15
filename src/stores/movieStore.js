import { decorate, observable } from "mobx";
// Data
import movies from "../movies";

class MovieStore {
  movies = movies;

  watchedMovie = (updatedMovie) => {
    const movie = this.movies.find((movie) => movie.id === updatedMovie.id);
    movie.watch = !movie.watch;
  };
  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieId);
  };
}
decorate(MovieStore, {
  movies: observable,
});

const movieStore = new MovieStore();
export default movieStore;

// updateCoffee = (updatedCoffee) => {
//   const coffee = this.coffees.find(
//     (coffee) => coffee.id === updatedCoffee.id
//   );
//   for (const key in coffee) coffee[key] = updatedCoffee[key];
// };
