import styled from "styled-components";


export const AboutContainer = styled.div`
    padding: 4em 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    
    .service-list li{
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
`

export const AboutRightCol = styled.div`
    width: 55%;
    
    img {
        width: 100%;
    }
`