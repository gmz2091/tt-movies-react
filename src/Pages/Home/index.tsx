/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useContext } from 'react';
import MovieList from '../../components/MovieList';
import { DataContext } from '../../context/data.context';
import { HomeProps } from '../../interfaces/home.interface';
import { Container, Typography } from '../../styles/styles';
import { getMovies } from '../../utils/getMovies';

const Home = ({ title = 'My Custom App' }: HomeProps) => {
  const { setData } = useContext(DataContext);

  const MoviesList = async () => {
    const data = await getMovies();
    setData(data);
  };

  useEffect(() => {
    MoviesList();
  }, []);

  return (
    <>
      <Container>
        <Typography>{title}</Typography>
      </Container>
      <MovieList />
    </>
  );
};

export default Home;
