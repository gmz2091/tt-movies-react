/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */

import { Movies } from '../interfaces/movies.interface';

// get movies from api async await array movies and return an array of movies typescript

export async function getMovies(): Promise<Movies[]> {
  try {
    const response = await fetch('http://localhost:8080/api/movies');
    const data = await response.json();
    const { movies } = data;
    return movies;
  } catch (error) {
    throw new Error('Error getMovies');
  }
}
