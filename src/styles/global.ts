import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --red: #D32E2A;
    --green: #49AA55;
    --blue: #4D6FA9;
    --blue-logo: #004AAD;   
    --yellow: #F6E24B;
    --gray: #434142;
    --mediumGray: #BAADB4;
    --lightPink: #F7A691;
    --lightGray: #FFFBF8;
    --lightGreen: #5B7F7B;
    --lightblue: #7D9ABC;
}

@media (max-width: 1080px) {
    html{
        font-size: 93.75%;
    } 
}

@media (max-width: 720px) {
    html{
        font-size: 87.5%;
    }
}

body{
    font: 400 16px "Roboto", sans-serif;
}

button{
    font-family: 'Roboto';
    cursor: pointer;
    border: 0;
}


`