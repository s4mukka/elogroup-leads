import styled, { css } from 'styled-components';

type ContainerProps = {
  isDragging: boolean;
};

export const Container = styled.td<ContainerProps>`
  height: 80px;

  text-align: center;

  user-select: none;

  cursor: grab;

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(0, 0, 0, 0.1) 10px,
        rgba(0, 0, 0, 0.1) 20px
      );
      cursor: grabbing;
      box-shadow: none;
    `}
`;
