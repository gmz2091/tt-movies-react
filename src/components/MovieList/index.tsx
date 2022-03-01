/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/data.context';
import { Movies } from '../../interfaces/movies.interface';
import { MoviesVote } from '../../interfaces/votes.interface';
import { Container, Typography } from '../../styles/styles';
import Button from '../common/Button';
import Input from '../common/Input';
import Modal from '../common/Modal';
import {
  MovieListContainer, MovieListWrapper, MoviePoster, MovieTitle,
} from './styled';

const MovieList = () => {
  const [vote, setVote] = useState<MoviesVote[]>([]);
  const [showModal, setShowModal] = useState(false);

  const { movies: list, setData } = useContext(DataContext);

  const movieList = list.movies;

  const handleChange = (e: any) : void => {
    const movieTitle = e.target.value;
    const rest: Movies[] = movieList.filter((movie: {
      title: string }) => movie.title
      .toString()
      .toLowerCase()
      .includes(movieTitle));
    setData({ movies: rest });
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
      {showModal && (
      <Modal
        title="Submit Votes"
        setShowModal={() => {
          setShowModal(false);
        }}
      >
        <Container>
          {vote.length === 0 ? <Typography style={{ fontWeight: '300', textAlign: 'left', width: '100%' }}>0 votes...</Typography> : (
            vote.map((vote: MoviesVote) => (
              <MovieListContainer
                style={{
                  display: 'flex', width: '100%', padding: '0', marginTop: '10px',
                }}
                key={vote.id}
              >
                <Container style={{
                  display: 'flex', width: '100%', flexWrap: 'wrap', flexDirection: 'row', padding: '0',
                }}
                >
                  <Typography style={{ fontWeight: '500' }}>Title: </Typography>
                  <MovieTitle style={{ fontWeight: '300' }}>{vote.title}</MovieTitle>
                </Container>
                <Container style={{
                  display: 'flex', width: '100%', flexWrap: 'wrap', flexDirection: 'row', padding: '0',
                }}
                >
                  <Typography style={{ fontWeight: '500' }}>Category: </Typography>
                  <MovieTitle style={{ fontWeight: '300' }}>{vote.category}</MovieTitle>
                </Container>
              </MovieListContainer>
            ))
          )}
        </Container>
      </Modal>
      )}
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
      <Container>
        <Button
          onClick={() => {
            setShowModal(true);
          }}
          title="Submit votes"
        />
      </Container>
    </>
  );
};

export default MovieList;
