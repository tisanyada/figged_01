import { motion } from "framer-motion"
import styled from "styled-components"



export const Wrapper = styled.section`
    padding: 1em 6em;
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
    border: ${(props) => props.borderSize} 'solid' ${(props) => props.borderColor ? props.borderColor : `var(-black01)`};
    border-radius: ${(props) => props.radius ? props.radius : '2px'};
    background-color: ${(props) => props.bgColor ? props.bgColor : 'rgba(0,0,0,0)'};
    font-size: ${(props) => props.fontSize ? props.fontSize : `calc(var(--font-desktop-05) - 2px)`};
    cursor: pointer;
    outline: none;
`