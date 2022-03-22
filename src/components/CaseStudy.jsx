import { motion } from "framer-motion"
import styled from "styled-components"
import { breakpoints } from "../theme"

export const CaseStudyContainer = styled.div`
    padding: 4em 0;
`

export const CaseStudyButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;

    @media ${breakpoints.sm} {
        .btn {
            padding: 5px 10px;
        }
    }
`

export const CaseStudyItems = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	margin-top: 35px;

    @media ${breakpoints.sm} {
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
`

export const CaseStudyItem = styled(motion.div)`
    position: relative;
    
    img {
        width: 100%;
        margin-top: -7px;
    }
    
    div {
        position: absolute;
        inset: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: var(--orange01);
        opacity: 0;
        transition: opacity .3s ease;
        
        h4 {
            margin-top: 20px;
            font-size: var(--font-desktop-04);
            font-weight: 600;
            cursor: pointer;
        }
    }

    &:hover div{
        opacity: .75;
    }
`