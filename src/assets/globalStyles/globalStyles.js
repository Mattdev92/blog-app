import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}
  body {
    margin:0;
    padding:0;
    background: rgb(251,251,251);
  }
`;