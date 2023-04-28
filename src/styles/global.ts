import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
        
        scroll-behavior: smooth;
        margin: 0;
        background: #0a1c38;

        font-family: "Barlow", sans-serif;
    }


    a {
        
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    } 

    h1, h2, h3, h4, h5, span, p {
        margin: 0;
        padding: 0;
    }
`;
