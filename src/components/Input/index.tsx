import React from 'react';

import { Container } from './styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const Input = ({ type, name, label, ...rest }: InputProps): JSX.Element => (
  <Container>
    <label htmlFor={name}>{label}</label>
    <input id={name} name={name} type={type} {...rest} autoComplete="off" />
  </Container>
);

export default Input;
