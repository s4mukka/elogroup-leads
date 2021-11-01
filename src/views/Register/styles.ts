import styled from 'styled-components';

import { Button as BaseButton } from '../../styles';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    padding: 40px 40px 64px;

    border: 2px solid #000;

    img {
      margin-bottom: 32px;

      width: 100%;
    }

    div {
      margin: 0 16px 24px;
    }

    button {
      margin: 16px 16px 0;
    }
  }
`;

export const Button = styled.button`
  ${BaseButton}

  width: calc(100% - 32px);

  background: #fff;

  border: 2px solid #000;
`;
