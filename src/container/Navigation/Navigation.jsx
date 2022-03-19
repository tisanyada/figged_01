import { useState } from "react"


import { Nav, NavigationContainer, NavLink } from "@/components/Navbar"
import { Button, Logo, Wrapper } from "@/components/Utils"


const Navigation = () => {
    const [activeLink, setActiveLink] = useState(null)

    return (
        <Wrapper bgColor="orange02">
            <NavigationContainer>
                <Logo>
                    <span>Digi</span>ency
                </Logo>

                <Nav>
                    {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link, index) => (
                        <NavLink key={index}
                            onClick={() => setActiveLink(link)}
                            className={`${activeLink === link ? 'active' : ''}`}
                        >{link}</NavLink>
                    ))}

                    <Button
                        padding="10px 22px"
                        borderSize="2px"
                        borderColor="black01"
                        radius="5px"
                        whileHover={{ scale: [1, .9] }}
                        transition={{ duration: 0.5, type: 'spring' }}
                    >Let's Talk</Button>
                </Nav>
            </NavigationContainer>
        </Wrapper>
    )
}

export default Navigation