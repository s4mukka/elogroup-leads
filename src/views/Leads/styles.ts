import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button as BaseButton } from '../../styles';

export const Button = styled(Link)`
  ${BaseButton}

  margin-bottom: 16px;

  width: 450px;

  color: #fff;

  background: #0af;
`;
