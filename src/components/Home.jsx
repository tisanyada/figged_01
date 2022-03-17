import styled from "styled-components"


export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
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
`
export const HomeRightCol = styled.div`
    width: 50%;
    /* height: 100%; */

    img {
        width: 100%;
        /* height: 100%; */
    }
`