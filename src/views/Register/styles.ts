import styled from 'styled-components';

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
  width: calc(100% - 32px);
  height: 56px;

  font-size: 16px;

  background: #fff;

  border: 2px solid #000;
`;
