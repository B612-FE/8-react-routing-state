import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@200;600&display=swap');
  
body {
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color:white;
  margin: 0;
  font-family: 'Hahmlet', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalStyle;
