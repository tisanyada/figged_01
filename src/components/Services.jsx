import styled from "styled-components";



export const ServicesContainer = styled.div`
    padding: 4em 0;
`
export const ServiceItems = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	grid-gap: 10px;
    margin-top: 35px;
`

export const ServiceItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    
    padding: .6em 1em;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.07);

    `
export const ServiceItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    img{
        width: 20%;
    }
    h1 {
        font-size: 64px;
        color: #EFEFEF;
    }
`

export const ServiceItemBody = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-top: 10px; */

    h4 {
        color: var(--black01);
        font-size: var(--font-desktop-04);
    }
    h6 {
        color: var(--gray01);
        font-size: var(--font-desktop-07);
        font-weight: 300;
    }
    
    p {
        color: var(--gray01);
        font-size: var(--font-desktop-06);
        margin-top: 15px;
        line-height: 1.2;
        font-weight: 300;
    }
`