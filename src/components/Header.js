import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        let newIsOpen = !isOpen
        setIsOpen(newIsOpen)
    }
    return (
        <header>
            <Navbar className='Header' color="light" light expand="md">
                {/* To Do: Add styling to NavbarBrand */}
                <NavbarBrand href="/">Janet Ziems</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    {/* ms-auto pushes the NavItem to the far side of the navbar */}
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Home Again</NavLink>
                        </NavItem>
                        <NavItem>
                            {/* ToDo: Add github link for portfolio */}
                            {/* <NavLink href='https://github...'>Github</NavLink> */}
                        </NavItem>
                        <NavItem>
                            <NavLink to='about'>
                                <Link to='/About'>About</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}
export default Header