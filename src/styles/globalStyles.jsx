import { createGlobalStyle } from 'styled-components';
import styleVariables from './variables';

const { text } = styleVariables;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: 'Work Sans', sans-serif;
    font-size: ${text.sm};
    transition: all ease 0.2s;
  }
`;

export default GlobalStyle;
