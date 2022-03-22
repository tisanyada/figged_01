import { useEffect, useState } from "react"
import { useWindowScroll } from "react-use"
import { AiOutlineMenuFold } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'


import { Nav, NavCloseButton, NavigationContainer, NavLink, NavMenuButton } from "@/components/Navbar"
import { Button, Logo, Wrapper } from "@/components/Utils"


const Navigation = () => {
    const { y: pageYOffset } = useWindowScroll()

    const [activeLink, setActiveLink] = useState(null)
    const [showMenu, setShowMenu] = useState(false)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        if (pageYOffset > 620) return setSticky(true)
        setSticky(false)
    }, [pageYOffset])

    const setNavbar = (link) => {
        setActiveLink(link)
        setShowMenu(showMenu && !showMenu)
    }

    return (
        <Wrapper bgColor="orange02" navbar={true} sticky={sticky && sticky}>
            <NavigationContainer>
                <Logo href="#">
                    <span>Digi</span>ency
                </Logo>

                <NavMenuButton onClick={() => setShowMenu(!showMenu)}>
                    <AiOutlineMenuFold size={24} />
                </NavMenuButton>

                <Nav className={showMenu && 'active'}>
                    <NavCloseButton onClick={() => setShowMenu(!showMenu)}>
                        <IoClose size={24} />
                    </NavCloseButton>

                    {['Home', 'Services', 'About Us', 'Portfolio', 'Blog'].map((link, index) => (
                        <NavLink key={index}
                            href={`#${link.toLowerCase()}`}
                            className={`${activeLink === link ? 'active' : ''}`}
                            onClick={() => setNavbar(link)}
                        >{link}</NavLink>
                    ))}

                    <Button
                        padding="10px 22px"
                        borderSize="2px"
                        borderColor="black01"
                        radius="5px"
                        whileHover={{ scale: [1, .9] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        onClick={() => window.location.href = "#contact"}
                    >Let's Talk</Button>
                </Nav>
            </NavigationContainer>
        </Wrapper>
    )
}

export default Navigation