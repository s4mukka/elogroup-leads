import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 300px;

  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    margin-left: 4px;
  }

  input {
    padding: 0 8px;

    height: 32px;

    border: 1px solid #000;
  }

  span {
    position: absolute;

    top: 100%;
    left: 4px;

    font-size: 12px;
    line-height: 12px;

    color: #f33;
  }
`;
