import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './Style/Button';
const Error = () => {
  return (
   
     <Wrapper>
<img src='./images/error.svg'/>
<NavLink to="/"> <Button>go back</Button></NavLink>
     </Wrapper>
      
  )
}
const Wrapper=styled.section`
padding:2rem;
display:flex;
flex-direction:column;
align-items:center;

`;


export default Error