import { Container } from './styles';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <img
        src="https://elogroup.com.br/wp-content/uploads/2021/08/Logo-2.svg"
        alt="elogroup"
      />
      <h1>{title}</h1>
    </Container>
  );
};

export default Header;
