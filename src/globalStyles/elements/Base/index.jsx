import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
html{
    font-size: 10px;
}

body{

    background-color: var(--color--green);
    font-family: 'VT323', monospace;
    box-sizing: border-box;
}


`;

export default Base;
