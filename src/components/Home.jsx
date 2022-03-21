import styled from "styled-components"
import { breakpoints } from "../theme"


export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    @media ${breakpoints.sm} {
        flex-direction: column-reverse;
    }
`
export const HomeLeftCol = styled.div`
    width: 50%;
    /* height: 100%; */
    h1 {
        font-size: var(--font-desktop-01);
        color: var(--black01);
        line-height: 1.1;
        margin-bottom: 20px;
    }
    p {
        font-size: var(--font-desktop-06);
        color: var(--gray01);
    }

    @media ${breakpoints.md} {
        h1 {
            font-size:  var(--font-tablet-01);
            line-height: 1;
        }
        p {
            font-size: var(--font-tablet-06);
        }
    }
    @media ${breakpoints.sm} {
        width: 100%;
        h1 {
            font-size:  var(--font-mobile-01);
        }
    }
    `
export const HomeRightCol = styled.div`
    width: 50%;

    img {
        width: 100%;
    }

    @media ${breakpoints.sm} {
        width: 100%;
        margin-bottom: 20px;
    }
`