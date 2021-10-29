import { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import * as yup from 'yup';

import { Input } from '../../components';
import { User } from '../../domain/models';
import { RegisterUser } from '../../domain/usecases';
import { useForm } from '../../hooks';

import { Container, Button } from './styles';

type RegisterProps = {
  service: RegisterUser;
};

const Register = ({ service }: RegisterProps): JSX.Element => {
  const history = useHistory();

  const [hasError, setHasError] = useState(true);

  const { values, errors, changeValues } = useForm({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    scheme: yup.object().shape({
      username: yup.string().required('Campo obrigatório'),
      password: yup
        .string()
        .matches(
          /(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?.&])[a-z\d@$!%*#?.&]/,
          'Deve conter ao menos um caractere especial, um número e uma letra'
        )
        .min(8, 'Deve ter no mínimo 8 caracteres')
        .required('Campo obrigatório'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Senha diferente')
        .required('Campo obrigatório'),
    }),
  });

  useEffect(() => {
    setHasError(
      !!errors.confirmPassword || !!errors.password || !!errors.confirmPassword
    );
  }, [errors]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (hasError) {
      return;
    }

    const user: User = {
      username: values.username,
      password: values.password,
    };

    service.register(user);
    history.push('/leads');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img
          src="https://elogroup.com.br/wp-content/uploads/2021/08/Logo-2.svg"
          alt="elogroup"
        />
        <Input
          type="text"
          name="username"
          label="Usuário *"
          error={errors.username}
          onChange={changeValues}
        />
        <Input
          type="password"
          name="password"
          label="Password *"
          placeholder="********"
          error={errors.password}
          onChange={changeValues}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="********"
          label="Confirmação Password *"
          error={errors.confirmPassword}
          onChange={changeValues}
        />
        <Button type="submit">Registrar</Button>
      </form>
    </Container>
  );
};

export default Register;
