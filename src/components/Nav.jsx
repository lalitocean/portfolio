import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Nav = () => {
    return (
        <NavBar>

            <ul className='navbar-list'>
                <li className='navbar-link'>
                    <NavLink to={'/'}> Home</NavLink>
                </li>
                <li className='navbar-link' >
                    <NavLink to={'/about'}> About us</NavLink>
                </li>
                <li className='navbar-link'>
                    <NavLink to={'/services'}> Services </NavLink>
                </li>
                <li className='navbar-link'>
                    <NavLink to={'/contact'}> Contact Us</NavLink>
                </li>


            </ul>

        </NavBar>
    )
}
const NavBar = styled.nav`
 
.navbar-list{
    
    display:flex;
    justify-content:center;
    align-items:center;
    gap:4.8rem;
    a{
        color:${({ theme }) => theme.colors.white};
    }

    .navbar-link  a{
        &:active,
        &:hover{
            color:${({ theme }) => theme.colors.anothercolor};
        }
}


}
`;
export default Nav