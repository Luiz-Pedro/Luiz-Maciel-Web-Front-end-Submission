import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @-webkit-keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
        text-decoration: none !important;
        ::-moz-selection { /* Code for Firefox */
            color: ${props => props.theme.colors.neutralGray};
            background: ${props => props.theme.colors.primary};
        }

        ::selection {
            color: ${props => props.theme.colors.neutralGray};
            background: ${props => props.theme.colors.primary};
        }
    }
    input[type='checkbox']:after {
        width: 15px;
        height: 15px;
        border-radius: 4px;
        border: solid 2px #808693;
        top: -2px;
        left: -4px;
        position: relative;
        background-color: white;
        content: '';
        display: inline-block;
        visibility: visible;
        cursor: pointer;
    }

    input[type='checkbox']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 4px;
        border: solid 2px #E3087E;
        top: -2px;
        left: -4px;
        position: relative;
        background-color: #ffe5f3;;
        content: '✔';
        display: flex;
        align-items: center;
        justify-content: center;
        color:#E3087E;
        visibility: visible;
        cursor: pointer;
    }
    html {
        scroll-behavior: smooth;
        font-family: 'Inter', sans-serif;
    }

    body{
        background: ${props => props.theme.colors.background};
        
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