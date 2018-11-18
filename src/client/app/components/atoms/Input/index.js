import styled from 'styled-components';
import { lighten } from 'polished';

import { colors } from '../colors';

const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 10px 10px;
  margin: 10px 0px;
  border: 2px solid ${lighten(0.3, colors.darkText)};

  :focus {
    border-color: yellow;
  }
`;

export default Input;
