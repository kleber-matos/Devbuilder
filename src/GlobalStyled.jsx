import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
}

.rnc__notification-content{
    background-color: #e20001;
    border-radius: 10px;
    border: none;
}

.rnc__notification-item--success{
    border-radius: 10px;
}

.rnc__notification-item--success .rnc__notification-timer{
background-color: #a70a13;
}

.rnc__notification-item--success{
    border: none;
}
`;
