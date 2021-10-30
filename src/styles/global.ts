import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;

        background: #fff;

        color: #000;

        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;

        transition: all 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    table, th, td {
        border: 2px solid #000;
        border-collapse: collapse;
    }
`;
