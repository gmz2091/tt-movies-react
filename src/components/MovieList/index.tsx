/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/data.context';
import { Movies } from '../../interfaces/movies.interface';
import { MoviesVote } from '../../interfaces/votes.interface';
import Button from '../common/Button';
import Input from '../common/Input';
import {
  MovieListContainer, MovieListWrapper, MoviePoster, MovieTitle,
} from './styled';

const MovieList = () => {
  const [vote, setVote] = useState<MoviesVote[]>([]);

  const { dataState: list } = useContext(DataContext);

  const movieList = list.movies;

  const handleChange = (e: any) : void => {
    const movieTitle = e.target.value;
    const results = movieList.filter((movie: {
      title: string }) => movie.title
      .toString()
      .toLowerCase()
      .includes(movieTitle));
    console.log(results);
  };

  const buttonClick = (id : string, title: string, category: string) : void => {
    const newVote: MoviesVote = {
      id,
      title,
      category,
    };
    setVote([...vote, newVote]);
  };
  return (
    <>
      <Input
        placeholder="Search a movie title..."
        type="string"
        onChange={(e: any) : void => handleChange(e)}
      />
      {movieList.length > 0 ? (
        <MovieListWrapper>
          {movieList.map((movie : Movies) => (
            <MovieListContainer key={movie.id}>
              <MovieTitle>
                {movie.title}
              </MovieTitle>
              <MoviePoster src={movie.photoUrL} />
              <Button
                title="Selected movie"
                onClick={() => {
                  buttonClick(movie.id, movie.title, movie.category);
                }}
              />
            </MovieListContainer>

          ))}
        </MovieListWrapper>
      ) : (<div> No movie registration </div>) }
      <Button title="Submit votes" />
    </>
  );
};

export default MovieList;
