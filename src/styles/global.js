import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
        text-decoration: none !important;
    }
    html {
        scroll-behavior: smooth;
        font-family: 'Inter', sans-serif;
    }
    body{
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
    }

    html, body, #root{
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px){
        html{
            font-size: 93.75%;
        }
    }
    button{
        cursor: pointer;
        font-family: 'Inter', sans-serif;
    }
    a{
        text-decoration: none;
        text-decoration-color: none;
    }

`;