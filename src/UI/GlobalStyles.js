import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    h1, h2, h3, h4, h5, h6, a, quote, .header {
        font-family: Fraunces, Georgia, serif !important;
    }

    body {
        font-family: Commissioner, Roboto, Lato, sans-serif;
    }
`;

export default GlobalStyles;
