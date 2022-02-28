/* eslint-disable import/prefer-default-export */
/* eslint-disable no-void */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
import { createContext } from 'react';
import { MoviesContextProps } from '../interfaces/movie.context';

export const DataContext = createContext<MoviesContextProps>({} as MoviesContextProps);
