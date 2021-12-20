import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto';
    }
    .selecionado{
        background-color : #8DD7CF;
        border-color: #45BDB0;
    }

`;
