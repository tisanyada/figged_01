import { createGlobalStyle } from "styled-components"

export const breakpoints = {
    sm: 'screen and (max-width: 480px)',
    md: 'screen and (max-width: 769px)',
}

export const GlobalStyles = createGlobalStyle`
    /* ROOT VARS */
    :root {
        --orange01: #FF5300;
        --orange02: #FFF7F4;

        --black00: #000000;
        --black01: #373737;
        --black02: #18191A;

        --dark01: #242526;
        --dark02: #3A3B3C;

        --gray01: #7B7B7B;

        /* fonts -> desktop*/
        --font-desktop-01: 48px;
        --font-desktop-02: 39px;
        --font-desktop-03: 31px;
        --font-desktop-04: 25px;
        --font-desktop-05: 20px;
        --font-desktop-06: 16px;
        --font-desktop-07: 12px;
        
        /* fonts -> tablet*/
        --font-tablet-01: 39px;
        --font-tablet-02: 31px;
        --font-tablet-03: 25px;
        --font-tablet-04: 20px;
        --font-tablet-05: 16px;
        --font-tablet-06: 12px;
        
        /* fonts -> mobile*/
        --font-mobile-01: 31px;
        --font-mobile-02: 25px;
        --font-mobile-03: 20px;
        --font-mobile-04: 16px;
        --font-mobile-05: 12px;
    }


    /* CONFIG */
    body {
        font-family: 'Poppins', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
    }
`