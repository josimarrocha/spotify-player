import { createGlobalStyle } from 'styled-components'

export const GlobaStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  html, body{
    -webkit-font-smoothing: antialiased;
    font-family: Arial, Helvetica, sans-serif;
  }

`