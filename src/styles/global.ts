import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root {
  --lightGrey: #f3f3f3;
  --lightGreen: #DAF7A6;
  --white: #ffffff;
  --blueViolet: #3f51b5;
  --grey: #E0E0E0;
  --black: #3d3d3d;
  }
  body {
     background: var(--lightGrey);
     color: var(--black);
     -webkit-font-smoothing: antialiased;
  }
  body,input,button{
    font-family: "Montserrat";
    font-size: 16px;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 500;
  }
  button{
    cursor: pointer;
  }

`;
