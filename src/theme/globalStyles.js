// StyledComponents - globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :active,
  :focus {
    outline: 0;
  }
  a:active,
  a:focus {
    outline: 0;
  }
  aside,
  footer,
  header,
  nav {
    display: block;
  }
  body,
  html {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    font-family: sans-serif;
  }
  button,
  input,
  textarea {
    font-family: inherit;
  }
  input::-ms-clear {
    display: none;
  }
  button {
    cursor: pointer;
  }
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  ul li {
    list-style: none;
  }
  img {
    vertical-align: top;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    box-sizing: border-box;
  }
:root {
  --color-white: #ffffff;
  --color-gray-light: #dddddd;
  --color-blue-purplish-dark:#11101d;
}
/* Firefox */
body {
  scrollbar-width: thin;
  scrollbar-color: var(--color-blue-purplish-dark) var(--color-gray-light);
}
/* Chrome/Edge/Safari */
body::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}
body::-webkit-scrollbar-track {
  background: var(--color-gray-light);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--color-blue-purplish-dark);
  border: 3px solid var(--color-gray-light);
}

.fallbackLoading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
    font-size: 36px;
  }
}
`;

export { GlobalStyle };
