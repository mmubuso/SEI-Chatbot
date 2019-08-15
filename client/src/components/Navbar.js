import React from 'react'
import { Navbar as StrapNavbar, Nav, NavbarBrand, NavItem } from 'reactstrap'

export default function Navbar() {
    return (
        <StrapNavbar color="dark">
            <NavbarBrand href='/'>
                Meridio
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
