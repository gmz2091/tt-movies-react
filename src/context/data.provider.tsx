/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import React, { useReducer } from 'react';
import { Movies } from '../interfaces/movies.interface';
import { ProviderMovieProps } from '../interfaces/provider.interface';
import { DataContext } from './data.context';
import { dataReducer } from './data.reduces';

export interface MovieInterface {
  movies: Movies[];
}

const INITIAL_STATE: MovieInterface = {
  movies: [],
};

const MovieProvider = ({ children }: ProviderMovieProps) => {
  const [dataState, dispatch] = useReducer(dataReducer, INITIAL_STATE);

  const setData = (data: MovieInterface) => {
    dispatch({ type: 'SET_DATA', payload: data });
  };

  return (
    <DataContext.Provider value={{ dataState, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default MovieProvider;
