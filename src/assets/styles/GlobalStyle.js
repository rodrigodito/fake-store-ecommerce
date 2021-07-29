import styled, { createGlobalStyle } from 'styled-components';
import { fontPrimary, fontSecondary, bgColor, colorPrimary } from './variables';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    padding-bottom: 32px;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: ${fontPrimary};
    background: ${bgColor};
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    line-height: 1;

    &:hover,
    &:focus,
    &:active {
      border: none;
      outline: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  p {
    line-height: 1;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  a {
    text-decoration-skip-ink: auto;
    text-decoration: none;
    color: initial;
  }
`;

export const Container = styled.div`
  width: 992px;
  margin: 0 auto;
`;

export const ContainerWhite = styled(Container)`
  background: white;
  padding: 16px 32px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 8px;
  font-family: ${fontSecondary};
  font-weight: bold;
  font-size: 28px;
`;

export const ButtonDefault = styled.button`
  display: block;
  width: 100%;
  padding: 10px 0;
  margin-top: 5px;
  color: white;
  background: ${colorPrimary};
  border: 2px solid ${colorPrimary};
  text-align: center;
  font-family: ${fontSecondary};
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover, 
  &:focus,
  &:visited,
  &:active {
    background: white;
    border: 2px solid ${colorPrimary};
    color: ${colorPrimary};
  }
`;