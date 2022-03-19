import styled from "styled-components";


export const TestimonialContainer = styled.div`
    padding: 4em 0;   
`

export const TestimonialCarousel = styled.div`
    margin-top: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    
    .slick-prev::before,
    .slick-next::before {
        display: none;
    }

    .slick-slider {
        width: 100%;
        
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            
            &:last-child {
                margin-right: 0;
            }

            div.slick-slide{
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-wrap: wrap;
                background-color: white;
                padding: 1.5em;
                border-radius: 5px;
                
                .stars {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    color: var(--orange01);
                }

                .text {
                    margin: 10px 0;
                    font-size: var(--font-desktop-06);
                    color: var(--gray01);
                }
                
                .user {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 30px;
                    div{ 
                        img {
                            margin-right: 10px;
                        }
                        p {
                            color: var(--orange01);
                            font-size: var(--font-desktop-05);
                            font-weight: 500;
                            line-height: 1;
                            span {
                                font-size: var(--font-desktop-07);
                                color: var(--black01);
                                font-weight: 200;
                            }
                        }
                    }
                }
            }
        }
    }
`



export const PrevBtn = styled.button`
    svg {
        border: none;
        color: var(--gray01);
        font-size: 2rem;
        position: absolute;
        top: -5px;
        left: -30px;
    }
`
export const NextBtn = styled.button`
    svg {
        border: none;
        color: var(--gray01);
        font-size: 2rem;
        position: absolute;
        top: -5px;
        right: -30px;
    }
`