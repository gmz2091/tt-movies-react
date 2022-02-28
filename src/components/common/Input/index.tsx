/* eslint-disable import/no-unresolved */
import React from 'react';
import { InputProps } from '../../../interfaces/input.interface';
import { InputContainer, Input as InputText } from './input.styled';

const Input = ({ type, placeholder, onChange }: InputProps) => {
  console.log();
  return (
    <InputContainer>
      <InputText type={type} placeholder={placeholder} onChange={onChange} />
    </InputContainer>

  );
};

export default Input;
