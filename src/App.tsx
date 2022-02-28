/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { FC } from 'react';
import Home from './Pages/Home';
import GlobalStyle from './styles/global.styled';
import MovieProvider from './context/data.provider';

const App: FC = () => (
  <MovieProvider>
    <GlobalStyle />
    <Home />
  </MovieProvider>
);

export default App;
