import styled from 'styled-components';

import { Table } from '../../styles';

export const Container = styled(Table)`
  width: 100%;
`;

export const Title = styled.th`
  height: 80px;
`;

export const Message = styled.div`
  width: 100%;

  font-size: 18px;
  font-style: italic;
  text-align: center;

  opacity: 0.7;
`;
