import styled from "styled-components"
import { breakpoints } from "../theme"
import { images } from "../constants"


export const FooterContainer = styled.div`
    padding: 4em 6em;
    width: 100%;
    color: white;
    background-image: url(${images.footerImg});

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media ${breakpoints.md} {
        padding: 3em 2em;
    }
`

export const FooterCol = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    
    h4 {
        font-size: var(--font-desktop-05);
        color: var(--orange01);
        font-weight: 800;
    }

    p {
        font-size: var(--font-desktop-06);
        color: white;
        margin-top: 20px;
    }
    
    p.content {
        font-size: var(--font-desktop-06);
        color: white;
        font-weight: 300;
        line-height: 1.5;
        margin-top: 15px;
    }

    .socials {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 10px;
        svg {
            margin: 0 15px 5px 0;
            background-color: white;
            padding: 10px;
            border-radius: 50%;
            color: var(--black01);
            cursor: pointer;
        }
    }

    @media ${breakpoints.md} {
        width: 100%;
        margin-bottom: 20px;
        .socials svg{
            margin-top: 10px;
        }
    }
    @media ${breakpoints.sm} {
        .socials svg{
            margin-top: 10px;
        }
    }
`

export const FooterRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-top: 1px solid white;
    margin-top: 30px;
    width: 100%;

    .terms-policy {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:last-child {
            margin-right: 0;
        }

        li {
            position: relative;
            margin-right: 50px;
            &::before {
                position: absolute;
                content: "";
                left: -15px;
                top: 8px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: var(--orange01);
            }
        }
    }

    @media ${breakpoints.md} {
        width: 100%;
        .terms-policy {
            margin-left: 15px;
        }
    }
`