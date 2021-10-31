import styled from 'styled-components';

type ContainerProps = {
  type: string;
};

export const Container = styled.div<ContainerProps>`
  position: relative;

  width: ${(props) => (props.type === 'checkbox' ? 'unset' : '300px')};

  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    margin-left: 4px;
  }

  input {
    padding: 0 8px;

    height: ${(props) => (props.type === 'checkbox' ? 'unset' : '32px')};

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
