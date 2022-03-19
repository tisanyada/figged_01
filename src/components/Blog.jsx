import styled from "styled-components"


export const BlogContainer = styled.div`
    padding: 4em 0;
`

export const BlogItems = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	grid-gap: 10px;
    margin-top: 35px;
`

export const BlogItem = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 1em;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 4px;

    img {
        border-radius: 10px;
    }

    .body {
        text-align: start;
        margin-top: 10px;
        h4 {
            font-size: var(--font-desktop-05);
            font-weight: 500;
            color: var(--black01);
        }

        .tags {
            margin: 15px 0;
            display: flex;
            justify-content: space-between;
            div {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10px;
                color: var(--gray01);
                svg {
                    margin-right: 3px;
                }
            }
        }

        p {
            font-size: var(--font-desktop-06);
            color: var(--gray01)
        }
    }
`