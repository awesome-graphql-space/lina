import React from 'react';
import styled from 'styled-components';
import is, { isNot } from 'styled-is';
import { lighten, darken } from 'polished';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

import { colors } from '../colors';

const themes = {
  primary: {
    default: `
      background: ${colors.primary};
      color: #fff;
      text-decoration: none;
      text-align: center;
    `,
    hover: `
      background: ${lighten(0.1, colors.primary)};
    `,
    disabled: `
      background: #aaa;
      color: #333;
    `
  },
  secondary: {
    default: `
      background: ${colors.frost};
      color: ${colors.frostbite};
      text-decoration: none;
      text-align: center;
    `,
    hover: `
      background: ${darken(0.5, colors.frost)};
    `,
    disabled: `
      background: #aaa;
      color: #333;
    `
  },
  buy: {
    default: `
      background: ${darken(0.1, colors.lightText)};
      color: #212121;
      font-weight:600;
      text-decoration: none;
      text-align: center;
      border-radius:25px;
      width:100%;
    `,
    hover: `
      background: ${lighten(0.05, colors.lightText)};
    `,
    disabled: `
      background: #aaa;
      color: #333;
    `
  },
  danger: {
    default: `
      background: ${lighten(0.1, colors.error)};
      color: #fff;
      text-decoration: none;
      text-align: center;
    `,
    hover: `
      background: ${lighten(0.05, colors.error)};
    `,
    disabled: `
      background: #aaa;
      color: #333;
    `
  },
  link: {
    default: `
      background: transparent;
      color: #000;
      text-decoration: none;
      text-align: center;
    `,
    hover: `
      background: ${lighten(0.5, colors.darkBg)};
    `,
    disabled: `
      background: #aaa;
      color: #333;
    `
  }
};

const sizes = {
  tiny: `
    padding: 0px 1px;
  `,
  small: `
    padding: 5px 10px;
  `,
  medium: `
    padding: 10px 15px;
    font-size: 16px;
  `,
  large: `
    padding: 30px;
    font-size: 25px;
  `,
  xlarge: `
    padding: 50px;
    font-size: 50px;
  `,
  fullWidth: `
    padding: 15px 55px;
    font-size: 16px;
    width:100%;
    `
};

function getTheme(rest) {
  const themeNames = Object.keys(themes);
  for (let i = 0; i < themeNames.length; i++) {
    if (themeNames[i] in rest) {
      return themes[themeNames[i]];
    }
  }

  return themes.primary;
}

function getSize(rest) {
  const sizeNames = Object.keys(sizes);
  for (let i = 0; i < sizeNames.length; i++) {
    if (sizeNames[i] in rest) {
      return sizes[sizeNames[i]];
    }
  }

  return sizes.medium;
}

const ButtonInner = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: inherit;
  transition: background-color 100ms;
  position: relative;
  ${p => p.size || ''};
  ${p => (p.theme ? p.theme.default : '')};
`;

const ButtonOuter = styled.button`
  display: ${p => (p.block ? 'block' : 'inline-block')};
  width: ${p => (p.block ? '100%' : 'auto')};
  border-radius: 0;
  border: none;
  padding: 0;
  appearance: none;
  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;

  &:hover ${ButtonInner} {
    ${({ theme }) => (theme ? theme.hover : ``)};
  }

  &[disabled] {
    cursor: default;

    ${ButtonInner} {
      ${({ theme }) => (theme ? theme.disabled : ``)};
    }
  }
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 2;
  font-weight: bold;
  transition: opacity 100ms, transform 100ms;

  ${isNot('shown')`
    opacity: 0;
    transform: scale(0.7);
  `};
`;

const ButtonLoading = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transform: scale(0.7);
  transition: opacity 100ms, transform 100ms;
  display: flex;
  align-items: center;
  justify-content: center;

  ${is('shown')`
    opacity: 1;
    transform: none;
  `};

  svg {
    height: 50%;
  }
`;

const Button = ({ children, loading, block, asLink, ...rest }) => {
  const theme = getTheme(rest);
  const size = getSize(rest);
  const as = asLink ? Link : 'button';

  return (
    <ButtonOuter as={as} {...rest} theme={theme} block={block}>
      <ButtonInner theme={theme} size={size}>
        <ButtonText shown={!loading}>{children}</ButtonText>
        <ButtonLoading shown={loading}>
          <Spinner />
        </ButtonLoading>
      </ButtonInner>
    </ButtonOuter>
  );
}

export default Button;