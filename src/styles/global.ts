import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        margin: 0;
        background-color: #0a1c38;
        font-family: "Barlow", sans-serif;
    }

    

    * {
        box-sizing: border-box;
    } 

    h1, h2, h3, h4, h5, span, p {
        margin: 0;
        padding: 0;
    }
`
