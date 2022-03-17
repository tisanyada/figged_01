import styled from "styled-components"


export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
`
export const NavLink = styled.a`
    margin-right: 30px;
    color: var(--black01);
    font-size: calc(var(--font-desktop-05) - 2px);
    cursor: pointer;
    transition: 0.3s ease;

    &.active {
        color: var(--orange01);
    }
`