
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import styled from 'styled-components'

const Header = () => {
    return (
        <MainHeader>
            <NavLink to='/'>
                <h3>Ocean'sCode</h3>
            </NavLink>
            <Nav />
        </MainHeader>
    )
}
const MainHeader = styled.header`
padding:0 4.8rem;
height:5rem;
background-color:${({ theme }) => theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
 h3{
    color:${({ theme }) => theme.colors.white};
 }
 
 h3{
    &:active,
 &:hover{
     color:${({ theme }) => theme.colors.anothercolor};
 }
 }

`;

export default Header