import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Globalstyle = createGlobalStyle`
  ${reset}
  * {
        font-family: "Spoqa Han Sans Neo", sans-serif;
        font-weight: 400;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html, body {
        font-family: "Spoqa Han Sans Neo", sans-serif;
        font-weight: 400;
        box-sizing: border-box;
        font-size: 10px;
    }
    .hidden {
        position: absolute;
        overflow: hidden;
        width: 1px;
        height: 1px;
        margin: -1px;
        clip-path: inset(0 0 0 0);
    }
    a {
        text-decoration: none;
    }
    button {
        border: none;
        cursor: pointer;
        background-color: inherit;
        font: inherit;
    }
    :root {
    --main-color : #21BF48;
    --main-text-color : #333333;
    --greyC4: #c4c4c4;
    --grey76 : #767676;
    --greyDB : #dbdbdb;
    --white : #FFFFFF;
  }
`;

export default Globalstyle;
