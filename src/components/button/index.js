import styled from "styled-components";
import BorderButton from "../../assets/BorderButton.svg";

const Button = styled.button`
background-color: var(--color--sand);
color: var(--color--purple);
border: none;
font: inherit;
font-size: 2rem;
font-weight: 900;
letter-spacing: 0.2em;
text-transform: uppercase;
text-shadow: 0.1rem 0.1rem 0 var(--color--sandDark),
                -0.1rem 0.1rem 0 var(--color--sandDark),
                0.1rem -0.1rem 0 var(--color--sandDark),
                -0.1rem -0.1rem 0 var(--color--sandDark);
padding-bottom: 0.6rem;
border-image: url(${BorderButton}) 8 fill / 24px / 24px;
image-rendering: pixelated;

`
export default Button;