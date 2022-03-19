import styled from "styled-components"
import { images } from "../constants"


export const FooterContainer = styled.div`
    padding: 4em 6em;
    width: 100%;
    color: white;
    background-image: url(${images.footerImg});

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const FooterCol = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h4 {
        font-size: var(--font-desktop-04);
        color: var(--orange01);
        font-weight: 800;
    }

    p {
        font-size: var(--font-desktop-06);
        color: white;
        margin-top: 20px;
    }
    
    p.content {
        font-size: var(--font-desktop-05);
        color: white;
        font-weight: 300;
        line-height: 1.5;
        margin-top: 15px;
    }

    .socials {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
        svg {
            margin: 0 15px 0 0;
            background-color: white;
            padding: 10px;
            border-radius: 50%;
            color: var(--black01);
            cursor: pointer;
        }
    }
`

export const FooterRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`