import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../colors';

const H1 = styled.h1`
  font-size: 6rem;
  letter-spacing: -1.5;
  font-weight: 300;
  color: ${colors.darkText};
`;

const H2 = styled.h2`
  font-size: 3.75rem;
  letter-spacing: -0.5;
  font-weight: 300;
  color: ${colors.darkText};
`;

const H3 = styled.h3`
  font-size: 3rem;
  letter-spacing: 0;
  font-weight: 400;
  color: ${colors.darkText};
`;

const H4 = styled.h4`
  font-size: 2.125rem;
  letter-spacing: 0.25;
  font-weight: 400;
  color: ${colors.darkText};
`;

const H5 = styled.h5`
  font-size: 1.5rem;
  letter-spacing: 0;
  font-weight: 400;
  color: ${colors.darkText};
`;

const H6 = styled.h6`
  font-size: 1.25rem;
  letter-spacing: 0.15;
  font-weight: 500;
  color: ${colors.darkText};
`;

const Subtitle1 = styled.p`
  font-size: 1rem;
  letter-spacing: 0.15;
  font-weight: 400;
  color: ${colors.darkText};
`;

const Subtitle2 = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.1;
  font-weight: 500;
  color: ${colors.darkText};
`;

const Body1 = styled.p`
  font-size: 1rem;
  letter-spacing: 0.5;
  font-weight: 400;
  color: ${colors.darkText};
`;

const Body2 = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.25;
  font-weight: 400;
  color: ${colors.darkText};
`;

const Button = styled.p`
  font-size: 0.875rem;
  letter-spacing: 1.25;
  font-weight: 500;
  color: ${colors.darkText};
`;

const Caption = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.4;
  font-weight: 400;
  color: ${colors.darkText};
`;

const Overline = styled.p`
  font-size: 0.625rem;
  letter-spacing: 1.5;
  font-weight: 400;
  color: ${colors.darkText};
`;

const Loci = ({ type, children, ...props }) => {
  let Text = null;

  switch (type) {
    case 'H1':
      Text = H1;
      break;
    case 'H2':
      Text = H2;
      break;
    case 'H3':
      Text = H3;
      break;
    case 'H4':
      Text = H4;
      break;
    case 'H5':
      Text = H5;
      break;
    case 'H6':
      Text = H6;
      break;
    case 'Subtitle1':
      Text = Subtitle1;
      break;
    case 'Subtitle2':
      Text = Subtitle2;
    case 'Subtitle1':
      Text = Subtitle1;
      break;
    case 'Body1':
      Text = Body1;
    case 'Body2':
      Text = Body2;
      break;
    case 'Caption':
      Text = Caption;
    case 'Overline':
      Text = Overline;
      break;
    default:
      Text = Body1;
      break;
  }

  return (
    <Text {...props}>
      {children}
    </Text>
  );
}

Loci.propTypes = {
  type: PropTypes.oneOf([
    'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Subtitle1', 'Subtitle2', 'Body1', 'Body2', 'Caption', 'Overline'
  ])
}

export default Loci;