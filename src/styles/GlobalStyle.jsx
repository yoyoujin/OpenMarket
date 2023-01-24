import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
:root {
  --main-color: #21BF48;
}
*{
  box-sizing:border-box;
}
html,
body {
  font-family: "SpoqaHanSans", sans-serif;
  font-weight: 400;
}
a{
  
  text-decoration: none;
  color:black;
  
}
.hidden {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%); 
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
}
button{
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer;
    font: inherit;
    
  }
  a {
    color: #fff; 
    text-decoration: none; 
    outline: none
  }
`;