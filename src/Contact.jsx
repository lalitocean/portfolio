import React from 'react'
import styled from 'styled-components'

const Contact = () => {

  const Wrapper = styled.section`
padding:4rem 0 5rem 0;
 .container{
  text-align:center;
  margin-top:6rem;
    .contact-form{
    max-width:40rem;
    margin:auto;
      .contact-inputs{
      display:flex;
      flex-direction:column;
      gap:1.2rem;
      input[type="submit"]{
        cursor:pointer;
        transition:all 0.2s;
        &:hover{
          background-color:${({theme})=>theme.colors.white};
          border:1px solid ${({theme})=>theme.colors.btn};
          color:${({theme})=>theme.colors.btn};
          transform:scale(0.9);
        }
      }
    }
  }
 }

`;

  return (
    <Wrapper>
      <h2>Feel Free To Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27943.56074788512!2d78.46558895!3d28.899979650000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b080e5a6d11fd%3A0x77f1b07fe2fe1d55!2sAmroha%2C%20Uttar%20Pradesh%20244221!5e0!3m2!1sen!2sin!4v1695434342685!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action='https://formspree.io/f/mzbljogd' method='POST' className='contact-inputs'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              autoComplete='off'
              required />

            <input
              type='email'
              name='email'
              placeholder='Email (It is in uppercase just relax!)'
              autoComplete='off'
              required />

            <textarea
              name='message'
              cols={30}
              rows={6}
              autoComplete='off'
              placeholder='write your important message'
              required>
            </textarea>

            <input
              type='submit'
             value="send" />
          </form>
        </div>
      </div>

    </Wrapper>
  )
}

export default Contact