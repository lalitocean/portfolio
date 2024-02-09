import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../Style/Button';
import { FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <Wrapper>
      {/* contact short start here  */}
      <section className="contact-short">

        <div className='grid grid-two-column'>
          <div>
            <h3>feel free to  </h3>
            <h3>contact us  </h3>
          </div>

          <div> <NavLink to="/contact"> <Button>subscribe</Button></NavLink>
          </div>


        </div>
      </section>
      {/* contact short end here  */}

      {/* footer start here  */}
      <footer>
        <div className='container grid grid-four-column'>

          <div className="footer-about">
            <h3>Ocean's Code</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, sapiente explic </p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to Get Important Updates</h3>
            <input
              type='email'
              name='email'
              placeholder='Email '
              autoComplete='off'
              required />
            <input
              type='submit'
              value="subscribe" />
          </div>

          <div className="footer-social">
            <h3> Follow Us</h3>

            <div className="footer-social--icons">
              <a href=" " target='_blank'>  <div className="icons"> <FaDiscord /></div></a>
              <a href=" " target='_blank'> <div className="icons"> <FaInstagram /></div></a>
              <a href=" " target='_blank'>  <div className="icons"> <FaYoutube /></div></a>

            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 8630507013</h3>

          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()}  code'socean all rights reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>

        </div>
      </footer>
      {/* footer end here  */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
.contact-short{
  max-width:80vh;
  max-height:30vh;
  margin: 0 auto;
  padding:2rem 2rem;
  background-color:${({ theme }) => theme.colors.bg};
  border-radius:1rem;
  box-shadow:${({ theme }) => theme.colors.shadowsupport};
  transform:translateY(50%); 

  .grid div:last-child{
    justify-self:end;
    align-self:center;
  }

}
 
footer{
  padding:10rem 0 6rem 0  ;
  background-color:${({ theme }) => theme.colors.footer_bg};
  h3{
    color:${({ theme }) => theme.colors.hr};
    margin-bottom:2.4rem;

  }
  P{
    color:${({ theme }) => theme.colors.white};

  }
  .footer-social--icons{
    display:flex;
    gap:2rem;
     
    div{
      display:flex;
      align-itmes:center;
      padding:1rem;
      border-radius:50%;
      border:2px solid ${({ theme }) => theme.colors.white};
     
        color:${({ theme }) => theme.colors.white};
        font-size:1.4rem;
        position:relative;
        cursor:pointer;     
    } 
  }
.footer-bottom--section{
  padding-top:5rem;
  hr{
    margin-bottom:1rem;
    color:${({ theme }) => theme.colors.white};
    height:0.1px;
  }
}
}

 
`;
export default Footer