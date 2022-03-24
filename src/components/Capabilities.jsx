import { motion } from "framer-motion"
import styled from "styled-components"
import { breakpoints } from "../theme"


export const CapabilitiesContainer = styled.div`
    padding: 4em;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media ${breakpoints.md} {
        padding: 1em;
        flex-direction: column-reverse;
    }
    @media ${breakpoints.sm} {
        padding: 1em;
        flex-direction: column-reverse;
    }
`

export const CapabilitiesLeftCol = styled.div`
    width: 55%;

    h4 {
        color: var(--orange01);
        font-size: var(--font-desktop-06);
        font-weight: 400;
        position: relative;

        /* &::after {
            position: absolute;
            content: "";
            top: 14px;
            right: 0;
            margin-right: 390px;
            width: 50px;
            height: 2px;
            border-bottom: 1px solid var(--orange01);
        } */
    }
    h2 {
        color: var(--black01);
        font-size: var(--font-desktop-02);
        font-weight: 600;
        line-height: 1.2;
    }

    p {
        margin: 20px 0;
        font-size: var(--font-desktop-06);
        color: var(--gray01);
    }

    .capabilities {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .capability {
            width: 120px;
            height: 90px;
            padding: .5em;
            margin-top: 10px;
            margin-right: 2px;
            border-radius: 5px;
            text-align: center;
            box-shadow: rgba(100, 100, 111, 0.1) 0px 0px 5px 2px;
            
            &:last-child{
                margin-right: 0;
            }

            h1 {
                color: var(--orange01);
                font-size: var(--font-desktop-04);
            }
            p {
                margin: 0;
                font-size: var(--font-desktop-07);
            }
        }
    }

    @media ${breakpoints.md} {
        width: 100%;
        /* h4::after {
            margin-right: 190px;
        } */

        h2 {
            text-align: center;
            line-height: 1.1;
            font-size: var(--font-tablet-02);
        }
    }
    @media ${breakpoints.sm} {
        width: 100%;
        h4 {
            text-align: center;
        }

        h2 {
            margin: 5px 0;
            text-align: center;
            line-height: 1.2;
            font-size: var(--font-tablet-03);
        }
    }
`

export const CapabilitiesRightCol = styled(motion.div)`
    width: 45%;

    img {
        width: 100%;
        height: 100%;
    }

    @media ${breakpoints.md} {
        width: 100%;
    }
    @media ${breakpoints.sm} {
        width: 100%;
    }
`

export const CapabilitiesCTA = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    width: 100%;
    padding: 4em;
    margin-bottom: 100px;
    margin-top: 15px;
    border-radius: 10px;
    background-color: var(--orange01);

    .last-item::after{
        border-right: 0;
    }

    @media ${breakpoints.md} {
        text-align: center;
        padding: 2em;
    }
    @media ${breakpoints.md} {
        text-align: center;
        padding: 1em;
    }
`
export const CapabilitiesCTAItem = styled(motion.div)`
    text-align: center;
    position: relative;

    @media ${breakpoints.md} {
        margin-bottom: 20px;
        &::after {
            right: -20px;
        }
    }
    @media ${breakpoints.sm} {
        width: 100%;
    }
`