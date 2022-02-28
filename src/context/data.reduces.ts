/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */

import { Movies } from '../interfaces/movies.interface';
import { MovieInterface } from './data.provider';

type Action =
    | { type: 'SET_DATA'; payload: Movies[] }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_ERROR'; payload: string };

export const dataReducer = (state: MovieInterface, action: Action) : MovieInterface => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
