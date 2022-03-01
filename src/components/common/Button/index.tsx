/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { ButtonProps } from '../../../interfaces/button.interfaces';
import { Button as ButtonStyled } from './button.styled';

const Button = ({ title, onClick, ...rest }: ButtonProps) => (
  <ButtonStyled onClick={onClick} {...rest}>
    {title}
  </ButtonStyled>
);
export default Button;
