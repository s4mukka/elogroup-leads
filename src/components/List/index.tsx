import { Lead } from '../../domain/models';
import Card from '../Card';

import { Container, Title } from './styles';

type ListProps = {
  listLeads: Lead[];
};

const List = ({ listLeads }: ListProps): JSX.Element => {
  return (
    <Container>
      <thead>
        <tr>
          <Title>Cliente em Potencial</Title>
          <Title>Dados Confirmados</Title>
          <Title>Reunião Agendada</Title>
        </tr>
      </thead>

      <tbody>
        {listLeads.map((lead) => (
          <tr key={`${lead.name}-${Math.random()}`}>
            <Card
              content={lead.name}
              empty={lead.status !== 'potentialCustomer'}
            />
            <Card content={lead.name} empty={lead.status !== 'confirmedData'} />
            <Card
              content={lead.name}
              empty={lead.status !== 'scheduledMeeting'}
            />
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default List;
