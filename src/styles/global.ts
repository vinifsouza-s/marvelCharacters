import styled, { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;

    padding: 0;

    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }


  body.blocked {
    overflow: auto;
  }


  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-style: italic;
  }

  p, strong {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
  }

  p {
    font-weight: 500;
  }


`