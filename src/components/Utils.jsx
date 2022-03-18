import { motion } from "framer-motion"
import styled from "styled-components"



export const Wrapper = styled.section`
    padding: 1em 6em;
    background-color: ${(props) => props.bgColor ? `var(--${props.bgColor})` : 'white'};
`

export const Logo = styled.h2`
    font-size: 38px;
    font-weight: 600;
    font-family: 'Work Sans', sans-serif;
    color: var(--black01);
    
    span {
        color: var(--orange01);
    }
`

export const Button = styled(motion.button)`
    padding: ${(props) => props.padding ? props.padding : 0};
    margin: ${(props) => props.margin ? props.margin : 0};
    ${(props) => props.borderSize ? `
        border: ${props.borderSize} solid ${props.borderColor ? `var(--${props.borderColor})` : 'rgba(0,0,0,0)'};
    ` : `
        border: none;
    `}
    border-radius: ${(props) => props.radius ? props.radius : '2px'};
    background-color: ${(props) => props.bgColor ? `var(--${props.bgColor})` : 'rgba(0,0,0,0)'};
    font-size: ${(props) => props.fontSize ? props.fontSize : `calc(var(--font-desktop-05) - 2px)`};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : 100};
    color: ${(props) => props.color ? props.color : 'var(--black01)'};
    cursor: pointer;
    outline: none;
`

export const SectionHeader1 = styled.h1`
    font-size: var(--font-desktop-02);
    color: var(--black01);
    /* font-weight: 400; */
`

export const SectionHeader2 = styled.h4`
    font-size: var(--font-desktop-06);
    color: var(--orange01);
    font-weight: 400;
    position: relative;


    &::before {
        position: absolute;
        content: "";
        left: 0;
        top: 14px;
        margin-left: -60px;
        width: 50px;
        height: 2px;
        border-radius: 2px;
        background-color: var(--orange01);
    } 
    &::after {
        position: absolute;
        content: "";
        left: 0;
        top: 14px;
        margin-left: 110px;
        width: 50px;
        height: 2px;
        border-radius: 2px;
        background-color: var(--orange01);
    } 
`