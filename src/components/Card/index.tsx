import { Container } from './styles';

type CardProps = {
  content: string;
  empty: boolean;
};

const Card = ({ content, empty }: CardProps): JSX.Element => {
  return <Container>{!empty && content}</Container>;
};

export default Card;
