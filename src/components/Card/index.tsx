import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Lead } from '../../domain/models';
import { useList } from '../../hooks';

import { Container } from './styles';

type ItemParams = {
  type: string;
  lead: Lead;
  index: number;
  defaultStatus: Lead['status'];
};

type CardProps = {
  lead: Lead;
  index: number;
  defaultStatus: Lead['status'];
};

const Card = ({ lead, defaultStatus, index }: CardProps): JSX.Element => {
  const ref = useRef<any>();

  const { move } = useList();

  const [{ isDragging }, dragRef] = useDrag({
    type: defaultStatus === lead.status ? 'CARD' : 'EMPTY',
    item: {
      type: defaultStatus === lead.status ? 'CARD' : 'EMPTY',
      lead,
      index,
      defaultStatus,
    } as ItemParams,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: ItemParams) {
      const draggedIndex = item.index;
      const targetIndex = index;
      const draggedDefaultStatus = item.defaultStatus;
      const targetDefaultStatus = defaultStatus;

      if (draggedIndex !== targetIndex) {
        return;
      }

      if (draggedDefaultStatus === targetDefaultStatus) {
        return;
      }

      if (draggedDefaultStatus === 'scheduledMeeting') {
        return;
      }

      if (
        draggedDefaultStatus === 'confirmedData' &&
        targetDefaultStatus === 'potentialCustomer'
      ) {
        return;
      }

      if (
        draggedDefaultStatus === 'potentialCustomer' &&
        targetDefaultStatus === 'scheduledMeeting'
      ) {
        return;
      }

      move(targetIndex, targetDefaultStatus);

      item.defaultStatus = targetDefaultStatus;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      {defaultStatus === lead.status && lead && lead.name}
    </Container>
  );
};

export default Card;
