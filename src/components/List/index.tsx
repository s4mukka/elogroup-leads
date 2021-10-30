import Card from '../Card';

import { Container, Title } from './styles';

const List = (): JSX.Element => {
  return (
    <Container>
      <tr>
        <Title>Cliente em Potencial</Title>
        <Title>Dados Confirmados</Title>
        <Title>Reunião Agendada</Title>
      </tr>
      <tr>
        <Card content="Org. Internacionais" empty={false} />
        <Card content="Org. Internacionais" empty />
        <Card content="Org. Internacionais" empty />
      </tr>
      <tr>
        <Card content="Ind. Farm. LTDA" empty />
        <Card content="Ind. Farm. LTDA" empty={false} />
        <Card content="Ind. Farm. LTDA" empty />
      </tr>
    </Container>
  );
};

export default List;
