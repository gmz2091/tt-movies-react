/* eslint-disable import/no-unresolved */
import React from 'react';
import { ButtonProps } from '../../../interfaces/button.interfaces';
import { Button as ButtonStyled } from './button.styled';

const Button = ({ title, onClick }: ButtonProps) => (
  <ButtonStyled onClick={onClick}>
    {title}
  </ButtonStyled>
);
export default Button;
