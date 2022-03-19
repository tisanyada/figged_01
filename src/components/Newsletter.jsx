import styled from "styled-components";


export const NewsletterContainer = styled.div`
    padding: 2em;
    border-radius: 10px;
    margin: 50px 0;
    width: 100%;
    color: white;
    background-color: var(--orange01);

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NewsletterLeftCol = styled.div`
    width: 40%;

    h4 {
        color: white;
        font-size: var(--font-desktop-06);
        font-weight: 400;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            top: 14px;
            right: 210px;
            /* margin-right: -3px; */
            width: 50px;
            height: 2px;
            border-bottom: 1px solid white;
        }
    }
    h2 {
        margin-top: 20px;
        color: white;
        font-size: var(--font-desktop-02);
        font-weight: 600;
        line-height: 1.2;
    }
`

export const NewsletterRightCol = styled.div`
    width: 60%;

    div {
        position: relative;
        input {
            /* position: relative; */
            width: 100%;
            padding: 1.5em 12em 1.5em 2em;
            border: none;
            outline: none;
            border-radius: 5px;
            font-size: 1em;
        }
        label {
            position: absolute;
            background-color: var(--orange01);
            padding: 1em 2em;
            color: white;
            top: 4px;
            right: 4px;
            border-radius: 5px;
        }
    }
`