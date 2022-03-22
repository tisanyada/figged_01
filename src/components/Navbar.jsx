import { motion } from "framer-motion"
import styled from "styled-components"
import { breakpoints } from "../theme"

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
export const Nav = styled(motion.nav)`
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${breakpoints.lg} {
        position: fixed;
        flex-direction: column;
        top: 0;
        right: -96px;
        height: 100vh;
        /* width: 350px; */
        width: 0;
        background-color: #ffdfd4;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 1em 2em;
        transition: width .8s ease-in-out;

        &.active {
            width: 350px;
        }
    }
`
export const NavLink = styled.a`
    margin-right: 30px;
    color: var(--black01);
    font-size: calc(var(--font-desktop-05) - 5px);
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s ease;

    &.active {
        color: var(--orange01);
        font-size: calc(var(--font-desktop-05) - 3.5px);
    }

    @media ${breakpoints.lg} {
        margin-right: 0;
        margin-bottom: 20px;
    }
`
export const NavCloseButton = styled(motion.button)`
    background: none;
    outline: none;
    border: none;
    display: none;
    cursor: pointer;
    
    svg {
        background: none;
    }

    @media ${breakpoints.lg} {
        display: block;
        margin: 10px 0 20px 145px;
    }
`
export const NavMenuButton = styled(motion.button)`
    background: none;
    outline: none;
    border: none;
    display: none;
    cursor: pointer;

    svg {
        background: none;
    }

    @media ${breakpoints.lg} {
        display: block;
    }
`
