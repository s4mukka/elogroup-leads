import { Lead } from '../../domain/models';
import Card from '../Card';

import { Container, Title, Message } from './styles';

type ListProps = {
  listLeads: Lead[];
};

const List = ({ listLeads }: ListProps): JSX.Element => {
  const statusArray: Lead['status'][] = [
    'potentialCustomer',
    'confirmedData',
    'scheduledMeeting',
  ];

  return (
    <Container>
      <thead>
        <tr>
          <Title>Cliente em Potencial</Title>
          <Title>Dados Confirmados</Title>
          <Title>Reunião Agendada</Title>
        </tr>
      </thead>

      {!listLeads.length && (
        <Message>Ainda não tem nenhuma Lead cadastrada</Message>
      )}

      <tbody>
        {listLeads.map((lead, index) => (
          <tr key={`${lead.name}`}>
            {statusArray.map((card) => (
              <Card
                key={`${lead.name}-${card}`}
                lead={lead}
                index={index}
                defaultStatus={card}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default List;
