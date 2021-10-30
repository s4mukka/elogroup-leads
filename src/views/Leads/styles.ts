import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 80px;

  display: flex;
  flex-direction: column;

  header {
    margin-bottom: 80px;

    display: flex;
    align-items: center;

    img {
      margin-right: 120px;

      height: 80px;
    }

    h1 {
      font-weight: 500;
    }
  }
`;

export const Button = styled(Link)`
  margin-bottom: 16px;

  width: 450px;
  height: 56px;

  font-size: 18px;

  color: #fff;

  background: #0af;

  display: flex;
  align-items: center;
  justify-content: center;
`;
