/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { MovieInterface } from '../context/data.provider';
import { Movies } from './movies.interface';

export interface MoviesContextProps {
    dataState: MovieInterface
    setData: (data: MovieInterface)=> void;
}
