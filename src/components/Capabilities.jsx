import styled from "styled-components";


export const CapabilitiesContainer = styled.div`
    padding: 4em 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const CapabilitiesLeftCol = styled.div`
    width: 50%;

    h4 {
        color: var(--orange01);
        font-size: var(--font-desktop-06);
        font-weight: 400;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            top: 14px;
            right: 0;
            margin-right: 390px;
            width: 50px;
            height: 2px;
            border-bottom: 1px solid var(--orange01);
        }
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
            padding: .5em;
            margin-top: 10px;
            margin-right: 2px;
            border-radius: 5px;
            text-align: center;
            box-shadow: rgba(100, 100, 111, 0.1) 0px 0px 20px 0px;
            
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
`

export const CapabilitiesRightCol = styled.div`
    width: 50%;

    img {
        width: 100%;
        height: 100%;
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
    margin-top: 15px;
    border-radius: 10px;
    background-color: var(--orange01);

    .last-item::after{
        border-right: 0;
    }
`
export const CapabilitiesCTAItem = styled.div`
    text-align: center;
    position: relative;

    &::after {
        position: absolute;
        content: "";
        top: 0;
        right: -100px;
        height: 100%;
        border-right: 2px solid white;
    }
`