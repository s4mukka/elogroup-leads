import styled from 'styled-components';

import { Layout } from '../../styles';

export const Container = styled(Layout)`
  form {
    display: flex;

    > div:first-child {
      margin-right: 80px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    > div:last-child {
      width: 100%;

      span {
        margin: 0 0 8px 4px;

        display: block;
      }

      table {
        th,
        td {
          height: 24px;
        }

        tr {
          th:first-child {
            width: 64px;
          }

          th:nth-child(2) {
            width: 500px;
          }

          th,
          td {
            input {
              margin: 0 auto;
            }
          }
        }

        p {
          width: 150px;

          text-align: center;
        }
      }
    }
  }
`;

export const Button = styled.button`
  margin-top: 24px;

  width: 566px;
  height: 56px;

  font-size: 18px;

  color: #fff;

  background: #0af;

  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
