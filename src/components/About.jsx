import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoints } from "../theme";


export const AboutContainer = styled.div`
    padding: 4em 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${breakpoints.sm} {
        flex-direction: column-reverse;
    }
`

export const AboutLeftCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    
    h4 {
        color: var(--orange01);
        font-size: var(--font-desktop-06);
        font-weight: 400;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            left: 0;
            top: 14px;
            margin-left: 80px;
            width: 50px;
            height: 2px;
            border-radius: 2px;
            background-color: var(--orange01);
        }
    }
    h2 {
        color: var(--black01);
        font-size: var(--font-desktop-02);
        font-weight: 600;
    }
    
    p {
        color: var(--gray01);
        font-size: var(--font-desktop-06);
        font-weight: 300;
    }
    
    .service-list li.list-item{
        margin-top: 10px;
        color: var(--gray01);
        font-size: var(--font-desktop-06);
        font-weight: 300;
        position: relative;
        margin-left: 25px;

        svg {
            position: absolute;
            left: 0;
            top: 2px;
            margin-left: -25px;
            color: var(--orange01);
        }
    }

    @media ${breakpoints.sm} {
        width: 100%;
        margin-top: 20px;
        h4 {
            text-align: center;
            &::after {
                display: none;
            }
        }
        h2 {
            text-align: center;
            font-size: var(--font-tablet-02);
            line-height: 1;
            margin: 10px 0;
        }
 }
`

export const AboutRightCol = styled(motion.div)`
    width: 55%;
    
    img {
        width: 100%;
    }

    @media ${breakpoints.sm} {
        width: 100%;
    }
`