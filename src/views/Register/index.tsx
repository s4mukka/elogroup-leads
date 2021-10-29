import * as yup from 'yup';

import { Input } from '../../components';
import useForm from '../../hooks/useForms';

import { Container, Button } from './styles';

const Register = (): JSX.Element => {
  const { values, errors, changeValues } = useForm({
    initialValues: {
      user: '',
      password: '',
      confirmPassword: '',
    },
    scheme: yup.object().shape({
      user: yup.string().required('Campo obrigatório'),
      password: yup
        .string()
        .matches(
          /(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[a-z\d@$!%*#?&]/,
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

  return (
    <Container>
      <form>
        <img
          src="https://elogroup.com.br/wp-content/uploads/2021/08/Logo-2.svg"
          alt="elogroup"
        />
        <Input
          type="text"
          name="user"
          label="Usuário *"
          error={errors.user}
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
