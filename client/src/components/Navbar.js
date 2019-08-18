import React from 'react'
import { Navbar as StrapNavbar, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <StrapNavbar color="dark">
            <Link to='/'>
                Meridio
            </Link>
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
