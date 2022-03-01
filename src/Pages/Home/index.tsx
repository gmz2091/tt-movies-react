/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useContext } from 'react';
import { iconArrow } from '../../assets/icons';
import Button from '../../components/common/Button';
import MovieList from '../../components/MovieList';
import { DataContext } from '../../context/data.context';
import { HomeProps } from '../../interfaces/home.interface';
import { Container, Typography } from '../../styles/styles';
import { getMovies } from '../../utils/getMovies';

const Home = ({ title = 'My Custom App' }: HomeProps) => {
  const { setData } = useContext(DataContext);

  const MoviesList = async () => {
    const movies: any = await getMovies();
    setData(movies);
  };

  useEffect(() => {
    MoviesList();
  }, []);

  const styles = {
    arrowStyle: {
      borderRadius: '100%',
      display: 'flex',
      width: '50px',
      height: '50px',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'absolute',
      top: '25px',
      right: '80px',
      padding: '0',
    },
  };

  return (
    <>
      <Button style={styles.arrowStyle} title={iconArrow} onClick={MoviesList} />
      <Container>
        <Typography>{title}</Typography>
      </Container>
      <MovieList />
    </>
  );
};

export default Home;
