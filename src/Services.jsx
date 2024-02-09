import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from './Style/Button'
const Services = () => {
  return (
    <Wrapper2>
      <h2>Our Services</h2>
      <div className="grid-three-columns grid container service-grid-section ">
        <div>
          <img src=' \images\big-data-2103091_1280.png' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores repellat ea, eum dignissimos minima sed. Minus, laudantium cumque aperiam natus quisquam blanditiis expedita at reprehenderit vero pariatur aliquam excepturi?</p>
          <Button className="hireme-btn btn">
            <NavLink to="/service">Read More</NavLink>
          </Button>
        </div>
        <div>  <img src=' \images\ux-787980_1280.jpg' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores repellat ea, eum dignissimos minima sed. Minus, laudantium cumque aperiam natus quisquam blanditiis expedita at reprehenderit vero pariatur aliquam excepturi?</p>
          <Button className="hireme-btn btn">
            <NavLink to="/service">Read More</NavLink>
          </Button>
        </div>
        <div>  <img src=' \images\manhattan-3866140_1280.jpg' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores repellat ea, eum dignissimos minima sed. Minus, laudantium cumque aperiam natus quisquam blanditiis expedita at reprehenderit vero pariatur aliquam excepturi?</p>
          <Button className="hireme-btn btn">
            <NavLink to="/service">Read More</NavLink>
          </Button>
        </div>
        <div>  <img src=' \images\social-media-5187243_1280.png' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores repellat ea, eum dignissimos minima sed. Minus, laudantium cumque aperiam natus quisquam blanditiis expedita at reprehenderit vero pariatur aliquam excepturi?</p>
          <Button className="hireme-btn btn">
            <NavLink to="/service">Read More</NavLink>
          </Button>
        </div>
        <div>  <img src=' \images\software-developer-6521720_1280.jpg' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores repellat ea, eum dignissimos minima sed. Minus, laudantium cumque aperiam natus quisquam blanditiis expedita at reprehenderit vero pariatur aliquam excepturi?</p>
          <Button className="hireme-btn btn">
            <NavLink to="/service">Read More</NavLink>
          </Button>
        </div>
        <div>  <img src=' \images\computer-8053371_1280.jpg' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores repellat ea, eum dignissimos minima sed. Minus, laudantium cumque aperiam natus quisquam blanditiis expedita at reprehenderit vero pariatur aliquam excepturi?</p>
          <Button className="hireme-btn btn">
            <NavLink to="/service">Read More</NavLink>
          </Button>
        </div>

      </div>
    </Wrapper2>
  )
}
const Wrapper2 = styled.section`
padding:5rem 0;
background-color:${({ theme }) => theme.colors.white};


.service-grid-section{
  background:${({ theme }) => theme.colors.footer_bg}
    justify-content:center;
    justify-items:center;
    align-items:center;
    padding:0 4.8rem; 

}
.service-grid-section div{
  display:flex;
  flex-direction:column;
  justify-items:center;
  align-items:center;
  // background:red;
  border:2px solid black;
  border-radius:8px;
  padding:1.2rem;
}
.service-grid-section div img{
 max-width:100%;
 border:1px solid black;
 border-radius:3%;
 transition:all 0.2s linear;
 &:hover{
transform:scale(1.1);
border-radius:0;
border:none;
 }
}
 
.service-grid-section div p{
  margin-bottom:30px;
}
`;


export default Services