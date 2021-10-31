import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;

  th,
  td {
    border: 2px solid #000;
  }

  th {
    font-weight: 500;

    color: #fff;

    background: #aaa;
  }

  font-size: 16px;

  tbody tr:nth-child(odd) {
    background-color: #dddddd;
  }
`;
