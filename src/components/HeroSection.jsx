import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { useContext } from 'react'
import { Appcontext } from '../context'
const HeroSection = ({ name, image }) => {

const firstName=useContext(Appcontext); 

    return (
        <Wrapper>
            <div className='container grid grid-two-column'>
                <div className="section-hero-data">
                    <p className='hero-top-data'>This is me.</p>
                    <h1 className='hero-heading'>{name}</h1>
                    <p className='hero-para'> I'm {   firstName }.A full stack MERN Developer.My enthusiasm for learning and my dedication to mastering React.js fuels my drive to create clean, efficient, and user-friendly interfaces.  </p>
                    <Button className="hireme-btn btn">
                        <NavLink to="/contact">hire me</NavLink>
                    </Button>
                </div>
                <div className="section-hero-image">
                    <picture>
                        <img src={image} alt='' srcSet='' className='hero-image' />
                    </picture>
                </div>
            </div>

        </Wrapper>
    )
}
const Wrapper = styled.section`
padding:5rem 0;

.container{
    display:grid;
    // grid-template-columns: auto auto  ;
    padding:0 4.8rem; 
}
.section-hero-data{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
}
.hero-top-data{
    text-transform:uppercase;
    font-weight:500;
    font-size:1.5rem;
    color:${({ theme }) => theme.colors.helper}
}
.hero-heading{
    // text-transform:uppercase;
    font-size:5.4rem;

}
.section-hero-image{
    display:flex;
    justify-content:center;
    align-items:center;
}
.hero-para{
    margin-top:1.5rem;
    margin-bottom:3.4rem;
    max-width:60rem;
}
picture{
    text-align:center;
}
.hero-image{
    max-width:80%
}
`;

export default HeroSection