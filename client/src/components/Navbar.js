import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar as StrapNavbar, NavLink, Nav, NavbarBrand, NavItem } from 'reactstrap'

export default function Navbar() {
    return (
        <StrapNavbar color="dark">
            <NavbarBrand>
                <NavLink href='/'>
                    Meridio
                </NavLink>
            </NavbarBrand>
            <Nav>
                <NavItem className='mr-4'>
                    Log Out
                </NavItem >
                <NavItem className='mr-4'>
                    Settings
                </NavItem>
                <NavItem className='mr-4'>
                    Log In
                </NavItem>
            </Nav>
        </StrapNavbar>
    )
}
