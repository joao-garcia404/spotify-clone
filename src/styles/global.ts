import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --background: #0a0a0a;
    --sidebar: #070707;
    --text: #FFF;
    --secondaryText: #ABABAB;
    --thirdText: #FCFCFC;
    --activeText: #09D89D;
    --disabledText: #CCCCCC;
    --green: #0DB145;
    --spotify: #1DB954;
  }

  html,
  body {
    font-family: "Inter", sans-serif;
    background: var(--background);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
