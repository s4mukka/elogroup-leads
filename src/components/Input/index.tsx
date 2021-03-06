import React from 'react';

import { Container } from './styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  type: string;
  label?: string;
  error?: string;
};

const Input = ({
  type,
  name,
  label,
  error,
  ...rest
}: InputProps): JSX.Element => (
  <Container type={type}>
    {label && <label htmlFor={name}>{label}</label>}
    <input id={name} name={name} type={type} {...rest} autoComplete="off" />
    {error && <span>{error}</span>}
  </Container>
);

export default Input;
